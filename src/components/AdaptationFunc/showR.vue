<template>
  <div id="root-showR">
    <p id="rSum">电阻和：<span>{{ sum }}</span></p>
    <div style="height: 20px;"></div>
    <div id="parallelR" v-for="i in rArrCount">
      <p>{{ _sum[i-1] }}</p>

      <p v-for="ii in _rArrCount[i-1]">{{ info.rArr[i-1].rArr[ii-1] }}</p>

      <div style="height: 6px;"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'showResistance',
    props: {
      info: Object
      // info: {
      //   sum: Number,           The sum of resistances
      //   rArr: [
      //     {
      //       sum: Number,       The sum of a array of resistances
      //       rArr: [
      //         Number           Each number is value each resistance of a array
      //       ],
      //     },
      //   ],
      // }
    },
    data() {
      return {
        // The following four lines of code prevent Object Not referenced or Array Overflow
        sum: 0,                 // Resistance Sum
        rArrCount: 0,           // Series resistance Array Count
        _sum: [],               // One of Series resistance Sum
        _rArrCount: [],         // One of Series resistance Count
      }
    },
    methods: {

    },
    mounted() {
      // Check data
      (function (_this) {
        let existErr = 'Information is not complete.'
        let typeErr = 'Type of Information is not correct.'
        try {
          if (!(_this.info.sum)
            || !(_this.info.rArr)) {
            throw '[sum, rArr]' + existErr
          }
          if (_this.info.sum.constructor != Number) {
            throw '[sum]' + typeErr
          }
          if (_this.info.rArr.constructor != Array) {
            throw '[rArr]' + typeErr
          }
          if (_this.info.rArr.length < 1) {
            throw '[rArr]' + existErr
          }
          for (let i of _this.info.rArr) {
            if (!(i.sum))
              throw '[>sum]' + existErr
            if (i.sum.constructor != Number)
              throw '[>sum]' + typeErr
            if (i.rArr.constructor != Array)
              throw '[>rArr]' + typeErr
            if (i.rArr.length < 1)
              throw '[>rArr]' + existErr
            for (let ii of i.rArr) {
              if (ii.constructor != Number)
                throw '[>rArr>]' + typeErr
            }
          }
        } catch (err) {
          console.log(err)
          return false
        }
      })(this);

      (function (_this) {
        // Group ecery three numbers and set variable of sum
        let sumStr = _this.info.sum.toString()
        let sub = sumStr.length % 3
        sub = (sub == 0 ? 3 : sub)
        _this.sum = sumStr.substring(0, sub)
        for (let i = sub; i < sumStr.length; i = i + 3) {
          _this.sum += (',' + sumStr.substring(i, i + 3))
        }

        _this.rArrCount = _this.info.rArr.length
        // Separating information of data to variable
        for (let i of _this.info.rArr) {
          _this._sum.push(i.sum)
          _this._rArrCount.push(i.rArr.length)
        }
      })(this);
    },
  }
</script>
<style scoped>
  #rSum {
    background-image: linear-gradient(135deg, #3C8CE7 10%, #00EAFF 100%);
    display: inline-block;
    padding: 6px;
    border-radius: 8px;
    color: #d7f3ff;
  }

  #rSum span {
    color: tomato;
    font-weight: 900;
    font-size: 20px;
  }

  #parallelR {
    display: inline-block;
    min-width: 60px;
    min-height: 20px;
    border: 2px solid #e5e5e5;
    border-radius: 12px;
    margin: 20px 12px;
    position: relative;
    vertical-align: middle;
  }

  #parallelR::before,
  #parallelR::after {
    content: '';
    width: 12px;
    height: 2px;
    background-color: tomato;
    position: absolute;
    left: -14px;
    top: calc(50% - 1px);
  }

  #parallelR::after {
    left: auto;
    right: -14px;
  }

  #parallelR p:first-child {
    background-color: #e5e5e5;
    display: inline-block;
    position: relative;
    top: -2px;
    left: -2px;
    padding: 6px;
    border-radius: 12px 0 0 0;
    color: tomato;
  }

  #parallelR p {
    text-align: center;
    color: #5e5e5e;
  }

  #parallelR p:nth-child(odd) {
    background-color: #e5e5e5;
  }
</style>