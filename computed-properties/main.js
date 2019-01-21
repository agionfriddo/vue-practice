new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  },
  computed: {
    reverseString() {
      return this.message.split('').reverse().join('');
    }
  }
});