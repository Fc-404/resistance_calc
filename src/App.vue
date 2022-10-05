<template>
  <div id="app">
    <div id="app-select">
      <div id="calc-option" :class="[curSelect == 'calc' ? 'selected' : 'unselected']" @click="calcClick">
        <img src="@/assets/calc-pic.png">
        <p>普通计算电阻</p>
      </div>
      <div id="adapt-option" :class="[curSelect == 'adapt' ? 'selected' : 'unselected']" @click="adaptClick">
        <img src="@/assets/adapt-pic.png">
        <p>自动适配电阻</p>
      </div>
    </div>
    <div id="app-function">
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
    data() {
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
  .selected {
    background-image: linear-gradient(135deg, #3C8CE7 10%, #00EAFF 100%);
  }

  .unselected {
    background-color: #a8dbf0;
  }

  #app {
    height: 100%;
    width: calc(100% + 50px);
    background-color: #E8E8E8;
    user-select: none;
  }

  #app-select {
    height: 100%;
    width: 50px;
    box-shadow: 0 0 20px 10px #BBB;
    display: inline-block;
    transition: width .2s ease-in-out;
  }

  #app-select:hover {
    width: 90px;
    transition: width .2s ease-in-out;
  }

  #calc-option,
  #adapt-option {
    position: relative;
    overflow: hidden;
    height: 50%;
    width: 100%;
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
    color: white;
  }

  #app-function {
    width: calc(100% - 150px);
    height: calc(100% - 50px);
    display: inline-block;
    position: relative;
    margin: 25px;
    margin-bottom: 0;
  }
</style>