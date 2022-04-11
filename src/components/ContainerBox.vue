<template>
  <div class="container-box">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContainerBox'
  // setup() {},
})
</script>
<style lang="scss" scoped>
.container-box {
  padding: 29px 43px;
  position: fixed;
  top: 0;
  left: 0;
  width: 619px;
  height: 100vh;
  background-color: #000;
}
</style>
