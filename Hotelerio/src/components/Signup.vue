<template>
  <div class="container">
    <div class="row main justify-content-center align-items-center">
      <div class="col-8 col-md-6 col-lg-4">
        <form class="form-signup">
          <h1 class="h3 mb-3 font-weight-normal">Create your account</h1>


          <label for="inputName" class="sr-only">Name:</label>
          <input id="inputName" type="text" class="form-control mb-2" v-model="newUser.name">

          <label for="inputSurname" class="sr-only">Surname:</label>
          <input id="inputSurname" type="text" class="form-control mb-2" v-model="newUser.surname">

          <label for="inputId" class="sr-only">ID:</label>
          <input id="inputId" type="text" class="form-control mb-2" v-model="newUser.identification">

          <label for="inputBirth" class="sr-only">Birthdate:</label>
          <input type="date" class="form-control mb-2" v-bind:class="{ 'is-invalid': !birthValid }" id="inputBirth"
            name="inputBirth" v-model="newUser.birthdate" />

          <label class="sr-only">Phone:</label>
          <input type="phone" class="form-control mb-2" v-model="newUser.phone">

          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="text" id="inputEmail" class="form-control mb-1"
            v-bind:class="{ 'is-invalid': !emailValidOrEmpty, 'is-valid': emailValid }" autofocus=""
            v-model="newUser.email" />

          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control mb-1"
            v-bind:class="{ 'is-invalid': !passwordValidOrEmpty, 'is-valid': passwordValid }"
            v-model="newUser.password" />
          <p class="small" v-bind:class="{
            'text-danger': passwdStrength === 1, 'text-warning': passwdStrength === 2,
            'text-success': passwdStrength === 3
          }" v-if="passwdStrength !== 0">
            {{ passwdMess }}
          </p>

          <label for="inputPassword2" class="sr-only">Confirm Password</label>
          <input type="password" id="inputPassword2" class="form-control mb-1"
            v-bind:class="{ 'is-invalid': !passwordsEqualOrEmpty, 'is-valid': passwordsEqualNotEmpty }"
            v-model="password2" />

          <div class="button">
            <button class="btn btn-lg btn-primary btn-block mt-3" v-on:click.prevent="signUp">
              Create account
            </button>
          </div>
          <div class="toggle-form">
            <a href="#" v-on:click="toggleForm">I already have an account</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import API from '../services/api.js'
import { useAuthStore } from '../stores/store'

export default {
  data() {
    return {
      newUser: {
        name: '',
        surname: '',
        birthdate: '',
        phone: '',
        identification: '',
        email: '',
        password: ''
      },
      password2: "",
      birth: "",
      passwdMess: "",
      store: useAuthStore()
    }
  },
  computed: {
    emailValid: function () {
      const regExp = /^(\w+)@(\w+)\.(\w\w+)$/;
      return regExp.test(String(this.newUser.email).toLowerCase());
    },
    emailValidOrEmpty: function () {
      return this.emailValid || this.newUser.email.length === 0;
    },
    passwordValid: function () {
      return this.newUser.password.length >= 5;
    },
    passwordValidOrEmpty: function () {
      return this.passwordValid || this.newUser.password.length === 0;
    },
    passwordsEqual: function () {
      return this.newUser.password === this.password2;
    },
    passwordsEqualOrEmpty: function () {
      return this.passwordsEqual || this.password2.length === 0;
    },
    passwordsEqualNotEmpty: function () {
      return this.passwordsEqual && this.password2.length !== 0;
    },
    birthValid: function () {
      const birthArr = this.newUser.birthdate.split("-");
      const today = Date.now();
      const birthDay = Date.UTC(birthArr[0], birthArr[1] - 1, birthArr[2]);
      const age = (today - birthDay) / (1000 * 60 * 60 * 24 * 30 * 12);
      return age >= 18;
    },
    passwdStrength: function () {
      let code = 0;

      if (this.newUser.password === "") return code;
      const result = zxcvbn(this.newUser.password);
      if (result.score <= 1) {
        this.passwdMess = "WEAK";
        code = 1;
      }
      if (result.score === 2) {
        this.passwdMess = "MEDIUM";
        code = 2;
      }
      if (result.score >= 3) {
        this.passwdMess = "STRONG";
        code = 3;
      }

      if (result.feedback.warning !== "")
        this.passwdMess += ` - ${result.feedback.warning}`;
      if (result.feedback.suggestions !== "")
        this.passwdMess += ` - ${result.feedback.suggestions}`;

      return code;
    }
  },
  methods: {
    async signUp() {
      if (
        this.emailValid &&
        this.passwordValid &&
        this.birthValid
      ) {
        const response = await API.signup(this.newUser)
        if (response.error) {
          alert('Error creating account')
        } else {
          this.store.login(response.token, response.email)
          this.$router.push({ name: 'personal' })
        }
      }
    },
    toggleForm() {
      this.$emit('toggleForm')
    }
  }
}
</script>

<style scoped>
.container {
  border-radius: 1rem;
  padding: 2rem;
  background-color: rgba(224, 237, 243, 0.8);
}
.form-signup>h1 {
  text-align: center;
}
.button, .toggle-form {
  text-align: center;
}
.toggle-form {
  margin-top: 1rem;
}
.toggle-form>a {
  color: rgb(30, 138, 134);
}
.btn-primary {
  background-color: rgb(30, 138, 134);
  border: 1px solid rgb(30, 138, 134);
}
</style>