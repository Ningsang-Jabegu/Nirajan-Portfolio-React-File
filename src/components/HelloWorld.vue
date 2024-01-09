<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <p>Aaundai Xu Hai Ma Bato Ma I'm Walking, I'm Walking in the street of Thamel. Parkhi Bas!</p>
  <p>Comming Soon !</p>
</template>

<style scoped>
p {
  color: #888;
}
</style>
