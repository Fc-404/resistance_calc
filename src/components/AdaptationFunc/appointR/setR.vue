<template>
  <div id="root-setR">
    <div id="warn">数量为空或0时，则代表不限制数量。</div><br><br>
    <transition-group name="squeeze" tag="setRBox">
      <div id="setBox" v-for="i in count" :key="i">
        <transition name="squeeze">
          <div id="tip" v-show="!rData[i-1][3]">无效</div>
        </transition>
        <input id="rValue" placeholder="阻值" v-model="rData[i-1][0]" @blur="checkR(i-1)">
        <input id="rCount" placeholder="数量" v-model="rData[i-1][2]" @blur="send()" type="number" min="0">
        <div id="boxDel" @click="del(i-1)">-</div>
      </div>
    </transition-group>
    <div id="boxAdd" @click="add">+</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rData: [['', 0, '', 1]],
        // [resistance: string, resistance: number, count: number, valid: boolean]
        count: 1,
      }
    },
    methods: {
      add() {
        this.rData.push(['', 0, '', 1])
        this.count++

        this.checkR(this.count - 2)
      },
      del(i) {
        if (this.count <= 1) {
          return
        }
        this.rData.splice(i, 1)
        this.count--
      },
      checkR(i) {
        var v = this.tools.unitFormat(this.rData[i][0])
        if (!v) {
          this.rData[i][0] = ''
          this.rData[i][3] = 0
          return
        }

        this.rData[i][0] = v[0]
        this.rData[i][1] = v[1]

        for (let index in this.rData) {
          if (i != index) {
            if (this.rData[index][0] == this.rData[i][0]) {
              this.rData[i][3] = 0
              return
            }
          }
        }
        this.rData[i][3] = 1
        this.send()
      },
      send() {
        this.$emit('rAndN', JSON.parse(JSON.stringify(this.rData)))
      }
    }
  }
</script>
<style scoped>
  #root-setR {
    width: 100%;
    height: auto;
  }

  #warn {
    background-color: rgb(231, 231, 96);
    color: #5e5e5e;
    padding: 6px;
    border-radius: 6px;
    display: inline;
  }

  #tip {
    color: white;
    background-color: tomato;
    display: inline;
    position: absolute;
    padding: 6px;
    border-radius: 6px;
    top: 12px;
    left: -12px;
  }

  #setBox {
    position: relative;
    height: 60px;
    width: 300px;
    margin: 12px 24px;
    display: inline-block;
    border-radius: 12px;
    box-shadow: 5px 5px 10px 1px #ccc;
    background-image: linear-gradient(135deg, #3C8CE7 10%, #00EAFF 100%);
  }

  #rValue {
    width: 150px;
    height: 60px;
    border: none;
    background-color: transparent;
    font-size: 20px;
    text-align: center;
    color: white;
    outline: none;
  }

  #rCount {
    width: 80px;
    height: 60px;
    border: none;
    margin-left: 20px;
    background-color: transparent;
    font-size: 16px;
    color: rgb(20, 113, 150);
    outline: none;
  }

  #rCount::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  #rValue::-webkit-input-placeholder,
  #rCount::-webkit-input-placeholder {
    color: #a8dbf0;
  }

  #boxDel {
    width: 45px;
    height: 60px;
    color: tomato;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 42px;
    text-align: center;
    line-height: 60px;
    font-weight: 900;
    border-radius: 0 12px 12px 0;
    transition: all .15s ease-in-out;
  }

  #boxDel:hover {
    color: white;
    background-color: tomato;
    transition: all .15s ease-in-out;
  }

  #boxAdd {
    display: inline-block;
    width: 60px;
    height: 60px;
    margin: 12px;
    vertical-align: top;
    border-radius: 50%;
    background-color: white;
    color: #0396FF;
    font-size: 42px;
    text-align: center;
    line-height: 60px;
    font-weight: 900;
    box-shadow: 5px 5px 10px 1px #ccc;
    transition: all .15s ease-in-out;
  }

  #boxAdd:hover {
    background-color: #0396FF;
    color: white;
    transition: all .15s ease-in-out;
  }
</style>