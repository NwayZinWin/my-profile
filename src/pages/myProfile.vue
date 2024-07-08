<template>
<v-app-bar :elevation="0">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>nway zin win Bar</v-app-bar-title>

  <template v-slot:append>
    <v-btn icon="mdi-heart"></v-btn>

    <v-btn icon="mdi-magnify"></v-btn>

    <v-btn icon="mdi-dots-vertical"></v-btn>
  </template>
</v-app-bar>
</template>
<script>
export default{
    data(){
        return{

        }
    },
}
</script>