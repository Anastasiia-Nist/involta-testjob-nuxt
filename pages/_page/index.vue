<template>
  <div class="wrapper-content">
    <section>
      <div class="container">
        <NewsHeader></NewsHeader>
        <NewsMain></NewsMain>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $http }) {
    try {
      const response = await $http.$get("http://localhost:3000/api/news");
      store.dispatch("setNewsList", response);
      return { response };
    } catch ({ error, message }) {
      console.log({ statusCode: error, message });
    }
  },
  validate({ params }) {
    return /^\d+$/.test(params.page);
  },
  head() {
    return {
      title: this.response.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: JSON.stringify(this.response),
        },
      ],
    };
  },
};
</script>

