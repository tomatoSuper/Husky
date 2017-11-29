<template>
    <div class="ben-form">
      <div class="ben-form-title"></div>
      <div class="ben-form-container">
        <form novalidate @submit.stop.prevent="formSubmit" role="form">
          <slot></slot>
          <div class="ben-btn-group">
            <button class="ben-btn-submit" :class="[(btnSubmit.actived? 'actived' : '')]"  type="submit">{{btnSubmit.text}}</button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'benForm',
    data () {
      return {
        benForm: this.value,
        btnSubmit: {
          actived: false,
          placeholder: this.submitText,
          text: this.submitText
        },
        sonLength: ''
      }
    },
    props: {
      value: {
        type: Object,
        default: {}
      },
      submitText: {
        type: String,
        default: '提交表单'
      }
    },
    mounted () {
      console.log(this.benForm)
      this.sonLength = this.$children.length
    },
    methods: {
      formSubmit () {
        if (!this.btnSubmit.actived) {
          this.btnSubmit.actived = true
          let myVue = this
          let valid = []
          let len = this.sonLength
          this.$children.forEach((ele, idx) => {
            ele.$validator.validate().then(result => {
              valid.push(result)
              if (valid.length === len) {
                if (valid.indexOf(false) === -1) {
                  myVue.$emit('submit', myVue.benForm)
                } else {
                  this.btnSubmit.actived = false
                }
              }
            })
          })
        } else {
          console.log('请勿重复点击')
        }
      }
    }
  }
</script>

<style scoped>

</style>
