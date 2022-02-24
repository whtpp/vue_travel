<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="title">
        <div class="span">当前城市</div>
        <div class="title-city">
          <button class="title-button">南京</button>
        </div>
      </div>
      <div class="title">
        <div class="span">热门城市</div>
        <div class="title-city">
          <button class="title-button">南京</button>
          <button class="title-button">南京</button>
          <button class="title-button">南京</button>
          <button class="title-button">南京</button>
          <button class="title-button">南京</button>
          <button class="title-button">南京</button>
          <button class="title-button">南京</button>
          <button class="title-button">南京</button>
        </div>
      </div>
      <div class="title">
        <div class="span">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
      <div class="title">
        <div class="span">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Bscroll from 'better-scroll'
export default {

  name: "CityList",
  mounted(){
      this.scroll = new Bscroll(this.$refs.wrapper)
  }
};
</script>

<style scoped>
.list {
  overflow: hidden;
  position: absolute;
  top: 6.7rem;
  bottom: 0;
  color: rgb(78, 76, 76);
  background-color: antiquewhite;
}
.span {
  box-sizing: border-box;
  padding: 0.4rem;
  font-size: 1.2rem;
  font-weight: 500;
  height: 2rem;
  text-indent: 0.5rem;
}
.title-city {
  overflow: hidden;
  background-color: #fff;
}
.title-button {
  float: left;
  margin: 0.5rem 1rem;
  width: 5rem;
  height: 2rem;
  line-height: 1.7rem;
  text-align: center;
  font-size: 1.2rem;
  border: 0.1rem solid #ccc;
  background-color: #fff;
}
.item-list {
  background-color: #fff;
}
.item {
  font-size: 1.2rem;
  line-height: 2.6rem;
  text-indent: 0.6rem;
  border-bottom: 0.1rem solid rgb(228, 223, 223);
}
</style>