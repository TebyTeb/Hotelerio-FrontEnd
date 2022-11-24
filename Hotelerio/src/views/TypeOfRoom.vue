<template>
  <div class="container">
    <div class="container-fluid row">
      <div class="col-sm-4 col-xs well">
        <a href="#info1" @click.prevent="show('standard')" class="inf">Standard</a>
      </div>
      <div class="col-sm-4 col-xs well">
        <a href="#info2" @click.prevent="show('double')" class="inf">Doble</a>
      </div>
      <div class="col-sm-4 col-xs well">
        <a href="#info3" @click.prevent="show('suite')" class="inf">Suite</a>
      </div>
    </div>

    <div >
      <StandarRoomCard id="info1"  :class="{jump: ShowStandardRoom}"/>
    </div>

    <div>
      <DoubleRoomCard id="info2" :class="{jump: ShowDoubleRoom}"/>
    </div>

    <div>
      <SuiteRoomCard id="info3" :class="{jump: ShowSuiteRoom}"/>
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
    SuiteRoomCard
  },
  data(){
    return{
        ShowStandardRoom: true,
        ShowDoubleRoom:true,
        ShowSuiteRoom:true,
    }  
  },
  methods:{
    show: function(flag){
            switch (flag){
                case 'standard':
                    this.ShowStandardRoom = false
                    this.ShowDoubleRoom = true
                    this.ShowSuiteRoom = true
                    break
                case 'double':
                    this.ShowStandardRoom = true
                    this.ShowDoubleRoom = false
                    this.ShowSuiteRoom = true
                    break
                case 'suite':
                    this.ShowStandardRoom = true
                    this.ShowDoubleRoom = true
                    this.ShowSuiteRoom = false
                    break
            }

    }
        
}
};
</script>

<style scoped>
.jump{
    display: none;
}
</style>