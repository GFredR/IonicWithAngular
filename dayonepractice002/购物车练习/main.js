const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《东方快车谋杀案》',
        price: 60.6,
        count: 1
      },
      {
        id: 2,
        name: '《薛兆丰经济学讲义》',
        price: 44.6,
        count: 1
      },
      {
        id: 3,
        name: '《史蒂夫乔布斯传》',
        price: 64.6,
        count: 1
      },
      {
        id: 4,
        name: '《Fullstack Vue.js》',
        price: 160.6,
        count: 1
      },
    ]
  },
  methods: {
    add(index) {
      this.books[index].count++
    },
    sub(index) {
      if (this.books[index].count === 0) {
        return
      } else {
        this.books[index].count--
      }
    },
    removeAction(index) {
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0
      for (let i = 0; i<this.books.length; i++) {
        totalPrice += this.books[i].price * this.books[i].count
      }
      return totalPrice
    }
  },
  filters: {
    finalPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})
