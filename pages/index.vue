<template>
  <div class="wrapper-content">
    <section>
      <div class="container">
        <NewsHeader></NewsHeader>
        <NewsMain :allNews="post"></NewsMain>
      </div>
    </section>
  </div>
</template>

<script>
import { URL_MOS, URL_LENTA } from "../utils/constants";
import { getFeed } from "../lib/rss";

export default {
  name: "HomePage",
  async asyncData() {
    const rssMos = await getFeed(URL_MOS);
    const rssLenta = await getFeed(URL_LENTA);
    const post = [...rssMos.items, ...rssLenta.items];
    return { post };
  },
};
</script>
