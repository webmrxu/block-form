<template>
  <div>
    <!-- <div @click="test">test</div> -->
    <div>
      <el-form ref="form" :model="formData" class="clearfix">
        <component
          v-for="item in itemSetting"
          :is="'b-'+item.type"
          :key="item.id"
          :item="item"
          :value.sync="formData[item.field]"
          :style="dealItemStyle(item)"
          class="form-item-component"
        ></component>
      </el-form>
    </div>
  </div>
</template>
<script>
import BInput from "@/components/form-items/b-input";
import BSelect from "@/components/form-items/b-select";
import BEmail from "@/components/form-items/b-email";

export default {
  name: "block-from",
  components: {
    BInput,
    BSelect,
    BEmail
  },
  props: ["itemSetting", "formData", "formSetting"],
  data() {
    return {
    };
  },
  created() {
    // this.dealFormRules();
  },
  watch: {
    itemSetting(newV, oldV) {
      // newV.forEach(v => {
      //   if (v["_isNewAdd"]) {
      //     this.dealRule(v);
      //   }
      // });
    }
  },
  methods: {
    dealItemStyle(item) {
      return {
        // width: item.itemWidth ? item.itemWidth : this.formSetting.itemWidth
      };
    },
    test() {
      console.log(this.formData);
    }
  }
};
</script>
<style scoped>
.form-item-component {
  float: left;
  height: 62px;
}
</style>
