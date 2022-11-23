<template>
    <div>
{{roomInfo}}
    </div>
</template>

<script>
import API from '../services/api'
import { RouterLink } from 'vue-router'
import { useReservationStore } from '../stores/store'
    export default {
        data(){
            return{
                roomInfo: {},
                store: useReservationStore()
            }
        },
        created(){
            this.roomInfo=this.store.getRoomInfo
        }
    }
</script>

<style scoped>

</style>