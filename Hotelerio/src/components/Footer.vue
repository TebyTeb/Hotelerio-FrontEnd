<template>
  <footer id="footer">
    <div >
      <h5>Contact Information</h5>
      <p>
        +34 928123456 Avenida Reboot 42
        <br>
        Las Palmas de Gran Canaria, Las Palmas, 35003 SPAIN
      </p>
    </div>
    <div >
      <h5>Opening Hours</h5>
      <p>MON-SUN 24H</p>
    </div>
    <div >
      <h5>Private Area</h5>
      <button type="button" class="btn">Management Team</button>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
#footer {
  background-color: rgb(224, 237, 243);
  color: rgb(43, 39, 39);
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: .5rem;
  width: 100%;
  height:fit-content;
  /* min-height: 30px; */
  flex-shrink: 0;
}
@media(min-width: 900px) {
  #footer {
    flex-direction: row;
    justify-content: space-around;
    text-align: justify;
  }
}

p {
  font-weight: normal;
}
</style>