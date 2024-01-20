<template>
  <section>
    <div class="text-center" v-show="$store.state.isLoading">
      <b-spinner variant="primary" label="Text Centered"></b-spinner>
    </div>
    <p
      class="news__nothing-found"
      v-if="newsList.length === 0 && !$store.state.isLoading"
    >
      Ничего не найдено
    </p>
    <ul
      class="news__list"
      :class="grid"
      id="newsList"
      v-show="!$store.state.isLoading"
    >
      <li v-for="(news, index) in newsList" :key="index">
        <NewsCard :news="news" :grid="grid"></NewsCard>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: {
    newsList: {
      type: Array,
      requires: true,
    },
    grid: {
      type: String,
      requires: true,
    },
  },
};
</script>
