<template>
  <div class="b-item-table">
    <div class="b-item-table-header">
      <div>{{item.title}}</div>
      <div><el-button size="mini" type="primary" @click="add">添加</el-button></div>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column :prop="itemT.field" :label="itemT.title" v-for="(itemT,index) in item.setting" :key="index"></el-table-column>
        <el-table-column  label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="delete_(index)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- table 编辑 -->
    <div>
      <div v-if="showItemEditState" class="b-mask" @click="showItemEditState=false"></div>
      <transition name="fade">
        <div v-show="showItemEditState" class="b-form-custom b-form">
          <div class="clearfix b-form-title">
            <div class="float-l">输入组件修改</div>
            <div class="float-r bf-form-close" @click="showItemEditState=false">X</div>
          </div>
          <div class="b-form-body">
            <block-form ref="b-form" :setting="item.setting" :formData="editForm" />
          </div>
          <div class="b-form-footer">
            <el-button size="small" type="primary" plain @click="sure">确认</el-button>
            <el-button size="small" type="primary" plain @click="close">取消</el-button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { Table, TableColumn, Button } from "element-ui"
import Utils from "@/Utils/common"
export default {
  name: 'b-table',
  props: ["item", "value"],
  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-button': Button,
    'block-form': (resolve, reject) => {
      require(['../block-form.vue'], resolve)
    }
  },
  data() {
    return {
      tableData: [],
      editForm: {},
      showItemEditState: false,
      editStatu: '' // 编辑状态 1 新增 2 编辑
    }
  },
  methods: {
    sure() {
      this.$refs["b-form"].validate(result => {
        if (this.editStatu === 1) {
          let obj = Object.assign({}, this.editForm)
          obj._isNewAdd = true
          obj._newId = Utils.uuid(7)
          this.tableData.push(obj)
        }
        this.close()
      })
    },
    add() {
      this.show()
      this.editStatu = 1
    },
    edit(item) {
      this.show()
      this.editStatu = 2
      this.editForm = item
    },
    delete_(index) {
      this.tableData.splice(index, 1)
    },
    show() {
      this.showItemEditState = true
    },
    close() {
      this.editForm = {}
      this.$refs["b-form"].clearValidate()
      this.showItemEditState = false
    }
  }
}
</script>
<style scoped>
.b-form-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}
.float-r {
  float: right;
}
.float-l {
  float: left;
}
.b-item-table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.b-form-body {
  padding: 8px;
}
.bf-form-close {
  cursor: pointer;
}
.b-form-custom {
  position: fixed;
  width: 600px;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 120;
  border-left: 1px solid #eee;
  overflow-y: scroll;
}
.b-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 110;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  width: 0px;
}
.b-form-title {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}
</style>
