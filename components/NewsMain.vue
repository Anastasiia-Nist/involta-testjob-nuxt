<template>
  <main class="news">
    <section class="news__type">
      <div class="news__link-list">
        <b-link
          href="#"
          id="all"
          class="news__link"
          @click="handleLinkType($event)"
          :active="$route.query.type === 'all' || !$route.query.type"
        >
          Все
        </b-link>

        <b-link
          href="#"
          id="lenta"
          class="news__link"
          @click="handleLinkType($event)"
          :active="$route.query.type === 'lenta'"
        >
          Lenta.ru
        </b-link>

        <b-link
          href="#"
          id="mos"
          class="news__link"
          @click="handleLinkType($event)"
          :active="$route.query.type === 'mos'"
        >
          Mos.ru
        </b-link>
      </div>
      <div class="news__grid-list">
        <button
          class="news__grid-btn"
          @click="handleGridNews('line')"
          :class="{ active: grid === 'line' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <rect width="18" height="8" fill="#C4C4C4" />
            <rect y="10" width="18" height="8" fill="#C4C4C4" />
          </svg>
        </button>
        <button
          class="news__grid-btn"
          @click="handleGridNews('grid')"
          :class="{ active: grid === 'grid' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <rect width="8" height="8" fill="#C4C4C4" />
            <rect y="10" width="8" height="8" fill="#C4C4C4" />
            <rect x="10" width="8" height="8" fill="#C4C4C4" />
            <rect x="10" y="10" width="8" height="8" fill="#C4C4C4" />
          </svg>
        </button>
      </div>
    </section>
    <section class="news__main">
      <p class="news__nothing-found" v-if="!newsList">Сервер не доступен</p>
      <NewsList :newsList="newsSlice()" :grid="grid">
        <li v-for="(news, index) in newsSlice()" :key="index">
          <NewsCard :news="news" :grid="grid"></NewsCard>
        </li>
      </NewsList>
      <UIPagination
        class="news-pagination"
        v-show="paginationShow"
        :totalPages="totalPages"
        :perPage="newsPerPage"
      />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      allNews: [],
      grid: "grid",
      currentPage: 1,
      newsPerPage: 4,
    };
  },
  watch: {
    $route(to) {
      to.params.page
        ? (this.currentPage = to.params.page)
        : (this.currentPage = 1);
    },
  },
  computed: {
    paginationShow() {
      return !this.$store.state.isLoading && this.newsSlice().length !== 0
        ? true
        : false;
    },
    totalPages() {
      return this.newsList.length !== 0 ? Math.ceil(this.newsList.length / this.newsPerPage) : 1
    },
    indexOfFirstNews() {
      return this.currentPage * this.newsPerPage - this.newsPerPage;
    },
    indexOfLastNews() {
      return this.currentPage * this.newsPerPage;
    },
    newsList() {
      const query = this.$route.query;
      const allNews = (this.allNews = this.$store.getters.getNewsList);
      if (query.type === "all" || !query.type) {
        return query.search
          ? allNews.filter(
              ({ title, content }) =>
                title.toLowerCase().includes(query.search.toLowerCase()) ||
                content?.toLowerCase().includes(query.search.toLowerCase())
            )
          : allNews;
      }
      if (query.type) {
        return query.search
          ? allNews.filter(
              ({ title, content, link }) =>
                (title.toLowerCase().includes(query.search.toLowerCase()) ||
                  content
                    ?.toLowerCase()
                    .includes(query.search.toLowerCase())) &&
                link.toLowerCase().includes(`${query.type}.ru`)
            )
          : allNews.filter(({ link }) =>
              link.toLowerCase().includes(`${query.type}.ru`)
            );
      }
      return allNews;
    },
  },
  mounted() {
    this.$store.dispatch("setNewsList");
    const param = this.$route.params.page;
    param ? (this.currentPage = param) : (this.currentPage = 1);
    if (localStorage.filterGrid) {
      this.grid = localStorage.filterGrid;
      localStorage.filterGrid === "line"
        ? (this.newsPerPage = 3)
        : (this.newsPerPage = 4);
    }
  },
  methods: {
    newsSlice() {
      return this.newsList.slice(this.indexOfFirstNews, this.indexOfLastNews);
    },
    handleGridNews(value) {
      localStorage.filterGrid = value;
      this.grid = value;
      value === "line" ? (this.newsPerPage = 3) : (this.newsPerPage = 4);
    },
    handleLinkType(e) {
      const query = this.$route.query;
      if (query.type != e.target.id) {
        this.$router.push({
          params: { page: 1 },
          query: { ...query, type: e.target.id },
        });
      }
    },
  },
};
</script>
