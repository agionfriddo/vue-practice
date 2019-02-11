<template>
  <div>
    <NumberDisplay />
    <NumberSubmit />
  </div>
</template>

<script>
import NumberDisplay from "./NumberDisplay";
import NumberSubmit from './NumberSubmit';
export default {
  name: 'ParentComponent',
  data() {
    return {
      numbers: [1, 2, 3]
    }
  },
  components: {
    NumberDisplay,
    NumberSubmit
  }
}
</script>
