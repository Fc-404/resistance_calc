<template>
  <div id="a-root">
    <div style="height: 100px;"></div>
    <div id="a-setRSum">
      <span>设置需求电阻(Ω)</span>
      <input v-model="rsum" type="number" min="0" :onkeyup="start">
      <div id="a-funSelect">
        <span v-for="i in functions" :class="[i[2] == 1 ? 'selected' : '']" @click="funClick(i)">{{ i[0] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Adaptation',
    data() {
      return {
        rsum: 0,
        delayDealHandle: null,
        delayDealEvent: null,
        functions: [
          ['指定电阻', this.appointR, 1],
          ['指不定电阻', this.nappointR, 0],
          ['指不指的定电阻', this.appointR, 0],
        ],
      }
    },
    methods: {
      start() {
        clearTimeout(this.delayDealHandle)
        this.checkInput()

        this.delayDealHandle = setTimeout(this.delayDealEvent, 1000)
      },
      checkInput() {
        var v = /[1-9]+[0-9]*/g.exec(this.rsum)
        this.rsum = v ? v : 0
      },
      funClick(i) {
        for (let i of this.functions) {
          i[2] = 0
        }
        i[2] = 1
        setTimeout(i[1], 0)
      },
      appointR: function () {
        alert()
      },
      nappointR: function () {
        alert('n')
      },
    },
  }
</script>

<style scoped>
  #a-root {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  #a-setRSum {
    width: 100%;
    height: 200px;
    background-color: rgba(68, 184, 228, .6);
    position: relative;
  }

  #a-setRSum>span {
    font-size: 32px;
    color: rgb(20, 113, 150);
    line-height: 140px;
    margin-left: calc(50% - 250px);
  }

  #a-setRSum>input {
    height: 64px;
    width: auto;
    text-align: left;
    font-size: 64px;
    margin-left: 32px;
    color: white;
    border: none;
    background-color: transparent;
    outline: none
  }

  #a-setRSum>input::-webkit-inner-spin-button {
    appearance: none;
  }

  #a-funSelect {
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
  }

  #a-funSelect span {
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 20px;
    color: rgb(20, 113, 150);
    padding: 0 12px;
    display: inline-block;
    flex-grow: 1;
    transition: all .1s ease-in-out;
  }

  .selected {
    transition: all .1s ease-in-out;
    background: linear-gradient(to bottom, transparent, rgb(68, 184, 228));
  }
</style>