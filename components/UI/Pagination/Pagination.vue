<template>
  <b-pagination-nav
    v-show="totalPages !== 0"
    :link-gen="paginate"
    :number-of-pages="totalPages"
    use-router
  >
  </b-pagination-nav>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      count: 1,
    };
  },
  props: {
    totalPages: {
      type: Number,
      require: true,
    },
    perPage: {
      type: Number,
      require: true,
    },
  },
  methods: {
    paginate(pageNum) {
      return {
        path: `/page/${pageNum}`,
        query: { ...this.$route.query },
      };
    },
  },
  mounted() {
    this.currentPage = parseInt(this.$route.params.page, 10);
  },
  watch: {
    $route(to) {
      this.currentPage = parseInt(to.params.page, 10);
    },
  },
};
</script>
