<template>
    <div class="container">
      <div class="card" style="width: 50rem;">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/images/Standard/1.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/images/Standard/2.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/images/Standard/3.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div> 
          <h1> Standard</h1>
            <h5>21m²</h5>
            <h5>Big bed</h5>
            <h5>Wifi-Tv</h5>
            <h5>BathRoom</h5>
            <h5>Desk</h5>
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