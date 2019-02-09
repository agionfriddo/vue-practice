<template>
  <div>
    <input type="number" v-model="numberInput">
    <button 
      @click="addNumber(numberInput)">
      Add new number
    </button>
  </div>
</template>

<script>
import { store } from '../store.js';
export default {
  name: 'NumberSubmit',
  data() {
    return {
      number: 0
    }
  },
  methods: {
    addNumber(numberInput) {
      store.addNumber(Number(numberInput))
    }
  }
}
</script>

