<template>
  <div class="container">
    <div class="box">
        <div class="d-grid gap-2 d-md-block">
          <ul class="nav">
             <li class="nav-item">
                <a @click.prevent="show('standard')" class="nav-link active" >Standard</a>
             </li>
            <li class="nav-item">
                <a @click.prevent="show('double')" class="nav-link" >Double</a>
             </li>
            <li class="nav-item">
                <a @click.prevent="show('suite')"  class="nav-link">Suite</a>
            </li>
           </ul>
    </div>
      <div>
        <StandarRoomCard :class="{ jump: ShowStandardRoom }" />
      </div>

      <div>
        <DoubleRoomCard :class="{ jump: ShowDoubleRoom }" />
      </div>

      <div>
        <SuiteRoomCard :class="{ jump: ShowSuiteRoom }" />
      </div>
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
  data() {
    return {
      ShowStandardRoom: true,
      ShowDoubleRoom: true,
      ShowSuiteRoom: true,
    };
  },
  methods: {
    show: function (flag) {
      switch (flag) {
        case "standard":
          this.ShowStandardRoom = false;
          this.ShowDoubleRoom = true;
          this.ShowSuiteRoom = true;
          break;
        case "double":
          this.ShowStandardRoom = true;
          this.ShowDoubleRoom = false;
          this.ShowSuiteRoom = true;
          break;
        case "suite":
          this.ShowStandardRoom = true;
          this.ShowDoubleRoom = true;
          this.ShowSuiteRoom = false;
          break;
      }
    },
  },
};
</script>

<style scoped>
a:hover{
  cursor:pointer;
}
.jump {
  display: none;
}
#menu {
  justify-content: space-evenly;
}
.box{
padding-left:200px;
padding-top: 50px;
}
</style>