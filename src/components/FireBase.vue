<template>
  <div v-if="documentData">
    <h1>Name: {{ documentData.name }}</h1>
    <p>Age: {{ documentData.age }}</p>
  </div>
  <p v-else>Loading data...</p>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";

export default {
  name: "FireBase",
  data() {
    return {
      documentData: null,
    };
  },
  mounted() {
    this.read();
  },
  methods: {
    async read() {
      try {
        // Get the collection
        const snapshot = await getDocs(collection(db, "test-phase"));
        // Find documents existing in the collection
        const doc = snapshot.docs.find((doc) => doc.exists);

        this.documentData = {
          age: doc.data().age,
          name: doc.data().name,
        };
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add any styling here */
</style>
