<template>
  <div id="root-appointR">
    <setR @rAndN="rAndN($event)"></setR>
    <div style="height: 20px"></div>
    <div id="results">
      <div style="height: 20px;"></div>
      <div id="result" v-for="i in resultCount" class="loaded">
        <showR :info="testData"></showR>
      </div>
      <div style="height: 100px;"></div>
    </div>
  </div>
</template>

<script>
  import setR from './setR'
  import showR from '../showR'

  export default {
    name: 'appointR',
    props: {
      rSum: Number
    },
    data() {
      return {
        rAndNData: null,
        calculateHandle: null,
        resultCount: 3,
        testData: {
          sum: 1234,
          rArr: [
            {
              sum: 123,
              rArr: [
                10, 20, 30
              ],
            },
          ],
        }
      }
    },
    methods: {
      rAndN(v) {
        clearTimeout(calculateHandle)

        this.rAndNData = v
        this.calculateHandle = setTimeout(this.calculate, 1000)
      },
      calculate() {

      }
    },
    components: {
      setR,
      showR,
    }
  }
</script>

<style scoped>
  #root-appointR {
    width: calc(100% - 50px);
    height: calc(100% - 25px);
    margin: 25px 25px 0 25px;
  }

  #result {
    margin-bottom: 30px;
    width: calc(100% - 40px);
    min-height: 60px;
    padding: 20px;
  }

  .loaded {
    border-radius: 12px;
    background-color: white;
    box-shadow: 10px 10px 10px 1px #ccc;
  }
</style>