<template>
  <q-page padding>
    <!-- content -->
    <div>this is form page</div>

    <font-awesome-icon :icon="['fas', 'house-signal']" />
    <q-form @submit="submitForm">
      <div class="row">
        <div class="col-6 q-px-sm">
          <q-input
            v-model="input.name"
            label="Name"
            placeholder="Enter your name"
            hint="Same as your ic"
            outlined
            dense
          />
        </div>
        <div class="col-6">
          <q-input
            v-model="input.ic"
            label="IC"
            placeholder="Enter your ic without -"
            hint="Same as your ic"
            outlined
            dense
            :rules="[(val) => !!val || 'Field is required']"
          />
        </div>
        <div class="col-6 q-px-sm">
          <q-select
            outlined
            v-model="input.model"
            :options="pilihan"
            label="Outlined"
            dense
          />
        </div>
        <div class="col-6 q-px-sm">
          <q-radio v-model="input.shape" val="line" label="Line" />
        </div>
      </div>
      <q-btn label="Submit" color="primary" type="submit" class="q-mt-lg" />
    </q-form>
    {{ input.name }}

    <div>
      <q-btn label="get data" color="warning" @click="getData" />
      sample api
      <br />
      {{ output }}
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MyForm",
  setup() {
    let input = ref({});
    let pilihan = ref(["pilihan 1", "pilihan 1", "pilihan 1"]);
    let output = ref(null);
    function submitForm() {
      if (input.value.model == null) {
        console.log("kne pilih"); //alert untuk pilihan
      }

      //after validation
      let formData = new FormData();
      formData.append("");
    }
    async function getData() {
      var req = await fetch(
        "https://restcountries.com/v3.1/independent?status=true"
      );
      var res = await req.json();
      output.value = res;
      console.log(res);
    }
    return {
      input,
      pilihan,
      submitForm,
      getData,
      output,
    };
  },
};
</script>
