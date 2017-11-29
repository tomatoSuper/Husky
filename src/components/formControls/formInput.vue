<template>
  <div :slot="name" class="ben-form-group">
    <div class="ben-form-control">
      <template v-if="rules">
        <input v-model="val" :type="type" v-validate="rules" :name="name" autocomplete="off" :placeholder="placeholder">
      </template>
      <template v-else>
        <input v-model="val" :type="type" :name="name"  :placeholder="placeholder">
      </template>
    </div>
    <p>{{errors.first(name)}}</p>
  </div>
</template>

<script>
  export default {
    name: 'formInput',
    data () {
      return {
        val: this.value,
        upKey: this.$parent.$options.name,
        bindName: this.name
      }
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      rules: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: '请输入...'
      },
      type: {
        type: String,
        default: ''
      }
    },
    watch: {
      val (cur) {
        this.$parent[this.upKey][this.bindName] = cur
      }
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style scoped>

</style>
