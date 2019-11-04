export default {
  change(value) {
    this.$emit("update:value", value)
  },
  labelClick() {
    this.$emit("labelClick", this.item)
  }
}
