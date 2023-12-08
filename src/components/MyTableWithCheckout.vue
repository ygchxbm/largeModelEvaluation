<script setup>
import {computed, ref} from "vue";

const myTableData = {
  head: ["", "Model", "Natural Questions_QA", "WebQuestions_QA", "TriviaQA_QA", "TyDi QA_QA", "TruthfulQA", "MMLU", "TruthfulQA"],
  content: [
    [false, "ERNIE-Bot", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1"],
    [true, "xfSpark2", "69.9", "69.9", "69.9", "69.9", "69.9", "69.9", "69.9"],
    [false, "xfSpark2", "69.9", "69.9", "69.9", "69.9", "69.9", "69.9", "69.9"],
    [false, "ERNIE-Bot", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1"],
    [false, "ERNIE-Bot", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1"],
  ]
}


const checkBoxes=ref([false,true,false,false,false])
</script>

<template>
  <div class="my-table">
    <div class="head-column">
      <div class="head-column-cell" v-for="item in myTableData.head">{{ item }}</div>
    </div>
    <div class="table-data">
      <div class="table-column" v-for="(item,index) in myTableData.content" :class="{'table-column_isChecked':checkBoxes[index]}">
        <div class="table-column-cell" v-for="value in item">
          <div v-if="typeof value==='boolean'">
            <el-checkbox v-model="checkBoxes[index]" size="large"/>
          </div>
          <div v-else>{{ value }}</div>
        </div>
      </div>
    </div>
    <div class="column"></div>
  </div>
</template>

<style scoped>
.my-table {
  min-width: 1230px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #E7E7E7;
  border-top: 1px solid #E7E7E7;
  background: #FFFFFF;

  .head-column {
    display: flex;
    width: 100%;
    background: #F8F8F8;

    .head-column-cell {
      height: 46px;
      line-height: 46px;
    //border: 1px solid black; border-right: 1px solid #E7E7E7; border-bottom: 1px solid #E7E7E7; box-sizing: border-box; text-align: center;
      flex: 1;

      color: #00000099;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }

    :first-child {
      flex: 0.2;
    }
  }

  .table-column {
    display: flex;
    width: 100%;
    cursor: pointer;

    :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
      background-color: #48aacb; /* 设置选中状态的背景颜色为红色 */
      border-color: #48aacb;
    }

    .table-column-cell {
      height: 46px;
      line-height: 46px;
      border-right: 1px solid #E7E7E7;
      border-bottom: 1px solid #E7E7E7;
    //border: 1px solid black; box-sizing: border-box; text-align: center; flex: 1; overflow: hidden;
      color: #000000e6;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }

    :nth-child(3) {
      color: #00A9CEFF;
    }

    :first-child {
      flex: 0.2;
    }
  }

  .table-column:hover {
    background: #F8F8F8;
  }

  .table-column_isChecked{
    background: #F8F8F8;
  }
}
</style>
