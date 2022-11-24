<template>
  <div class="container">
    <div style="width: 50rem">
      <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/images/Doble/1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/images/Doble/2.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <div class="text">
          <h1>Double</h1>
        </div>
        <div class="description">
          <div class="text">
            <h5>21m²</h5>
            <h5>2 rooms</h5>
            <h5>Big bed</h5>
            <h5>Wifi-Tv</h5>
            <h5>BathRoom</h5>
            <h5>Desk</h5>
          </div>
          <div class="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              sodales facilisis gravida. Cras porttitor blandit nisl eu venenatis.
              Pellentesque eget sapien at libero lobortis feugiat. Sed rutrum
              lacus eu ipsum sodales, vehicula tincidunt mi tristique. Nullam in
              libero sit amet magna ultrices rutrum. Cras porttitor blandit nisl eu venenatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: Object,
  },
};
</script>

<style scoped>
.description {
  columns: 2;
}

.carousel-inner {
  max-height: 420px;
}

.text {
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 2em;
  text-justify: inter-word;
  text-align: justify;
}
</style>