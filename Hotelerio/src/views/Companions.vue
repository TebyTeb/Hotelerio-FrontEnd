<template>
    <div>

    </div>
</template>

<script>
import API from '../services/api'
import { RouterLink } from 'vue-router'
import { useReservationStore } from '../stores/store'
    export default {
        data(){
            return{
                store: useReservationStore()
            }
        }
    }
</script>

<style scoped>

</style>