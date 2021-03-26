const app = new Vue({
    el: '#app',
    data: {
        message: 'ohhhhhhhhhhh!!',
        msg: 'aaaaaaaaaaa',
        imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3971822744,688613491&fm=26&gp=0.jpg',
        isActive: true,
        isLine: true,
        backColor: 'green'
    },
    computed: {
        allmessage: function () {
            return this.message + this.msg
        },
        //计算属性完整写法
        // allmessage: {
        //     set() {
        //
        //     },
        //     get() {
        //         return this.message + this.msg
        //     }
        // }
    },
    methods: {
        clickBtn: function () {
            this.active = !this.active
            console.log('ohhhhhhhhhh')
        },
        getClass: function () {
            console.log('9999999999999')
            return {active: this.active, line: this.line}
        },
        getMany: function () {
            console.log('9999999999999')
            return {active: this.active, line: this.line}
        }
    }
})
const age = 11
const sex = 'male'
const xname = 'hahah'

const obj = {
    //属性字面量增强写法
    age,
    sex,
    xname,
    //函数字面量增强写法
    villageList() {

    }
}
