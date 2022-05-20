<template>
    <div id="c-root" @click="p">
        <div style="height: 100px;"></div>
        <div id="sum">
            <span>电阻总和</span>
            <span>
                {{ rSum }}
                <!--
                --><span>{{ unit }}<span>Ω</span></span>
            </span>
        </div>
        <div style="height: 20px;"></div>
        <div id="eqa-pool">
            <RCell v-show="isShow"></RCell>
            <!-- <RCell v-show="isShow"></RCell> -->
        </div>
    </div>
</template>

<script>
    import RCell from './RCell.vue'

    export default {
        name: 'Calculation',
        props: {
        },
        data: function () {
            return {
                rSum: 90,
                unit: 'k',
                isShow: true,
            }
        },
        methods: {
            p(str) {
                this.isShow = !this.isShow
            }
        },
        components: {
            RCell,
        }
    }
</script>

<style scoped>
    #c-root {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: auto;
    }

    #sum {
        width: 100%;
        height: 200px;
        background-color: rgba(68, 184, 228, .6);
        position: relative;
        font-family: 'youyuan';
    }

    #sum>span:first-child {
        font-size: 32px;
        font-weight: 200;
        position: absolute;
        bottom: 20px;
        left: calc(50% - 150px);
        color: rgb(20, 113, 150);
    }

    #sum>span:nth-child(2) {
        font-size: 128px;
        font-weight: 500;
        position: absolute;
        bottom: 0px;
        left: 50%;
        color: white;
    }

    #sum>span:nth-child(2) span {
        font-size: 32px;
        bottom: 0;
        color: rgb(20, 113, 150);
    }

    #eqa-pool {
        width: calc(100% - 100px);
        height: calc(100% - 420px);
        overflow: auto;
        padding: 50px;
    }
</style>