<template>
    <div class="root">
        <button @click="isOpen = true">Nupp 1</button>

        <teleport to="body">
            <div class="modal" v-if="isOpen">
                <ab-popup-form
                    @close="isOpen = false"
                />
            </div>
        </teleport>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ABPopupForm from './ABPopupForm.vue'

const isOpen = ref(false)
</script>
<style scoped>
.root {
    position: relative;
    width: 90%;
    height: 40rem;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}
.modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    min-width: 6rem;
    height: 3rem;
}
</style>