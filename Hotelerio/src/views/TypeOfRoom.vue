<template>
  <div class="container">
    <div class="box">
      <div class="d-grid gap-2 d-md-block" id="menu" >
        <ul class="nav">
          <li class="nav-item">
            <a :style="ShowStandardRoom ? 'color: gray' : ''" @click.prevent="show('standard')"
              class="nav-link active">Standard</a>
          </li>
          <li class="nav-item">
            <a :style="ShowDoubleRoom ? 'color: gray' : ''" @click.prevent="show('double')" class="nav-link">Double</a>
          </li>
          <li class="nav-item">
            <a :style="ShowSuiteRoom ? 'color: gray' : ''" @click.prevent="show('suite')" class="nav-link">Suite</a>
          </li>
        </ul>
        <div class="foo">
          <StandarRoomCard :class="{ jump: ShowStandardRoom }" />
          <DoubleRoomCard :class="{ jump: ShowDoubleRoom }"/>
          <SuiteRoomCard :class="{ jump: ShowSuiteRoom }" />
        </div>
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
      ShowStandardRoom: false,
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
a:hover {
  cursor: pointer;
  color: rgb(30, 138, 134);
}

a {
  color: rgb(30, 138, 134);
}

.jump {
  display: none;
}

#menu {
  background-color: rgba(224, 237, 243, 0.8);
  width: fit-content;
  border-radius: 1rem;
}

</style>