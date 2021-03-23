const app = new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    methods: {
        add: function () {
            this.counter += 10
        },
        sub: function () {
            this.counter -= 10
        }
    }
})
