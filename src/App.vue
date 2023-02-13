<template>
  <div class="container">
    <popup></popup>
  </div>
</template>

<script>
import Popup from './components/Popup.vue';
import ABPopupForm from './components/ABPopupForm.vue';

export default {
  name: 'App',
  components: {
    Popup,
    ABPopupForm
  }
}
</script>
