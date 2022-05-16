<template>
  <div id="app">
    <div id="select">
      <div id="calc-option" :class="[curSelect == 'calc' ? 'selected' : 'unselected']" @click="calcClick">
        <img src="@/assets/calc-pic.png">
        <p>普通计算电阻</p>
      </div>
      <div id="adapt-option" :class="[curSelect == 'adapt' ? 'selected' : 'unselected']" @click="adaptClick">
        <img src="@/assets/adapt-pic.png">
        <p>自动适配电阻</p>
      </div>
    </div>
    <div id="function">
      <Calculation v-show="curSelect == 'calc'"></Calculation>
      <Adaptation v-show="curSelect == 'adapt'"></Adaptation>
    </div>
  </div>
</template>

<script>
  import Calculation from './components/Calculation.vue'
  import Adaptation from './components/Adaptation.vue'

  export default {
    name: 'App',
    data: function () {
      return {
        curSelect: 'calc',
      }
    },
    methods: {
      calcClick: function () {
        this.curSelect = 'calc'
      },
      adaptClick: function () {
        this.curSelect = 'adapt'
      }
    },
    components: {
      Calculation,
      Adaptation
    }
  }
</script>

<style scoped>
  .white {
    background-color: rgba(232, 233, 226, 1);
  }

  .selected {
    background-color: rgba(68, 184, 228, 1);
    transition: all .15s ease-in-out;
  }

  .unselected {
    background-color: rgba(68, 184, 228, .6);
    transition: all .15s ease-in-out;
  }

  #app {
    height: 100%;
    width: calc(100% + 50px);
    background-color: rgba(232, 233, 226, 1);
  }

  #select {
    height: 100%;
    width: 50px;
    display: inline-block;
    transition: width .2s ease-in-out;
  }

  #select:hover {
    width: 90px;
    transition: width .2s ease-in-out;
  }

  #calc-option,
  #adapt-option {
    position: relative;
    overflow: hidden;
    height: 50%;
    width: 100%;
    border-radius: 20px 0 0 20px;
  }

  #calc-option img,
  #adapt-option img {
    position: relative;
    top: calc(50% - 20px);
    left: 5px;
    width: 40px;
  }

  #calc-option p,
  #adapt-option p {
    position: absolute;
    height: 100%;
    top: 0;
    left: 50px;
    writing-mode: vertical-lr;
    text-align: center;
    font-size: 20px;
    letter-spacing: 6px;
    color: rgba(232, 233, 226, 1);
  }

  #function {
    width: calc(100% - 112px);
    height: calc(100% - 12px);
    display: inline-block;
    border: 6px solid rgba(68, 184, 228, 1);
    border-radius: 0 20px 20px 0;
    position: relative;
  }
</style>