const localComponent = {
  template: `<p>Hello World!</p>`
}

new Vue({
  el: '#app',
  template: `
    <div>
      <local-component></local-component>
    </div> `,
  components: {
    "local-component": localComponent
  }
});
