<template>
  <GptAd
    :ad-unit="adUnit"
    :size="size"
    :page="page"
    :categories="categories"
    :article="article"
  ></GptAd>
</template>

<script>
export default {
    name: 'AD',
    props: ['adUnit', 'size', 'page', 'categories', 'article']
};
</script>
