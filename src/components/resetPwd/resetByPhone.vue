<template>
  <div class="ben-form-container">
    <form novalidate @submit.stop.prevent="resetByPhoneSubmit" role="form">
      <div class="ben-form-group">
        <input v-model="resetByPhone.loginName" type="text" v-validate="'required|mobile'" name="loginName"  placeholder="请输入手机号码">
        <p>{{errors.first('loginName')}}</p>
      </div>
      <div class="ben-form-group">
        <input v-model="resetByPhone.password1" type="password" v-validate="'required'" name="password1" placeholder="请输入密码">
        <p>{{errors.first('password1')}}</p>
      </div>
      <div class="ben-form-group">
        <input v-model="resetByPhone.password2" type="password" v-validate="'required'" name="password2" placeholder="请确认密码">
        <p>{{errors.first('password2')}}</p>
      </div>
      <div class="ben-btn-group">
        <button type="submit">手机找回</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'resetByPhone',
    data () {
      return {
        resetByPhone: {
          loginName: '',
          password1: '',
          password2: ''
        }
      }
    },
    methods: {
      resetByPhoneSubmit () {
        this.$validator.validateAll().then((result) => {
          console.log(result)
          console.log(this.resetByPhone)
        })
      }
    }
  }
</script>

<style scoped>

</style>
