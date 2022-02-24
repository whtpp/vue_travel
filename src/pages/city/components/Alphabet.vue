<template>
  <div>
      <ul>
          <li class="item">A</li>
          <li class="item">A</li>
          <li class="item">A</li>
          <li class="item">A</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: ' CityAlphabet'
}
</script>

<style scoped>
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        width:5%;
        right:0;
        top:7rem;
        bottom:0;
        
    }
    .item{
        line-height:3rem;
        text-align: left;
        font-size: 1.2rem;
        color:rgb(238, 115, 43);
    }
</style>