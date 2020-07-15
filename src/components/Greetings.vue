<template>
  <div class="Greetings" v-if="isActive">
    <img class="Greetings__logo" src="@/assets/images/fiat_logo.png" />
    <h4>GRAZIE!</h4>
    <h4>Sei l’unico ad aver finito la configurazione.</h4>
    <p>
      Per scrupolo te lo chiediamo, sei davvero sicuro di quello che hai fatto?
      <strong>Te la senti?</strong>
    </p>
    <forward-button
      @click="onConfirmationClick"
      class="Greetings__confirmation"
      text="Si, sono sicuro"
    />
    <forward-button
      @click="onBackClick"
      class="Greetings__back"
      text="No, non me la sento"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ForwardButton from "../components/ForwardButton.vue";

export default Vue.extend({
  name: "Greetings",
  components: {
    ForwardButton: ForwardButton
  },
  props: {
    isActive: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onConfirmationClick: function() {
      console.log("I AM SURE");
    },
    onBackClick: function() {
      this.$emit("back-click");
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

  &__logo {
    margin: 92px auto 370px auto;
    width: 200px;
    height: auto;
  }

  &__confirmation {
    margin-bottom: 10px;
  }

  &__back {
    margin-top: 0px;
  }

  h4 {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    text-align: center;

    &:nth-of-type(1) {
      letter-spacing: 3px;
    }
  }

  p {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-align: center;
    font-size: 14px;
    padding: 0px 36px;
    margin-top: 20px;
    margin-bottom: 43px;
  }
}
</style>