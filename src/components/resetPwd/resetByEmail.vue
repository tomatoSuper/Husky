<template>
  <div class="ben-form-container" :model="'resetByEmail'">
    <form novalidate ref="resetByEmail" @submit.stop.prevent="resetByEmailSubmit">
      <div class="ben-form-group">
        <input v-model="resetByEmail.email" v-validate="'required|email'" type="text" name="email" placeholder="请输入邮箱">
        <p>{{errors.first('email')}}</p>
      </div>
      <div class="ben-form-group">
        <input v-model="resetByEmail.captcha" v-validate="'required'" type="text" name="captcha" placeholder="请输入验证码">
        <p>{{errors.first('captcha')}}</p>
      </div>
      <formInput
        v-model="resetByEmail.password"
        type="password"
        name="password"
        rules="required|email"
      ></formInput>
      <div class="ben-btn-group">
        <button type="submit">邮箱找回</button>
      </div>
    </form>
  </div>
</template>

<script>
  import formInput from '../formControls/formInput.vue'
  export default {
    name: 'resetByEmail',
    components: {formInput},
    data () {
      return {
        resetByEmail: {
          email: '',
          password: '',
          captcha: ''
        }
      }
    },
    methods: {
      resetByEmailSubmit () {
        this.$validator.validateAll().then((result) => {
          console.log(result)
          console.log(this.resetByEmail.password)
        })
      }
    }
  }
</script>

<style scoped>

</style>
