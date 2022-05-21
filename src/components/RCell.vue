<template>
    <transition name="rcell">
        <div id="rcell-root">
            <span id="rcell-sum">{{ rSum }}<span style="color: #147196;"> Ω</span></span>
            <transition-group name="rcell" tag="inRcellPool">
                <div id="rcell-input" v-for="i in count" :key="i">
                    <input v-model="va[i-1]" :onkeyup="checkInput(i-1)">
                    <div @click="inDel">-</div>
                </div>
            </transition-group>
            <div id="rcell-add" class="rcell-add">+</div>
            <div id="rcell-in-add" class="rcell-add" @click="inAdd">+</div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'RCell',
        props: {
        },
        data() {
            return {
                va: ['0k'],
                count: 1,
            }
        },
        methods: {
            inAdd() {
                this.count++
                this.va.push('0k')
            },
            inDel() {
                this.count--
                this.va.pop()
            },
            checkInput(index) {
                if (this.va[index])
                    var v =
                        /[1-9]+[0-9]*[kKmM]{0,1}/
                            .exec(this.va[index])
                this.va[index] = v ? v.toString() : '0k'
            }
        },
        computed: {
            rSum() {
                var sum = 0
                for (var i in this.va) {
                    var temp = 0
                    switch (this.va[i][this.va[i].length - 1]) {
                        case 'k':
                        case 'K':
                            sum += parseInt(this.va[i].replace(/[kK]/, '000'))
                            break
                        case 'm':
                        case 'M':
                            sum += parseInt(this.va[i].replace(/[mM]/, '000000'))
                            break
                        default:
                            sum += parseInt(this.va[i])
                    }
                }
                return sum
            }
        }
    }
</script>

<style scoped>
    .rcell-enter-active,
    .rcell-leave-active {
        transition: all .2s ease-in-out;
    }

    .rcell-enter-from,
    .rcell-leave-to {
        transform: scale(0);
        opacity: 0;
    }

    #rcell-root {
        display: inline-block;
        position: relative;
        margin: 0 20px 0 0;
        box-shadow: 5px 5px 20px 1px #ccc;
        border-radius: 20px;
        vertical-align: top;
    }

    #rcell-sum {
        height: 20px;
        font-size: 18px;
        color: white;
        background-color: rgba(68, 184, 228, .6);
        padding: 6px;
        border-radius: 6px;
        position: absolute;
        top: -40px;
        left: 20px;
    }

    #rcell-input {
        height: 60px;
        width: 200px;
        display: block;
        border-radius: 12px;
        background-color: rgba(68, 184, 228, 1);
        margin: 20px 100px 20px 20px;
        position: relative;
    }

    #rcell-input input {
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

    #rcell-input div {
        width: 45px;
        height: 60px;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0 12px 12px 0;
        text-align: center;
        font-size: 42px;
        line-height: 60px;
        color: #5e5e5e;
        user-select: none;
        transition: all .1s ease-in-out;
    }

    #rcell-input div:hover {
        color: white;
        background-color: tomato;
        transition: all .1s ease-in-out;
    }

    .rcell-add {
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
        transition: all .1s ease-in-out;
        color: #5e5e5e;
    }

    .rcell-add:hover {
        background-color: rgba(68, 184, 228, 1);
        color: white;
        transition: all .1s ease-in-out;
    }

    #rcell-add {
        position: absolute;
        top: 20px;
        left: calc(100% - 100px);
    }

    #rcell-in-add {
        display: block;
        position: relative;
        left: 80px;
        margin: 0 0 20px 0;
    }
</style>