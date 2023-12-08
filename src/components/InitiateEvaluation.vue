<script setup>

import {ref} from "vue";

const selectedEvaluationType=ref("auto");

const selectedMode = ref('ERNIE-Bot')

const selectModelData = [
  {
    value: 'ERNIE-Bot',
    label: 'ERNIE-Bot',
  },
  {
    value: 'Option2',
    label: 'Option2',
  }
]

const selectedQuestionBank = ref('')

const optionalQuestionBankData = [
  {
    value: 'ERNIE-Bot',
    label: 'ERNIE-Bot',
  },
  {
    value: 'Option2',
    label: 'Option2',
  }
]

function changeEvaluationType(val){
  selectedEvaluationType.value=val;
}
</script>

<template>
  <div class="initiate-evaluation">
    <div class="content">
      <div class="title">发起测评</div>
      <div class="evaluation-type">
        <div class="evaluation-type-item" @click="changeEvaluationType('auto')" :class="{'isSelected':selectedEvaluationType==='auto'}">自动评测</div>
        <div class="evaluation-type-item" @click="changeEvaluationType('artificial')" :class="{'isSelected':selectedEvaluationType==='artificial'}">人工评测</div>
      </div>
      <div class="select-model">
        <span class="label">选择模型</span>
        <el-select v-model="selectedMode" class="m-2" placeholder="Select" size="small">
          <el-option
              v-for="item in selectModelData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </div>
      <div class="optional-question-bank">
        <span class="label">选择题库</span>
        <el-select v-model="selectedQuestionBank" class="m-2" placeholder="请选择" size="small">
          <el-option
              v-for="item in optionalQuestionBankData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </div>
      <button class="submit-btn">发布</button>
    </div>
  </div>
</template>

<style scoped>
.initiate-evaluation {
  height: 100%;
  overflow: hidden;

  .content {
    margin: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    border-radius: 15px;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      margin-top: 124px;
      color: #000000e6;
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0.24px;
    }

    .evaluation-type {
      display: flex;
      margin: 40px 0;

      .evaluation-type-item {
        display: flex;
        padding: 8px 24px;
        justify-content: center;
        align-items: center;
        gap: 4px;
        flex: 1 0 0;
        border-radius: 3px 0 0 3px;
        border: 1px solid #DCDCDCFF;
        background: #FFF;
        cursor: pointer;
      }

      .isSelected {
        color: #00A9CEFF;
        border-color: #00A9CEFF;
      }
    }

    .select-model {
      display: flex;
      align-items: baseline;
      margin-right: 72px;
      margin-bottom: 30px;
    }

    .optional-question-bank {
      display: flex;
      align-items: baseline;
      margin-right: 72px;
      margin-bottom: 33px;
    }

    .submit-btn {
      width: 330px;
      height: 40px;
      padding: 8px 24px;
      border-radius: 3px;
      background: #00A9CE;
      border: 0;
      color: #ffffffe6;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      cursor: pointer;
    }

    .label {
      margin-right: 16px;
      color: #00000080;
      text-align: right;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    }

    :deep(.el-input__wrapper) {
      padding: 5px 8px;
      width: 314px;
      height: 22px;
    }

    :deep(.el-input__inner) {
      display: flex;
      height: 22px;
      flex-direction: column;
      justify-content: center;
      flex: 1 0 0;
      overflow: hidden;
      color: #000000e6;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    }
  }
}
</style>
