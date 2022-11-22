<script setup>
import PersonalButton from '../components/PersonalButton.vue'
</script>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<template>
    <br>
    <br>
    <h1>Personal Page</h1>
    <br>
    <div>
        <PersonalButton text="Make a Reservation" link="checkAvailableRooms" />
    </div>
    <br>
    <div>
        <PersonalButton text="Type of Rooms" link="home" />
    </div>
</template>
