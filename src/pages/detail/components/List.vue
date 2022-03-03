<template>
  <div>
    <div v-for="(item, index) of list" :key="index">
      <div class="item-title">
        {{ item.title }}
      </div>
      <div v-if="item.children">
        <detail-list :list="item.children" class="item-children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: Array,
  },
};
</script>

<style scoped>
.item-title {
  line-height: 2rem;
  font-weight: 500;
  line-height: 3rem;

  border-bottom: 0.05rem solid rgb(116, 155, 175);
  font-size: 1.2rem;
  padding: 0 1rem;
}
.item-children {
    padding-left:2rem;
}
</style>