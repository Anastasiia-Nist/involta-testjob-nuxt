<template>
  <nav class="news-pagination" v-show="totalPages !== 0">
    <b-pagination
      v-model="currentPage"
      :total-rows="totalPages"
      :per-page="perPage"
      aria-controls="newsList"
      first-number
      last-number
      @change="paginate"
    ></b-pagination>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
    }
  },
  props: {
    totalPages: {
      type: Number,
    },
    perPage: {
      type: Number,
    },
  },
  methods: {
    paginate(pageTo) {
      const query = this.$route.query;
      this.$router.push({
        query: { ...query, page: pageTo },
      });
    },
  },
  mounted() {
    this.currentPage = parseInt(this.$route.query.page, 10);
  },
  watch: {
    $route(to) {
      this.currentPage = parseInt(to.query.page, 10);
    },
  },
};
</script>
