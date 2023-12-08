<script setup>

import {ref} from "vue";
import MyTableWithCheckout from "@/components/MyTableWithCheckout.vue";
import router from "@/router/index.js";

const evaluationModelData = [
  "Natural Questions_QA", "WebQuestions_QA", "TriviaQA_QA", "TyDi QA_QA", "MMLU_subject", "AGIEval-EN_subject", "ARC-e_subject", "ARC-e_subject",
  "ARC-e_subject", "HellaSwag_Reason", "WinoGrande_Reason", "TyDi QA_QA", "MMLU_subject", "AGIEval-EN_subject", "ARC-e_subject", "ARC-c_subject",
]

const modelSizeData = [
  "小于1B", "1B～3B", "3B-7B", "7B-13B", "13B-40B", "40B以上"
]

const modelTypeData = [
  "预训练", "微调",
]

const checkEvaluationMode = ref(['Option1']);
const checkModelSize = ref(['Option1']);
const checkModelTypeData = ref(['Option1']);


const tableData = [
  {check: true, Model: "ERNIE-Bot", NaturalQuestions_QA: "72.1", WebQuestions_QA: "72.1", TriviaQA_QA: "72.1", TyDiQA_QA: "72.1", TruthfulQA: "72.1", MMLU: "72.1",},
  {check: false, Model: "xfSpark2", NaturalQuestions_QA: "69.9", WebQuestions_QA: "69.9", TriviaQA_QA: "69.9", TyDiQA_QA: "69.9", TruthfulQA: "69.9", MMLU: "69.9",},
  {check: false, Model: "xfSpark2", NaturalQuestions_QA: "69.9", WebQuestions_QA: "69.9", TriviaQA_QA: "69.9", TyDiQA_QA: "69.9", TruthfulQA: "69.9", MMLU: "69.9",},
  {check: false, Model: "ERNIE-Bot", NaturalQuestions_QA: "72.1", WebQuestions_QA: "72.1", TriviaQA_QA: "72.1", TyDiQA_QA: "72.1", TruthfulQA: "72.1", MMLU: "72.1",},
  {check: false, Model: "ERNIE-Bot", NaturalQuestions_QA: "72.1", WebQuestions_QA: "72.1", TriviaQA_QA: "72.1", TyDiQA_QA: "72.1", TruthfulQA: "72.1", MMLU: "72.1",},
  {check: false, Model: "ERNIE-Bot", NaturalQuestions_QA: "72.1", WebQuestions_QA: "72.1", TriviaQA_QA: "72.1", TyDiQA_QA: "72.1", TruthfulQA: "72.1", MMLU: "72.1",},
]

function mychange() {

}

function startComparing(){
  router.push({name:"ModelDetails"})
}
</script>

<template>
  <div class="home">
    <div class="content">
      <div class="evaluation-model parameter">
        <div class="label">评测任务：</div>
        <el-checkbox-group class="checkboxes" v-model="checkEvaluationMode" @change="mychange" size="large">
          <el-checkbox v-for="item in evaluationModelData" :label="item" border/>
        </el-checkbox-group>
      </div>
      <div class="model-size parameter">
        <div class="label">模型大小：</div>
        <el-checkbox-group class="checkboxes" v-model="checkModelSize" @change="mychange" size="large">
          <el-checkbox v-for="item in modelSizeData" :label="item" border/>
        </el-checkbox-group>
      </div>
      <div class="model-type parameter">
        <div class="label">模型类别：</div>
        <el-checkbox-group class="checkboxes" v-model="checkModelTypeData" @change="mychange" size="large">
          <el-checkbox v-for="item in modelTypeData" :label="item" border/>
        </el-checkbox-group>
        <button class="compare-btn" @click="startComparing">对比</button>
      </div>
<!--      <div class="mode-table">-->
<!--        <el-table :data="tableData" style="width: 1650px" border>-->
<!--          <el-table-column prop="check" width="50"><el-checkbox size="large" /></el-table-column>-->
<!--          <el-table-column prop="Model" label="Model" width="200"/>-->
<!--          <el-table-column prop="NaturalQuestions_QA" label="Natural Questions_QA" width="200"/>-->
<!--          <el-table-column prop="WebQuestions_QA" label="WebQuestions_QA" width="200"/>-->
<!--          <el-table-column prop="TriviaQA_QA" label="TriviaQA_QA" width="200"/>-->
<!--          <el-table-column prop="TyDiQA_QA" label="TyDi QA_QA" width="200"/>-->
<!--          <el-table-column prop="TruthfulQA" label="TruthfulQA" width="200"/>-->
<!--          <el-table-column prop="MMLU" label="MMLU" width="200"/>-->
<!--          <el-table-column prop="TruthfulQA" label="TruthfulQA" width="200"/>-->
<!--        </el-table>-->
<!--      </div>-->
      <div class="temp-table">
        <MyTableWithCheckout></MyTableWithCheckout>
      </div>
      <div class="interactive-specification">
        <div class="title">交互说明：</div>
        <div class="texts">
          <div class="text">1、 【对比按钮】默认不展示</div>
          <div class="text">2、批量选择，仅允许选择2～5个，选择后，再展示【对比按钮】</div>
          <div class="text">3、点击对比按钮跳转到模型详情</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 100%;
  overflow: hidden;

  .content {
    margin: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    border-radius: 15px;
    background: #FFFFFF;

    .parameter {
      margin: 0 30px;
      display: flex;
      align-items: baseline;

      .label {
        min-width: 80px;
      }

      .checkboxes {
        display: flex;
        flex-wrap: wrap;
        margin-left: 15px;

        .el-checkbox {
          margin-right: 10px;
          margin-bottom: 10px;
          background: linear-gradient(180deg, #FFF 0%, #F8F8F8 100%);
          border-radius: 6px;
          border-color: #E7E7E7FF;
          color: #000000E6;
        }

        .el-checkbox.is-checked {
          border-color: #48aacb;
        }

        :deep(.el-checkbox__input.is-checked .el-checkbox__inner ) {
          background-color: #48aacb; /* 设置选中状态的背景颜色为红色 */
          border-color: #48aacb; /* 设置选中状态的边框颜色为红色 */
        }

        :deep(.el-checkbox__input.is-checked+.el-checkbox__label) {
          color: #000000E6;
        }
      }
    }

    .evaluation-model {
      padding-top: 30px;
    }

    .model-size {
      padding: 4px 0;
    }

    .model-type {
      position: relative;
      margin-bottom: 10px;

      .compare-btn {
        width: 80px;
        height: 40px;
        border-radius: 3px;
        background: #00A9CEFF;
        border: 0;
        color: #ffffffe6;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        position: absolute;
        right: -10px;
        cursor: pointer;
      }
    }

    .mode-table {
      width: 1650px;
      margin: 20px 20px 0 20px;
      border: 1px solid #E7E7E7;

      :deep(.el-checkbox__input.is-checked .el-checkbox__inner){
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
      margin: 20px;
    }

    .interactive-specification{
      width: 511px;
      height: 186px;
      flex-shrink: 0;
      border-radius: 12px;
      border: 2px dashed #FD5A5A;
      background: #FFF;
      margin-top: 203px;
      margin-left: 40px;
      .title{
        margin: 13px 0 13px 19px;
        color: #000000ff;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
      }
      .texts{
        margin-left: 41px;
        color: #000000ff;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
      }
    }
  }
}
</style>
