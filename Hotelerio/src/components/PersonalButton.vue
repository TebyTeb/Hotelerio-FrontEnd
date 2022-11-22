<template>
    <div>
        <RouterLink class="btn btn-secondary btn-circle btn-xl" :to="{name: `${link}`}">{{text}}</RouterLink>

    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    props: {
        link: String,
        text: String
    }
}
</script>

<style scoped>	
.btn-circle.btn-xl {
    width: 100px;
    height: 100px;
    padding: 13px 18px;
    border-radius: 60px;
    font-size: 15px;
    text-align: center;
}

</style>