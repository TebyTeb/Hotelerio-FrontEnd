<template>
  <div class="container">
    <div class="container-fluid row">
      <div class="col-sm-4 col-xs well">
        <a href="#info1" @click="show" class="inf">Standard</a>
      </div>
      <div class="col-sm-4 col-xs well">
        <a href="#info2" @click="show" class="inf">Doble</a>
      </div>
      <div class="col-sm-4 col-xs well">
        <a href="#info3" @click="show" class="inf">Suite</a>
      </div>
    </div>

    <div >
      <StandarRoomCard id="info1"/>
    </div>

    <div>
      <DoubleRoomCard id="info2" />
    </div>

    <div>
      <SuiteRoomCard id="info3"/>
    </div>
  </div>
</template>

<script>
import StandarRoomCard from "../components/StandardRoomCard.vue";
import DoubleRoomCard from "../components/DoubleRoomCard.vue";
import SuiteRoomCard from "../components/SuiteRoomCard.vue";

export default {
  components: {
    StandarRoomCard,
    DoubleRoomCard,
    SuiteRoomCard,
  },
  data(){
    return{
        ShowStandard:false,
        ShowDouble:false,
        ShowSuite:false
    }  
  },
  methods:{
    show: function(){
        if(!hide){
            ShowSRoom:true
        }
    }
        
}
};
</script>

<style scoped>

</style>