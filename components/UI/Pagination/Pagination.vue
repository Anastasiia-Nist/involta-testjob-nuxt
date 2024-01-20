<template>
  <b-pagination-nav
    v-model="currentPage"
    v-show="totalPages !== 0"
    :link-gen="paginate"
    :number-of-pages="totalPages"
  >
  </b-pagination-nav>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
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
      const query = this.$route.query;
      return {
        params: { page: pageNum },
        query: { ...query },
      };
    },
  },
  mounted() {
    this.currentPage = parseInt(this.$route.params.page, 10);
  },
};
</script>
