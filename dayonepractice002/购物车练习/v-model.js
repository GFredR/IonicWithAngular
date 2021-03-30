//旧 创建组件构造器对象
const asd = Vue.extend({
  template: `
  <h2>ooooooooooooo</h2>
  
  `
})
const vvcom = Vue.extend({
  template: `
  <h2>hahhahahh</h2>
  `,
  components: {
    'asd': asd
  }
})
const cpn = {
  template: `#cpn`,
  props: ['cmovies'],
  data() {
    return {
    }
  },

  methods: {

  }
}
//注册组件
// Vue.component('v-component', vvcom)

Vue.component('happy',{
  template: `
  <h2>happy</h2>
  `
})

//当前写法
Vue.component('haha-com',{
  template: `
  <h2>emmmmmmmmmmmmmmm</h2>
  `
})

const vMd = new Vue({
  el: '#vMd',
  data: {
    bindmsg: '',
    gender: '',
    hobbies: [],
    accept: false,
    message: 'hahah',
    movies: ['东方快车谋杀案', '绿皮书', '终结者']

  },
  components: {
    cpn
  }
})
const name = 'Gfred'

const obj = {
  name
}
