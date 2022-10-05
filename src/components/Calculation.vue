<template>
  <div id="root-calc">
    <div style="height: 20px;"></div>
    <div id="sum">
      <span>电阻总和</span>
      <span>
        {{ rSum }}<span>&nbsp;{{ unit }}<span>Ω</span></span>
      </span>
    </div>
    <div id="eqa-pool">
      <transition-group name="squeeze" tag="rcellPool">
        <div v-for="i in rcellCount" :key="i" style="display: inline-block">
          <RCell @updateResistance="updateResistance($event)" @delRCell="delRCell($event)" @addRCell="addRCell($event)"
            :rcellInfo="rcellArr[i-1]" :index="i"></RCell>
        </div>
        <div style="height: 80px" key="fixed"></div>
      </transition-group>
    </div>
  </div>
</template>

<script>
  import RCell from './RCell.vue'

  export default {
    name: 'Calculation',
    props: {
    },
    data() {
      return {
        unit: '',
        rcellArr: [{ rList: ['0'], sum: 0 }],
        rcellCount: 1,
      }
    },
    methods: {
      updateResistance(v) {
        this.rcellArr[v[0] - 1].rList = JSON.parse(JSON.stringify(v[1]))
        this.rcellArr[v[0] - 1].sum = v[2]
      },
      delRCell(v) {
        if (this.rcellCount == 1) {
          return
        }
        this.rcellArr.splice(v - 1, 1)
        this.rcellCount--
      },
      addRCell(v) {
        this.rcellArr.splice(v, 0, { rList: ['0'], sum: 0 })
        this.rcellCount++
      }
    },
    computed: {
      rSum() {
        var sum = 0
        for (var i in this.rcellArr) {
          sum += this.rcellArr[i].sum
        }

        if (sum % 1000000 == 0) {
          sum = sum / 1000000
          this.unit = 'M'
        } else if (sum % 1000 == 0) {
          sum = sum / 1000
          this.unit = 'K'
        } else {
          this.unit = ''
        }
        return sum
      }
    },
    components: {
      RCell,
    }
  }
</script>

<style scoped>
  #root-calc {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  #sum {
    width: 100%;
    height: 200px;
    background-image: linear-gradient( 135deg, #00EAFF 10%, #3C8CE7 100%);
    position: relative;
    font-family: 'youyuan';
  }

  #sum>span:first-child {
    font-size: 32px;
    font-weight: 200;
    position: absolute;
    bottom: 20px;
    left: calc(40% - 150px);
    color: rgb(20, 113, 150);
  }

  #sum>span:nth-child(2) {
    font-size: 128px;
    font-weight: 500;
    position: absolute;
    bottom: 0px;
    left: 40%;
    color: white;
  }

  #sum>span:nth-child(2) span {
    font-size: 32px;
    bottom: 0;
    color: rgb(20, 113, 150);
  }

  #eqa-pool {
    width: calc(100% - 100px);
    height: calc(100% - 270px);
    overflow: auto;
    padding: 50px 50px 0 50px;
  }
</style>