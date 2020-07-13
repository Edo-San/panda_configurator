<template>
  <div class="Greetings" v-if="!isActive">
    <img class="Greetings__logo" src="@/assets/images/fiat_logo.png" />
    <h3>GRAZIE!</h3>
    <h4>Sei l’unico ad aver finito la configurazione.</h4>
    <p>
      Per scrupolo te lo chiediamo, sei davvero sicuro di quello che hai fatto?
      <strong>Te la senti?</strong>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    isActive: {
      type: Boolean,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.Greetings {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  padding: 36px;

  &__logo {
    margin: 92px auto 370px auto;
    width: 200px;
    height: auto;
  }
}
</style>