<template>
  <div v-if="!openClose.state" class="open-close-widget" @click="openWidget">
    <div>
      <div class="background-image">
      </div>
    </div>
    <div class="texts">
      <h2>Complete Missões</h2>
      <h3>Ganhe NC$</h3>
    </div>
  </div>
  <ContainerBox v-if="openClose.state">
    <keep-alive>
      <transition>
        Widget Fiote
      </transition>
    </keep-alive>
  </ContainerBox>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import ContainerBox from '@/components/ContainerBox.vue'

export default defineComponent({
  name: 'App',
  components: {
    ContainerBox
  },
  setup () {
    const openClose = reactive({ state: false })
    function openWidget () {
      console.log(openClose.state)
      openClose.state = true
      console.log(openClose.state)
    }

    return {
      openClose,
      openWidget
    }
  }
})
</script>

<style lang="scss">

@font-face {
  font-family: "TTFirsNeue3";
  src: url("./assets/fonts/FontsFree-Net-TTFirsNeue3.ttf");
}

* {
  font-family: "TTFirsNeue3", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #fff;
}

.open-close-widget {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  position: absolute;
  width: 294.13px;
  height: 123px;
  left: 55px;
  bottom: 55px;
  background: #FFBD21;
  border-radius: 150px;
  opacity: .9;
  transition: .2s ease-in-out;

  &:hover {
    opacity: 1;
  }
}

.background-image {
  border-radius: 111px;
  width: 111px;
  height: 111px;
  background-color: #000;
  background-image: url('./assets/Logo-Branco.png');
  background-position: center;
  background-repeat: no-repeat;
}

.texts {
  margin-left: 22px;
  color: #000!important;

  h2 {
    line-height: 24px;
    font-weight: bold;
  }

  h3 {
    font-size: 17px;
    font-weight: 500;
    margin-top: 15px;
  }

  h3, h2 {
    color: #000!important;
  }
}
</style>
