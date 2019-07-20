<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card class="form-add">
          <v-card-title primary-title>
            <h5 class="title md0">tambah event</h5>
          </v-card-title>
          <form>
            <v-text-field v-model="tanggal" label="Tanggal" required></v-text-field>
            <v-text-field v-model="penyewa" label="Penyewa" required></v-text-field>
            <v-text-field v-model="acara" label="Acara" required></v-text-field>
            <v-text-field v-model="catatan" label="Catatan" required></v-text-field>
            <v-layout row wrap v-for="(line, index) in lines" v-bind:key="index">
              <v-flex xs8>
                <v-text-field v-model="line.disewa" label="Disewa" required></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-btn flat icon color="indigo" v-if="index + 1 === lines.length" @click="addLine">
                  <v-icon dark>add</v-icon>
                </v-btn>
              </v-flex>
              <v-flex xs2>
                <v-btn flat icon color="red" @click="removeLine(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
            <v-btn @click="addItem">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </form>
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
      tanggal: "",
      penyewa:"",
      acara:"",
      catatan:"",
      lines: [],
      blockRemoval: true,
    };
  },
  firebase: {
    rentals: db.ref("rentals")
  },
  watch: {
    lines () {
      this.blockRemoval = this.lines.length <= 1
    }
  },
  methods: {
    clear() {
      this.tanggal = ""
      this.penyewa = ""
      this.acara = ""
      this.catatan = ""
      this.lines = []
    },
    addItem() {
      this.$firebaseRefs.rentals.push({
        tanggal: this.tanggal,
        penyewa: this.penyewa,
        acara: this.acara,
        catatan: this.catatan,
        disewakan : this.lines
      });
      this.$router.push("/");
    },
    addLine () {
      let checkEmptyLines = this.lines.filter(line => line.disewa == null)
      if (checkEmptyLines.length >= 1 && this.lines.length > 0) return
      this.lines.push({
        disewa: null
      })
    },
    removeLine (lineId) {
      if (!this.blockRemoval) this.lines.splice(lineId, 1)
    }
  },
  mounted() {
    this.addLine()
  }
};
</script>
<style>
.form-add {
  padding: 0px 10px 10px 10px;
}
</style>

