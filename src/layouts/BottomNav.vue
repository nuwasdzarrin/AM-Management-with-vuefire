<template>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      fixed
    >
      <v-btn
        color="teal"
        flat
        :to="{ name: 'Home' }"
      >
        <span>Schedule</span>
        <v-icon>list</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        :to="{ name: 'Add' }"
      >
        <span>Add</span>
        <v-icon>add_circle</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        :to="{ name: 'Chat' }"
      >
        <span>Chat</span>
        <v-icon>chat</v-icon>
      </v-btn>
    </v-bottom-nav>
</template>
<script>
  export default {
    data () {
      return {
        bottomNav: 'recent'
      }
    }
  }
</script>