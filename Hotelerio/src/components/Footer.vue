<template>
    <div id="footer">
        <div>
            <h5>Contact Information</h5>
            <p>
                +34 928123456

                Avenida Reboot 42
                Las Palmas de Gran Canaria, Las Palmas, 35003
                SPAIN

            </p>
        </div>
        <div>
            <h5>Opening Hours</h5>
            <p>MO-SU 24H</p>
        </div>
        <div>
            <h5>Private Area</h5>
            <button type="button" class="btn">Management Team</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#footer {
    background-color: grey;
    color:rgb(43, 39, 39);
    display: flex;
    text-align: justify;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 12vh;
}

p {
    font-weight: lighter;
}
</style>