let renderComponent = {
  render(h) {
    return (
      <div class="render-card">
        <header class="card-header card-header-title">{this.message}</header>
      </div>
    );
  },
  props: ["message"]
};

new Vue({
  el: "#app",
  data: {
    message: "Greetings!"
  },
  components: {
    "render-component": renderComponent
  }
});
