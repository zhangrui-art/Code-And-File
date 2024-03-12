<template>
  <div class="app">
    <MyContent :dataArray="tagList">
      <template #header>
        <label for="">本周热搜 TOP5</label>
      </template>
      <template #content="{dataArray}">
        <div v-for="item in dataArray" :key="item.id" class="tag-wrapper">
          <div class="tag">#{{ item.name }}</div>
          <div class="icon">🔥 {{ item.hot  }}</div>
        </div>
      </template>
    </MyContent>
    <MyContent :dataArray="humanList">
      <template #header>
        <label for="">可能感兴趣的人</label>
        <span>👀 换一批</span>
      </template>
      <template #content="{dataArray}">
        <div v-for="item in dataArray" :key="item.id" class="human-wrapper">
          <div class="human">
            <div>
              <span style="font: 20px sans-serif; font-weight: 600; color: #333"
                >{{ item.name  }}</span
              >&nbsp;<span>{{ item.sex }} {{ item.age }}岁</span>
            </div>
            <div>研究领域： {{ item.field }}</div>
            <div>{{ item.school }} · {{  item.position }}</div>
          </div>
          <button class="lookup">+ 关注</button>
        </div>
      </template>
    </MyContent>
  </div>
</template>

<script>
export default {
  components: {
    MyContent: () => import("./components/MyContent.vue"),
  },
  data() {
    return {
      tagList: [
        { id: 1, name: "区块链" , hot: 96 },
        { id: 2, name: "数据挖掘" , hot: 91 },
        { id: 3, name: "无人机" , hot: 87 },
        { id: 4, name: "生命科学" , hot: 73 },
        { id: 5, name: "生物技术" , hot: 90 },
        { id: 6, name: "传感器" , hot: 60 }
      ],
      humanList: [
        {
          id: 1,
          name: "李国盛",
          sex: "♂",
          age: 52,
          field: "机电一体化技术",
          school: "哈尔滨工业大学",
          position: "教授",
        },
        {
          id: 2,
          name: "陈颖",
          sex: "♀",
          age: 36,
          field: "人工智能",
          school: "清华大学",
          position: "副教授",
        },
        {
          id: 3,
          name: "张大炮",
          sex: "♂",
          age: 18,
          field: "前端",
          school: "哈佛牛逼大学（俗称哈牛逼大学）",
          position: "大大大大教授",
        }
      ]
    };
  },
};
</script>

<style scoped>
.app {
  top: 0;
  left: 0;
  width: 400px;
  height: 900px;
  padding: 10px 20px;
  background-color: #f4f6fa;
  position: absolute;
  text-align: center;
  box-sizing: border-box;
}
</style>>