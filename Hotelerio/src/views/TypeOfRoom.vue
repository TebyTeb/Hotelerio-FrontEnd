<template>
  <div class="container">
    <div class="box">
        <div class="d-grid gap-2 d-md-block" id="menu">
          <ul class="nav">
             <li class="nav-item">
                <a :style="ShowStandardRoom ? 'color: gray' : ''" @click.prevent="show('standard')" class="nav-link active" >Standard</a>
             </li>
            <li class="nav-item">
                <a :style="ShowDoubleRoom ? 'color: gray' : ''"  @click.prevent="show('double')" class="nav-link" >Double</a>
             </li>
            <li class="nav-item">
                <a :style="ShowSuiteRoom ? 'color: gray' : ''" @click.prevent="show('suite')"  class="nav-link">Suite</a>
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
      };
      

    },
  },
};
</script>

<style scoped>
a:hover{
  cursor:pointer;
}

a{
    color:blue;
}

.jump {
  display: none;
}
#menu {
  margin-left: 12px;
  background-color: white;
  width: 73%;
}
.box{
padding-left:200px;
padding-top: 50px;
}
</style>