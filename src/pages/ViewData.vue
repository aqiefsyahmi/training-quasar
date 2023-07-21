<template>
  <q-page padding>
    <!-- content -->
    {{ sample }}
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useMyDataStore } from "src/stores/mydata.js";

export default {
  // name: 'PageName',
  setup() {
    const mydata = useMyDataStore();
    let sample = mydata.maklumat.name;
    return {
      sample,
    };
  },
};
</script>
