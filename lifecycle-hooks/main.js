new Vue({
  el: '#app',
  data: {
    name: 'Loading...',
    email: 'Loading...',
    company: {
      name: 'Loading...',
      catchPhrase: 'Loading...',
      }
    }, 
  created() {
    // instance has been created
    console.log('Created');
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      const data = res.data;
      const randomUser = res.data[
        Math.floor(Math.random() * data.length)
      ];
      this.name = randomUser.name;
      this.email = randomUser.email;
      this.company.name = randomUser.company.name;
      this.company.catchPhrase = randomUser.company.catchPhrase;
    })
  },
  mounted() {
    // instance has been mounted
    console.log('Mounted')
    console.log(this.$el)
  },
  updated() {
    // instance has been updated
    console.log('updated');
    console.log(this.$el) // DOM AFTER update is complete
  },
  destroyed() {
    // instance has been destroyed
  }
});

// all of these lifecycle hooks have before hooks as well
// i.e. beforeCreate, beforeMount, beforeUpdate, beforeDestroyed