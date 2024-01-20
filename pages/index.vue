<template>
  <div>
    <!-- <button @click="showMessageFromBackend">Show message from backend</button> -->
  </div>
</template>

<script>
export default {
  created() {
    this.$router.push({
      path: "/1",
    });
  },
};
</script>
