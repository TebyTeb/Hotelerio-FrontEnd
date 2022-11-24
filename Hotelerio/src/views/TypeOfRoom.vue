<template>
    <div class="container">
      <div class="container-fluid row" >
        <div class="col-sm-4 col-xs well">
         <a href="#info1" class="inf" >Standard</a>
        </div>
        <div class="col-sm-4 col-xs well" >
          <a href="#info2" class="inf">Doble</a>
        </div>
        <div class="col-sm-4 col-xs well" >
          <a href="#info3" class="inf">Suite</a>
        </div>
    </div>

<div>
    <StandarRoomCard />
</div>

<div>
    <DobleRoomCard />
</div>

<div>
    <SuiteRoomCard />
</div>

</div>

</template>
  
<script>
import StandarRoomCard from "../components/StandardRoomCard.vue"
import DobleRoomCard from "../components/DobleRoomCard.vue"
import SuiteRoomCard from "../components/SuiteRoomCard.vue"

export default {
 components:{
    StandarRoomCard,
    DobleRoomCard,
    SuiteRoomCard
 }

}
</script>
  
<style scoped>

</style>