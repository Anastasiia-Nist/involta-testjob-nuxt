<template>
  <div>
    <!-- <button @click="showMessageFromBackend">Show message from backend</button> -->
  </div>
</template>

<script>
export default {
  created() {
    this.$router.push({
      path: "/page/1",
    });
  },
  // methods: {
  //   async showMessageFromBackend () {
  //     try {
  //       const response = await this.$axios.$get('/api/test')
  //       console.log(response)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  // }
};
</script>
