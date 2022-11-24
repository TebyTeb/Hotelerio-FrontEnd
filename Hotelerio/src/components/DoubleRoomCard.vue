<template>
    <div class="container">

        <div class="card" style="width: 50rem;">
        <br>
        <br>
        <h1>Double</h1>
        <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/images/Doble/1.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/images/Doble/2.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div> 
            <h3>21m²</h3>
            <h3>Big bed</h3>
            <h3>Wifi-Tv</h3>
            <h3>BathRoom</h3>
            <h3>Desk</h3>
        </div>
    </div>
    </div>

</template>
  
<script>
export default {
    props: {
        profile: Object
    },
}
</script>
  
<style scoped>

</style>