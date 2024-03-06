<template>
  <section class="main">
    <ul class="todo-list">
      <li v-for="(item,index) in list" :key="item.id" class="todo">
        <div class="view">
          <span class="index">{{ index+1  }}.</span> <label>{{ item.content }}</label>
          <button @click="del(item.id)" class="destroy"></button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  methods: {
    del(id) {
      this.$emit('del', this.list.filter(item => item.id !== id))
    }
  }
};
</script>

<style>
</style>