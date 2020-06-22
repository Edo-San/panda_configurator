<template>
  <section class="Step RimsStep">
    <RimOption v-for="rim in getRims" :rim="rim" :key="rim.code" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "RimsStep",
  computed: {
    ...mapGetters("rims", ["getRims"])
  }
});
</script>

<style lang="scss" scoped></style>
