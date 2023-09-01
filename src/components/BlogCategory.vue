<script setup>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
let blogList = ref([]);

const getBlogList = async (id) => {
  const url = `https://basic-blog.teamrabbil.com/api/post-list/${id}`; 

  const data = await axios.get(url);
  blogList.value = data.data;
}

onMounted(() => {
    getBlogList(route.params.id);
})
watch(route, () => getBlogList(route.params.id));

</script>

<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col"  v-for="blog in blogList" :key="blog.id">
                <div class="card h-100">
                    <img :src="blog.img" class="card-img-top" alt="blog Image">
                    <div class="card-body">
                        <h5 class="card-title">{{ blog.title }}</h5>
                        <p class="card-text">{{ blog.short }}</p>
                    </div>
                    <div class="text-center mb-3">
                        <RouterLink :to="'/blog-detail?id=' + blog.id ">
                            <button class="btn btn-primary">View More...</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
          
        </div>
    </div>
    <div class="text-center mt-5">
        <div class="spinner-border" role="status" v-show="blogList.length === 0">
            <span class="visually-hidden" >Loading...</span>
        </div>
    </div>
</template>