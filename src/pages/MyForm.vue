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
        <div class="col-6 q-py-sm">
          <q-file outlined dense label="attachment" v-model="input.myfile">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>
      </div>
      <q-btn label="Submit" color="primary" type="submit" class="q-mt-lg" />
    </q-form>

    <div>
      <q-btn label="get data" color="warning" @click="getData" />
      sample api
      <br />
      {{ output }}
    </div>
  </q-page>
</template>

<script>
import { ref, computed } from "vue";
import { useMyDataStore } from "src/stores/mydata.js";
export default {
  name: "MyForm",
  setup() {
    // let input = ref({});
    let pilihan = ref(["pilihan 1", "pilihan 1", "pilihan 1"]);
    let output = ref(null);
    const mydata = useMyDataStore();

    var input = computed(() => {
      return mydata.showdata;
    });

    function submitForm() {
      if (input.value.model == null) {
        console.log("kne pilih"); //alert untuk pilihan
      }

      //after validation
      let formData = new FormData();
      formData.append("name", input.value.name);
      formData.append("ic", input.value.ic);
      formData.append("model", input.value.model);
      formData.append("shape", input.value.shape);
      formData.append("attachment", input.value.myfile);

      console.log(formData.get("attachment"));
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
