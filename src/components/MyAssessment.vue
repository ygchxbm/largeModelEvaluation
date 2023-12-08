<script setup>
import {ref} from "vue";
import MyTable from "@/components/MyTable.vue";

const selectedMode = ref("");
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

const tableData = [
  {check: true, Model: "ERNIE-Bot", NaturalQuestions_QA: "72.1", WebQuestions_QA: "72.1", TriviaQA_QA: "72.1", TyDiQA_QA: "72.1", TruthfulQA: "72.1", MMLU: "72.1",},
  {check: false, Model: "xfSpark2", NaturalQuestions_QA: "69.9", WebQuestions_QA: "69.9", TriviaQA_QA: "69.9", TyDiQA_QA: "69.9", TruthfulQA: "69.9", MMLU: "69.9",},
  {check: false, Model: "xfSpark2", NaturalQuestions_QA: "69.9", WebQuestions_QA: "69.9", TriviaQA_QA: "69.9", TyDiQA_QA: "69.9", TruthfulQA: "69.9", MMLU: "69.9",},
  {check: false, Model: "ERNIE-Bot", NaturalQuestions_QA: "72.1", WebQuestions_QA: "72.1", TriviaQA_QA: "72.1", TyDiQA_QA: "72.1", TruthfulQA: "72.1", MMLU: "72.1",},
  {check: false, Model: "ERNIE-Bot", NaturalQuestions_QA: "72.1", WebQuestions_QA: "72.1", TriviaQA_QA: "72.1", TyDiQA_QA: "72.1", TruthfulQA: "72.1", MMLU: "72.1",},
  {check: false, Model: "ERNIE-Bot", NaturalQuestions_QA: "72.1", WebQuestions_QA: "72.1", TriviaQA_QA: "72.1", TyDiQA_QA: "72.1", TruthfulQA: "72.1", MMLU: "72.1",},
]
</script>

<template>
  <div class="my-assessment">
    <div class="content">
      <div class="select-inputs">
        <div class="initiator">
          <span class="label">发起人</span>
          <el-select v-model="selectedMode" class="m-2" placeholder="请选择" size="small">
            <el-option
                v-for="item in selectModelData"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>
        <div class="evaluation-time">
          <span class="label">评测时间</span>
          <el-select v-model="selectedMode" class="m-2" placeholder="请选择" size="small">
            <el-option
                v-for="item in selectModelData"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>
        <div class="model-type">
          <span class="label">模型</span>
          <el-select v-model="selectedMode" class="m-2" placeholder="请选择" size="small">
            <el-option
                v-for="item in selectModelData"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <!--      <div class="mode-table">-->
      <!--        <el-table :data="tableData" style="width: 1620px" border>-->
      <!--          <el-table-column prop="Model" label="发起人" width="120"/>-->
      <!--          <el-table-column prop="NaturalQuestions_QA" label="评测时间" width="150"/>-->
      <!--          <el-table-column prop="NaturalQuestions_QA" label="Model" width="150"/>-->
      <!--          <el-table-column prop="WebQuestions_QA" label="ARC" width="150"/>-->
      <!--          <el-table-column prop="TriviaQA_QA" label="ARC" width="150"/>-->
      <!--          <el-table-column prop="TriviaQA_QA" label="HellaSwag" width="150"/>-->
      <!--          <el-table-column prop="TyDiQA_QA" label="MMLU" width="150"/>-->
      <!--          <el-table-column prop="TyDiQA_QA" label="TruthfulQA" width="150"/>-->
      <!--          <el-table-column prop="TruthfulQA" label="MMLU" width="150"/>-->
      <!--          <el-table-column prop="MMLU" label="TruthfulQA" width="150"/>-->
      <!--          <el-table-column prop="TruthfulQA" label="TruthfulQA" width="150"/>-->
      <!--        </el-table>-->
      <!--      </div>-->
      <div class="temp-table">
        <MyTable></MyTable>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-assessment {
  height: 100%;
  overflow: hidden;

  .content {
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    margin: 20px;
    border-radius: 15px;
    background: #FFFFFF;
    overflow: hidden;

    .select-inputs {
      display: flex;
      align-items: baseline;
      margin-top: 30px;
      margin-left: 38px;
      margin-bottom: 20px;

      .label {
        color: #00000080;
        text-align: right;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        margin-right: 16px;
      }

      :deep(.el-input__wrapper) {
        padding: 5px 8px;
        width: 184px;
        height: 22px;
        margin-right: 35px;
      }

      :deep(.el-input__inner) {
        display: flex;
        height: 22px;
        flex-direction: column;
        justify-content: center;
        flex: 1 0 0;
        overflow: hidden;
        color: #00000066;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
      }
    }

    .mode-table {
    //width:1620px ; //margin:0 auto; margin-left: 20px;

      :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
        background-color: #48aacb; /* 设置选中状态的背景颜色为红色 */
        border-color: #48aacb;
      }

      :deep(.el-table__header-wrapper .el-table__cell) {
        height: 22px;
        flex: 1 0 0;
        overflow: hidden;
        color: #000000b3;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
      }

      :deep(tbody .el-table__row .el-table__cell) {
        height: 22px;
        flex: 1 0 0;
        overflow: hidden;
        color: #000000e6;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
      }
    }

    .temp-table{
      margin: 24px 20px 0 20px;
    }
  }
}
</style>
