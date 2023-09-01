<script setup>
import Header from './components/Header.vue'
import Blog from './components/Blog.vue'
</script>

<template>
    <Header></Header>
    <div class="py-4">
      <RouterView></RouterView>
    </div>
</template>

<style scoped>

</style>
