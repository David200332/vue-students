<template>
  <div class="dialog" v-if="visible" @click.stop="hideModal">
    <div class="content" @click.stop>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal(): void {
      this.$emit("closeModal", false);
    },
  },
});
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
