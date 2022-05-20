<template>
    <transition name="rcell">
        <div id="rcell-root">
            <div id="rcell-input"></div>
            <div id="rcell-add">+</div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'RCell',
        props: {

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
        height: 60px;
        display: inline-block;
        margin: 20px;
    }

    #rcell-input {
        height: 60px;
        width: 200px;
        display: inline-block;
        border-radius: 20px;
        background-color: red;
        margin: 0;
    }

    #rcell-add {
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
    }
</style>