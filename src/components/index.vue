<template>
  <div class="container">
    <div class="header">hello World!!!</div>
    <div class="main clearfix">
      <div class="fl-l">ko12p3k</div>
    </div>
    <div class="row clearfix">
      <div class="col-2">123</div>
      <div class="col-2">123</div>
      <div class="col-2">123</div>
      <div class="col-2">123</div>
      <div class="col-2">123</div>
      <div class="col-2">123</div>
    </div>
    <div class="ben-tab-container">
      <ul class="ben-tab-title clearfix">
        <li @click="isPhone=true">手机找回</li>
        <li @click="isPhone=false">邮箱找回</li>
      </ul>
      <benForm v-show="isPhone" key="resetByPhone" v-model="resetByPhone" ref="resetByPhone" submitText="手机找回" @submit="resetByPhoneSubmit">
        <formInput
          v-model="resetByPhone.loginName"
          type="text"
          name="loginName"
          rules="required|mobile"
          placeholder="请输入手机号码"
        ></formInput>
        <formInput
          v-model="resetByPhone.smsCode"
          type="text"
          name="smsCode"
          rules="required|numeric"
          placeholder="请输入短信验证码"
        ></formInput>
      </benForm>
      <benForm v-show="!isPhone" key="myForm" v-model="myForm" ref="myForm" submitText="邮箱找回" @submit="myFormSubmit">
        <formInput
          v-model="myForm.loginName"
          type="text"
          name="loginName"
          rules="required|email"
          placeholder="请输入账号"
        ></formInput>
        <formInput
          v-model="myForm.password"
          type="text"
          name="password"
          rules="required|alpha"
          placeholder="请输入密码"
        ></formInput>
        <formInput
          v-model="myForm.smsCode"
          type="text"
          name="smsCode"
          rules="required|mobile"
          placeholder="请输入短信验证码"
        ></formInput>
        <formInput
          v-model="myForm.captcha"
          type="text"
          name="captcha"
          rules="required|numeric"
          placeholder="请输入验证码"
        ></formInput>
        <formInput
          v-model="myForm.something"
          type="text"
          name="something"
          placeholder="请输入数字"
        ></formInput>
      </benForm>
    </div>
  </div>
</template>

<script>
    import resetByPhone from './resetPwd/resetByPhone.vue'
    import resetByEmail from './resetPwd/resetByEmail.vue'
    import benForm from './formControls/benForm.vue'
    import formInput from './formControls/formInput.vue'
    export default {
      name: 'index',
      components: {resetByPhone, resetByEmail, benForm, formInput},
      data () {
        return {
          resetByPhone: {
            loginName: '',
            smsCode: ''
          },
          myForm: {
            loginName: '',
            password: '',
            smsCode: '',
            something: '312312',
            captcha: ''
          },
          isPhone: true
        }
      },
      mounted () {},
      methods: {
        resetByPhoneSubmit (data) {
          console.log(data)
          setTimeout(() => {
            this.$refs.resetByPhone.btnSubmit.actived = false
          }, 3000)
        },
        myFormSubmit (data) {
          console.log(this.$refs.myForm.btnSubmit)
          console.log(this.$refs.myForm.btnSubmit.actived)
          setTimeout(() => {
            this.$refs.myForm.btnSubmit.actived = false
          }, 3000)
        }
      }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/husky/variable";
  /*@import "../assets/scss/husky/grids";*/
  .container {
    .header,  .fl-l{
    }
  }
  .ben-tab-container {
    .ben-tab-title {
      li {
        float: left;
        width: 25%;
        height: 48px;
        line-height: 48px;
      }
    }
  }
</style>
