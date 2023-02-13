<template>
    <div class="modal">
        <form action="showInConsole" onsubmit="return false">
            <input type="text" placeholder="A" v-model="valueA" />
            <input type="text" placeholder="B" v-model="valueB" />
            <button @click="submitForm" type="submit">
                Näita konsoolis
            </button>
        </form>
        <a class="btn-close" @click="$emit('close')">X</a>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const valueA = ref('')
const valueB = ref('')

defineEmits('close')

function submitForm() {
  console.log(valueA.value)
  console.log(valueB.value)
}
</script>

<style scoped>
    form {
        position: absolute;
        margin: auto;
        padding: 2rem;
        height: 11.3rem;
        background-color: rgb(255, 255, 255);
        display:flexbox;
        width: 25rem;
    }
    input {
        width: 21rem;
        padding-left: 1rem;
        margin-bottom: .5rem;
        letter-spacing: 1px;
        height: 2rem;
    }
    button {
        min-width: 5rem;
        padding: .5rem;
        background-color: black;
        color: white;
    }
    .btn-close{
        bottom: 4.5rem;
        left: 11.3rem;
        padding: 1rem;
        color: black;
        font-weight: 700;
    }
</style>