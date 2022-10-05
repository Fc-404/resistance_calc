<template>
    <div id="root-rcell">
      <span id="sum">{{ rSum }}<span style="color: #147196;"> Ω</span></span>
      <transition-group name="squeeze" tag="inRcellPool">
        <div id="input" v-for="i in count" :key="i">
          <input v-model="va[i-1]" :onkeyup="checkInput(i)">
          <div @click="inDel(i-1)">-</div>
        </div>
      </transition-group>
      <div id="add" class="add" @click="add">+</div>
      <div id="in-add" class="add" @click="inAdd">+</div>
    </div>
</template>

<script>
  export default {
    name: 'RCell',
    props: {
      index: Number,
      rcellInfo: Object,
    },
    data() {
      return {
        va: ['0'],
        count: 1,
      }
    },
    methods: {
      add() {
        this.$emit('addRCell', this.index)
      },
      inAdd() {
        this.count++
        this.va.push('0')
      },
      inDel(index) {
        if (this.count == 1) {
          this.$emit('delRCell', this.index)
          return
        }
        this.count--
        this.va.splice(index, 1)
      },
      checkInput(index) {
        if (index) {
          var i = index
          var ii = i - 1
        }
        else {
          var i = this.va.length
          var ii = 0
        }

        for (ii = 0; ii < i; ii++) {
          if (this.va[ii])
            var v =
              /[1-9]+[0-9]*[kKmM]{0,1}/
                .exec(this.va[ii])
          this.va[ii] = v ? v.toString() : '0'
        }
      }
    },
    mounted() {
      this.va = JSON.parse(JSON.stringify(this.rcellInfo.rList))
      this.count = this.va.length
    },
    watch: {
      rcellInfo: function () {
        this.va = JSON.parse(JSON.stringify(this.rcellInfo.rList))
        this.count = this.va.length
      },
      rSum: function () {
        this.checkInput()
        this.$emit('updateResistance', [this.index, this.va, this.rSum])
      }
    },
    computed: {
      rSum() {
        var sum = 0
        var rlist = []
        for (let i in this.va) {
          switch (this.va[i][this.va[i].length - 1]) {
            case 'k':
            case 'K':
              rlist.push(parseInt(this.va[i].replace(/[kK]/, '000')))
              break
            case 'm':
            case 'M':
              rlist.push(parseInt(this.va[i].replace(/[mM]/, '000000')))
              break
            default:
              rlist.push(parseInt(this.va[i]))
          }
        }
        var overR = 0
        for (let i of rlist) {
          if (i == 0)
            continue
          overR += (1 / i)
        }
        var R = 0
        if (overR != 0) {
          R = Number((1 / overR).toFixed(2))
        }

        return R
      }
    }
  }
</script>

<style scoped>
  #root-rcell {
    display: inline-block;
    position: relative;
    margin: 60px 20px 0 0;
    box-shadow: 10px 10px 10px 1px #ccc;
    border-radius: 20px;
    vertical-align: top;
    background-image: linear-gradient( 135deg, #FFFFFF 10%, #E8E8E8 100%);;
  }

  #sum {
    height: 20px;
    font-size: 18px;
    color: white;
    background-image: linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%);
    padding: 6px;
    border-radius: 6px;
    position: absolute;
    top: -40px;
    left: 20px;
  }

  #input {
    height: 60px;
    width: 200px;
    display: block;
    border-radius: 12px;
    background-image: linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%);
    margin: 20px 100px 20px 20px;
    position: relative;
  }

  #input input {
    margin: 0;
    height: 30px;
    width: 140px;
    position: relative;
    top: 15px;
    left: 15px;
    border: none;
    border-radius: 6px;
    background-color: transparent;
    font-size: 20px;
    text-align: center;
    color: white;
    outline: none;
  }

  #input div {
    width: 45px;
    height: 60px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0 12px 12px 0;
    text-align: center;
    font-size: 42px;
    line-height: 60px;
    font-weight: 900;
    color: tomato;
    user-select: none;
    transition: all .15s ease-in-out;
  }

  #input div:hover {
    color: white;
    background-color: tomato;
    transition: all .15s ease-in-out;
  }

  .add {
    display: inline-block;
    font-size: 42px;
    font-weight: 900;
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 50%;
    text-align: center;
    margin: 0 20px;
    vertical-align: top;
    user-select: none;
    transition: all .15s ease-in-out;
    color: #0396FF;
  }

  .add:hover {
    background-color: #0396FF;
    color: white;
    transition: all .15s ease-in-out;
  }

  #add {
    position: absolute;
    top: 20px;
    left: calc(100% - 100px);
  }

  #in-add {
    display: block;
    position: relative;
    left: 80px;
    margin: 0 0 20px 0;
  }
</style>