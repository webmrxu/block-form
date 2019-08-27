<template>
  <div class="clearfix home">
    <!-- 字段列表 -->
    <div class="formitem-box">
      <div>
        <div @click="addInputItem('input')">
          <span>文本框</span>
        </div>
      </div>
      <div>
        <div @click="addInputItem('select')">
          <span>下拉选择框</span>
        </div>
      </div>
      <div>
        <div @click="addInputItem('email')">
          <span>邮箱</span>
        </div>
      </div>
    </div>
    <!-- 表单展示区 -->
    <div class="form-box" :style="formBoxStyle">
      <div class="form-container">
        <block-from :itemSetting="itemSetting" :formData="formData" ref="b-form"/>
        <div v-if="!showEdit" class="edit-box">
          <div
            v-for="item in itemSetting"
            :key="item.field"
            @click="showEditItem(item)"
            :style="{width: item.itemWidth}"
          >
            <!-- <span>{{item.title}}</span> -->
          </div>
        </div>
      </div>
    </div>
    <!-- 操作按钮 -->
    <div class="act-box">
      <div class="act-item" @click="showSetting = true;">
        <span>显示表单配置</span>
      </div>
      <div class="act-item" @click="showEdit = !showEdit;">
        <span>{{showEdit?'切换编辑模式':'切换输入模式'}}</span>
      </div>
      <div class="act-item" @click="getInput">
        <span>测试输出</span>
      </div>
      <div class="act-item" @click="doValidate">
        <span>触发表单验证</span>
      </div>
      <div class="act-item" @click="clearValidate">
        <span>重置表单验证</span>
      </div>
    </div>
    <!-- 字段自定义区 -->
    <div>
      <div v-if="showItemEditState" class="b-mask" @click="showItemEditState=false"></div>
      <transition name="fade">
        <div v-show="showItemEditState" class="form-custom b-form">
          <div class="clearfix b-form-title">
            <div class="float-l">输入组件修改</div>
            <div class="float-r bf-form-close" @click="showItemEditState=false">X</div>
          </div>
          <div class="bf-form-body">
            <block-from :itemSetting="editSetting" :formData="showEditForm"/>
          </div>
        </div>
      </transition>
    </div>
    <!-- 展示积木表单配置 -->
    <div>
      <div v-if="showSetting" class="b-mask" @click="showSetting=false"></div>
      <transition name="fade">
        <div v-if="showSetting" class="form-custom b-form">
          <div>
            <div class="clearfix b-form-title">
              <div class="float-l">展示积木表单配置</div>
              <div class="float-r bf-form-close" @click="showSetting=false">X</div>
            </div>
            <div class="bf-form-body">
              <h2>itemSetting 配置</h2>
              <pre class="language-json"><code class="language-json">{{itemSettingStr}}</code></pre>
              <!-- <h2>FormSetting 配置</h2>
              <pre class="language-json"><code class="language-json">{{FormSetting}}</code></pre>-->
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import Utils from "@/Utils/common";
// 积木表单组件
import BlockFrom from "@/components/block-form";
// 基础表单配置
import BaseItems from "@/settings/base-items";
// 核心字段配置
import ItemsSetting from "@/settings/items";

// 编辑字段表单配置
import EditSetting from "./edit-item";
export default {
  name: "home",
  components: {
    BlockFrom
  },
  data() {
    return {
      itemSetting: [],
      formData: {},
      formBoxStyle: {
        marginLeft: "100px"
      },
      showItemEditState: false, // 展示组件配置
      showSetting: false,
      editSetting: {},
      showEditForm: {},
      showEdit: true
    }
  },
  mounted() {
    this.itemSetting = ItemsSetting
    this.editSetting = EditSetting
  },
  created() {
    let _this = this
    this.dealWindowResize()
    window.onresize = Utils.debounce(_this.dealWindowResize, 500)
  },
  computed: {
    itemSettingStr() {
      let newObj = JSON.parse(JSON.stringify(Utils.deepCopy(this.itemSetting)))
      for (let key in newObj) {
        let item = newObj[key]
        delete item._rules
        delete item.rules
      }
      return JSON.stringify(newObj, null, 2)
    }
  },
  methods: {
    // 重置表单验证
    clearValidate() {
      this.$refs['b-form'].clearValidate()
    },
    // 触发表单验证
    doValidate() {
      this.$refs['b-form'].validate(result => {
        console.log(result)
      })
    },
    // 获取输入值
    getInput() {
      console.log(this.formData)
    },
    // 显示该该字段配置
    showEditItem(item) {
      this.showItemEditState = true
      this.showEditForm = item
    },
    // 处理浏览器缩放
    dealWindowResize() {
      let windowWidth = window.document.documentElement.getBoundingClientRect()
        .width
      let margin = windowWidth - 793
      this.formBoxStyle.marginLeft = margin / 2 - 375 + "px"
    },
    // 新增一个字段
    addInputItem(type) {
      BaseItems.forEach(v => {
        if (v.type === type) {
          v.field = "_" + v.type + "_" + Utils.uuid(7)
          v["_isNewAdd"] = true
          this.itemSetting.push(JSON.parse(JSON.stringify(v)))
        }
      })
      // console.log(this.itemSetting)
    }
  }
}
</script>
<style scoped>
.edit-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.edit-box > div {
  height: 62px;
  cursor: pointer;
  float: left;
}
.form-container {
  position: relative;
}
.bf-form-body {
  padding: 8px;
}
.show-setting {
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 15px;
  cursor: pointer;
}
.bf-form-close {
  cursor: pointer;
}
.float-r {
  float: right;
}
.b-form-title {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}
.home > div {
  float: left;
  height: 500px;
}
.formitem-box {
  width: 370px;
}
.form-box {
  width: 793px;
  background: #fff;
  overflow: hidden;
  border: 1px solid #e3e3e3;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
  width: 794px;
  min-height: 995px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  margin-bottom: 25px;
  padding-top: 20px;
  padding-right: 16px;
  position: relative;
}
.formitem-box {
  margin-top: 8px;
  background: #fff;
}
.formitem-box > div {
  width: 50%;
  float: left;
}
.formitem-box > div > div {
  margin: 8px;
  border: 1px solid #eee;
  padding: 10px 8px;
  cursor: pointer;
}
.form-custom {
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
.float-l {
  float: left;
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}
.act-box {
  margin-top: 8px;
  margin-left: 8px;
}
.act-box > div {
  height: 32px;
  line-height: 32px;
  padding: 0 8px;
  color: rgb(121, 187, 255);
  cursor: pointer;
}
.act-box > div:hover {
  color: rgb(83, 168, 255);
}
</style>
