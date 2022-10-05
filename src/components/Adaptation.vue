<template>
  <div id="root-adapt">
    <div style="height: 20px;"></div>
    <div id="set">
      <span>设置需求电阻(Ω)</span>
      <input v-model="rsumS" :onkeyup="start">
      <div id="funSelect">
        <span v-for="(item, i) in functions" :class="[item[2] == 1 ? 'selected' : '']" @click="funClick(i)">{{ item[0]
          }}</span>
      </div>
    </div>
    <div id="view">
      <ar v-show="funSelected == 0" :rSum="rsum"></ar>
    </div>
  </div>
</template>

<script>
  import ar from './AdaptationFunc/appointR/appointR.vue'

  export default {
    name: 'Adaptation',
    data() {
      return {
        rsumS: '521',
        rsum: 521,
        delayDealHandle: null,
        delayDealEvent: null,
        functions: [
          ['指定电阻', this.appointR, 1],
          ['自动适配', this.nappointR, 0],
        ],
        funSelected: 0,
      }
    },
    methods: {
      start() {
        clearTimeout(this.delayDealHandle)
        this.checkInput()

        this.delayDealHandle = setTimeout(this.delayDealEvent, 1000)
      },
      checkInput() {
        var v = this.tools.unitFormat(this.rsumS)
        if (v) {
          this.rsumS = v[0]
          this.rsum = v[1]
        }
      },
      funClick(i) {
        this.functions[this.funSelected][2] = 0
        this.funSelected = i
        this.functions[i][2] = 1
        setTimeout(this.functions[i][1], 0)
      },
      appointR: function () {
      },
      nappointR: function () {
      },
    },
    components: {
      ar,
    }
  }
</script>

<style scoped>
  #root-adapt {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  #set {
    width: 100%;
    height: 200px;
    background-image: linear-gradient(135deg, #00EAFF 10%, #3C8CE7 100%);
    position: relative;
  }

  #set>span {
    font-size: 32px;
    color: rgb(20, 113, 150);
    line-height: 140px;
    margin-left: calc(50% - 250px);
  }

  #set>input {
    height: 64px;
    width: auto;
    text-align: left;
    font-size: 64px;
    margin-left: 32px;
    margin-top: 32px;
    color: white;
    border: none;
    background-color: transparent;
    outline: none;
    position: absolute;
  }

  #set>input::-webkit-inner-spin-button {
    appearance: none;
  }

  #funSelect {
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
  }

  #funSelect span {
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 20px;
    color: rgb(20, 113, 150);
    padding: 0 12px;
    display: inline-block;
    flex-grow: 1;
  }

  .selected {
    background: linear-gradient(to bottom, transparent, #E8E8E8);
  }

  #view {
    width: 100%;
    height: calc(100% - 220px);
    overflow: auto;
  }
</style>