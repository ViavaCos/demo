<template>
  <div class="animate">
      <h2>animate</h2>

        <div class="selector">
        <!-- <transition name="fade">
            <div v-if="show" class="selector-dropdown"></div>
        </transition> -->

            <button @click="show = !show">点击展开/关闭</button>
            <transition name="fade">   <!--这里的name 和 css 类名第一个字段要一样-->
                <div class="selector-dropdown"  v-show="show"></div>
            </transition>
        </div>

        <button @click="boxshow = !boxshow">点击展开/关闭</button>
        <transition name="draw">   <!--这里的name 和 css 类名第一个字段要一样-->
            <div class="box"  v-show="boxshow"></div>
        </transition>
  </div>
</template>

<script>
export default {
    name:'Animate-demo',
    data(){
        return {
            show: false,
            boxshow: false
        }
    },
    mounted () {
        // window.addEventListener('click', () => {
        //     console.log('click')
        //     this.show = false
        // })
    },
    methods: {
        showDropDown() {
            this.show = !this.show
        }
    }
}
</script>

<style lang="less" scoped>

.selector-dropdown {
    width: 200px;
    height: 260px;
    background-color: chartreuse;
}
.fade-enter-active, .fade-leave-active {
  transition: all 1s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
}


.box{
    height:200px;width: 200px;
    background-color:black;
}
.draw-enter-active, .draw-leave-active {
    transition: all 1s ease;
}
.draw-enter, .draw-leave-to /* .fade-leave-active below version 2.1.8 */ {
    height: 0;
}
</style>