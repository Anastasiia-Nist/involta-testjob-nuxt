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
  validate({ params }) {
    return /^\d+$/.test(params.page);
  },
  head() {
    return {
      title: 'Новости RSS',
      meta: [
        {
          hid: "description",
          name: "description",
          content: '',
        },
      ],
    };
  },
};
</script>

