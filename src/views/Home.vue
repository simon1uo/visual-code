<template>
  <div class="home">
    <ToolBar />
    <main>
      <section class="left">
        <SideComponentList />
        <SideRealtimeComponent />
      </section>

      <section class="center">
        <div class="content">
          <Editor />
        </div>
      </section>

      <section class="right">
        <el-tabs>
          <el-tab-pane label="属性"></el-tab-pane>
          <el-tab-pane label="动画"></el-tab-pane>
          <el-tab-pane label="事件"></el-tab-pane>
        </el-tabs>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import ToolBar from '@/components/ToolBar.vue'
import SideComponentList from '@/components/SideComponentList.vue'
import SideRealtimeComponent from '@/components/SideRealtimeComponent.vue'
import Editor from '@/components/Editor/Editor.vue'
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  background: #f7f7f7;

  main {
    height: calc(100% - 64px);
    position: relative;

    .left {
      position: absolute;
      height: 100%;
      width: 200px;
      left: 0;
      top: 0;
      background-color: #fff;

      & > Div {
        overflow: auto;

        &:first-child {
          border-bottom: 1px solid #ddd;
        }
      }
    }

    .center {
      margin-left: 200px;
      margin-right: 288px;
      overflow: auto;
      padding: 20px;

      .content {
        width: 100%;
        height: 100%;
        overflow: auto;
      }
    }

    .right {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 288px;
      background-color: #fff;
      padding: 0 10px;

      .el-select {
        width: 100%;
      }
    }
  }
}
</style>
