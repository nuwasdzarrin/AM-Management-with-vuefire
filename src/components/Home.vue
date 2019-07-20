<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card class="list-event" v-for="item of items" :key="item['.key']">
          <v-toolbar>
            <v-icon>calendar_today</v-icon>
            <v-toolbar-title>
              <h6 class="subheading">{{ item.tanggal }}</h6>
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-title primary-title class="justify-center">
            <div>
              <h6 class="title content">
                <v-icon>person</v-icon>
                {{ item.penyewa }}
              </h6>
              <h6 class="subheading content">Acara : {{ item.acara }}</h6>
              <div class="subheading catatan">{{ item.catatan }}</div>
            </div>
          </v-card-title>
          <v-container>
          <v-list two-line class="sewa">
            <v-subheader class="sewa-header">Disewa :</v-subheader>
            <v-list-tile class="sewa-list" v-for="i of item.disewakan" :key="i['.key']">
              <v-list-tile-content>
                <v-list-tile-title>{{ i.disewa }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          </v-container>
          <v-footer class="footer">
            <v-layout justify-center>
              <v-btn small @click="deleteItem(item['.key'])" color="red" style="color:white;">
                <v-icon>delete</v-icon>Delete
              </v-btn>
            </v-layout>
          </v-footer>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { db } from "../config/db";
export default {
  data() {
    return {
      items: []
    };
  },
  firebase: {
    items: db.ref("rentals")
  },
  methods: {
    deleteItem(key) {
      this.$firebaseRefs.items.child(key).remove();
    }
  }
};
</script>
<style>
.list-event {
  margin-bottom: 15px;
}

.catatan {
  padding: 10px 20px 10px 20px;
  border: 2px solid aquamarine;
}

.content {
  margin-bottom: 10px;
}

.sewa{
  border: outset;
  margin-top: -20px;
}

.sewa-header {
  margin-top: -15px;
  margin-bottom: 10px;
}

.sewa-list {
  margin-top: -45px;
}
.footer {
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>

