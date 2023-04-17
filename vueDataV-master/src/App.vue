<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .el-drawer {
  position: absolute;
  box-sizing: border-box;
  background-color: #0a1649;
  display: flex;

  flex-direction: column;
  overflow: hidden;
  outline: 0;
  
}
.el-drawer__header>:first-child {
  color: #7ef0ff;
    flex: 1;
}
.el-drawer__body {
    flex: 1;
    overflow: auto;
    color: #7ef0ff;
}
.el-menu.el-menu--horizontal {
    border-bottom: 1px #e6e6e6;
}
}
</style>
