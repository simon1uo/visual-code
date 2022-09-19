<template>
  <header class="toolbar">
    <el-button>预览</el-button>
    <el-button type="primary">保存</el-button>
    <el-button>撤销</el-button>
    <el-button>重做</el-button>

    <el-button type="info">清空画布</el-button>
    <el-button>组合</el-button>
    <el-button>拆分</el-button>

    <el-button type="warning">锁定</el-button>
    <el-button type="success">解锁</el-button>

    <div class="canvas-config">
      <span>画布大小</span>
      <el-input size="small" />
      *
      <el-input size="small" />
    </div>
    <div class="canvas-config">
      <span>画布比例</span>
      <el-input size="small" />%
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.toolbar {
  padding: 15px 10px;
  white-space: nowrap;
  overflow-x: auto;
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  .canvas-config {
    display: inline;
    margin: 10px;

    .el-input {
      width: 50px;
      margin: 0 5px;
    }
  }
}
</style>
