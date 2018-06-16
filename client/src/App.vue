<template>
  <div id="app">
    <app-nav/>
    <router-view class="container"/>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav";
import { mapActions } from "vuex";
export default {
  mounted() {
    this.login(localStorage.token);
  },
  components: {
    AppNav
  },
  methods: mapActions(["login"])
};
</script>
