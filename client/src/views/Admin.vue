<template>
  <div>
    <h1>Admin View!</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  async mounted() {
    const admin = this.isAdmin();
    if (!admin) {
      this.$router.push("/forum");
    }
  },
  methods: mapActions(["isAdmin"])
};
</script>

