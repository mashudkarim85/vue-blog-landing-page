<script setup>
import { reactive, onMounted } from 'vue';
import axios from 'axios';
 
const blogDetail = reactive({
    id: '',
    list_id: '',
    title: '',
    img: '',
    content: ''
})

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'))

const getBlogDetail = async () => {
    const url = `https://basic-blog.teamrabbil.com/api/post-details/${params.get('id')}`; 

    const response = await axios.get(url);
    Object.assign(blogDetail, response.data.postDetails); 

}

onMounted(() => {
    getBlogDetail();
})

</script>

<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-1 g-4" v-show="blogDetail.id">
            <div class="col">
                <div class="card h-100">
                    <img :src="blogDetail.img" class="card-img-top" alt="blog Image">
                    <div class="card-body">
                        <h5 class="card-title my-3">{{ blogDetail.title }}</h5>
                        <p class="card-text">{{ blogDetail.content }}</p>
                    </div>
                </div>
            </div>
          
        </div>
    </div>
    <div class="text-center mt-5">
        <div class="spinner-border" role="status" v-show="!blogDetail.id">
            <span class="visually-hidden" >Loading...</span>
        </div>
    </div>
</template>