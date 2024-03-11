<template>
  <div class="app">
    <!-- search组件 -->
    <input @input="search" type="text" placeholder="输入关键词搜索"/>
    <!-- 表格 -->
    <table>
      <thead>
        <tr>
          <th>就诊日期</th>
          <th>医生姓名</th>
          <th>诊断结果</th>
          <th>处方信息</th>
          <th>操作</th>
        </tr>
      </thead>
      <Item :dataArray="showRecords" ></Item>
    </table>
    <PopUp v-show="isPopUp"></PopUp>
  </div>
</template>

<script>
import Item from "./components/MedicalItem.vue";
import PopUp from "./components/PopUp.vue";
import Bus from "./EventBus";
export default {
  components: {
    Item,
    PopUp
  },
  data() {
    return {
      records: [
        {
          date: "2022-01-01",
          doctor: "张三",
          diagnosis: "感冒",
          prescription: "感冒药",
        },
        {
          date: "2022-02-01",
          doctor: "李四",
          diagnosis: "头疼",
          prescription: "止疼药",
        },
        {
          date: "2022-03-01",
          doctor: "王五",
          diagnosis: "腰痛",
          prescription: "止痛贴",
        },
      ],
      showRecords: [],
      isPopUp: false,
    };
  },
  methods: {
    search(e) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.showRecords = this.records.filter((item) => {
        return item.doctor.includes(e.target.value);
      });        
      }, 500);
    },
  },
  created() {
    this.showRecords = this.records;
    Bus.$on('showPop', (value) => {
      this.isPopUp = value
    })
  }
};
</script>

<style scoped>

.app {
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
}
.app table {
  margin-top: 20px;
  width: 100%;
  border: 1px solid #ccc;
  border-collapse: collapse;
}
thead {
  background-color: #ebebeb;
}
th,
td {
  border: 1px solid #ccc;
  height: 30px;
  text-align: center;
}
/* .app thead {
  width: 100%;
} */
</style>