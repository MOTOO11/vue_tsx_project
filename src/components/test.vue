<template>
  <div>
    <p @click="test">{{ da }}</p>
  </div>
</template>
<script lang="ts">
// Vueバージョン
import Vue from "vue";
export default Vue.extend({
  data: () => {
    return {
      da: ""
    };
  },
  methods: {
    test() {
      return "";
    }
  }
});
</script>
