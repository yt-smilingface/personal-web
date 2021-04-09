<template>
  <div class="nbd-menu">
    <div class="bbd-table-form" style="margin-bottom: 20px;">
      <el-button type="success" @click="dialogVisible = true">新增</el-button>
      <el-button type="danger">删除</el-button>
      <el-input v-model="formSearch.name" placeholder="请输入名称" style="width:250px;margin-right: 20px;margin-left:20px;"></el-input>
      <el-select v-model="formSearch.type" placeholder="请选择类别" style="margin-right: 20px;">
        <el-option
          v-for="item in typeFormOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary">搜索</el-button>
      <el-button>重置</el-button>
    </div>
    <el-table :data="tableData" border stripe 
      row-key="id"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="name" label="类别"></el-table-column>
      <el-table-column label="图标">
        <template slot-scope="scope">
          <i :class="scope.row.icon"></i>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="路由地址"></el-table-column>
      <el-table-column prop="name" label="操作">
        <template slot-scope="scope">
          <el-link type="primary" @click="handleLook(scope.row)">查看</el-link>
          <el-link type="success" @click="handleEdit(scope.row)">编辑</el-link>
          <el-popconfirm title="这是一段内容确定删除吗？" @confirm="handleDelete(scope.row)">
            <el-link slot="reference" type="danger">删除</el-link>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹框 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="600px">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="排序">
          <el-input v-model="form.sort" type="number"></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="类别">
          <el-radio-group v-model="form.type" @change="typeRadioChange">
            <el-radio label="0">一级菜单</el-radio>
            <el-radio label="1">二级菜单</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="form.type == '0'" label="图标">
          <el-input v-model="form.icon"></el-input>
        </el-form-item>
        <el-form-item v-if="form.type == '1'" label="路由地址">
          <el-input v-model="form.path"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: '角色权限',
  data() {
    return {

      // 表格数据
      tableData: [
        {
          sort: 0,
          name: '一级标题',
          id: '0',
          icon: 'el-icon-setting',
          type: '0',
          children: [
            {
              sort: 1,
              id: '0-1',
              name: '二级标题',
              type: '1',
              path: '/menu',
            }
          ]
        },
        {name: '标题',id: '1',},
        {name: '标题',id: '2',},
        {name: '标题',id: '3',}
      ],

      // 搜索
      formSearch: {
        name: '',
        type: '',
      },

      // 搜索类型下拉列表
      typeFormOptions: [
        {label: '全部', value: '0'},
        {label: '一级菜单', value: '1'},
        {label: '二级菜单', value: '2'},
      ],

      // 弹框
      dialogVisible: false,
      form: {
        sort: 0,
        name: '',
        icon: '',
        path: '',
        type: '',
      }
      
    }
  },

  methods: {
    // 查看
    handleLook(row) {
      console.dir(row)
      this.form = row
      this.dialogVisible = true
    },

    // 编辑
    handleEdit(row) {
      this.form = row
      this.dialogVisible = true
    },

    // 删除
    handleDelete(row) {
      console.dir(row)
    },

    // 弹框选择菜单类别
    typeRadioChange(value) {
      console.dir(value)
    }

  }
}
</script>

<style scoped lang="scss">
  .el-link{
    margin-right: 20px;
  }
</style>