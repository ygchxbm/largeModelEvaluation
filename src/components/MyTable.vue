<script setup>
const myTableData = {
  head: ["发起人", "评测时间", "Model", "ARC", "ARC", "HellaSwag", "MMLU", "TruthfulQA", "MMLU", "TruthfulQA", "TruthfulQA"],
  content: [
    ["shirleytao", "2023-12-24", "ERNIE-Bot", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1"],
    ["shirleytao", "2023-12-24", "ERNIE-Bot", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1"],
    ["shirleytao", "2023-12-24", "ERNIE-Bot", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1"],
    ["shirleytao", "2023-12-24", "ERNIE-Bot", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1"],
    ["shirleytao", "2023-12-24", "ERNIE-Bot", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1", "72.1"]
  ]
}
</script>

<template>
    <div class="my-table">
      <div class="head-column">
        <div class="head-column-cell" v-for="item in myTableData.head">{{ item }}</div>
      </div>
      <div class="table-data">
        <div class="table-column" v-for="item in myTableData.content">
          <div class="table-column-cell" v-for="value in item">{{ value }}</div>
        </div>
      </div>
      <div class="column"></div>
    </div>
</template>

<style scoped>
.my-table {
  display: flex;
  flex-direction: column;
  border-left: 1px solid #E7E7E7;
  border-top: 1px solid #E7E7E7;

  .head-column {
    display: flex;
    width: 100%;
    background: #F8F8F8;

    .head-column-cell {
      height: 46px;
      line-height: 46px;
    //border: 1px solid black; border-right: 1px solid #E7E7E7;
      border-bottom: 1px solid #E7E7E7;
      box-sizing: border-box;
      text-align: center;
      flex: 1;

      color: #00000099;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }
  }

  .table-column {
    display: flex;
    width: 100%;
    cursor: pointer;

    .table-column-cell {
      height: 46px;
      line-height: 46px;
      border-right: 1px solid #E7E7E7;
      border-bottom: 1px solid #E7E7E7;
    //border: 1px solid black; box-sizing: border-box;
      text-align: center;
      flex: 1;

      overflow: hidden;
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
  }

  .table-column:hover {
    background: #F8F8F8;
  }
}
</style>
