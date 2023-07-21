<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Registration </q-toolbar-title>
      </q-toolbar>

      <!-- <q-tabs>
        <q-route-tab icon="map" to="/your/route" replace label="One Tab" />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs> -->
    </q-header>

    <!-- (Optional) The Footer -->
    <!-- <q-footer>
      <q-tabs switch-indicator>
        <q-route-tab icon="map" to="/your/route" replace label="One Tab" />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs>

      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> Footer </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer v-model="leftDrawerOpen" side="left" bordered :class="myclass">
      <q-list bordered class="rounded-borders">
        <q-expansion-item expand-separator icon="mail" label="Dashboard">
          <q-item clickable v-ripple to="/admin">
            <!-- <q-item clickable v-ripple @click="gotopage"> -->
            <q-item-section style="padding-left: 20%" avatar>
              <q-icon color="positive" name="delete" />
            </q-item-section>
            <q-item-section>go to other page</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/form">
            <!-- <q-item clickable v-ripple @click="gotopage"> -->
            <q-item-section style="padding-left: 20%" avatar>
              <q-icon color="primary" name="fa-solid fa-ambulance" />
            </q-item-section>
            <q-item-section>form</q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          :content-inset-level="0.5"
          expand-separator
          icon="mail"
          label="Inbox"
          caption="5 unread emails"
        >
          <q-expansion-item
            expand-separator
            :content-inset-level="0.5"
            icon="receipt"
            label="Receipts"
          >
            <q-expansion-item label="Today" :content-inset-level="0.5">
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, eius reprehenderit eos corrupti commodi magni quaerat
                  ex numquam, dolorum officiis modi facere maiores architecto
                  suscipit iste eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item label="Yesterday" :content-inset-level="0.5">
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, eius reprehenderit eos corrupti commodi magni quaerat
                  ex numquam, dolorum officiis modi facere maiores architecto
                  suscipit iste eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-expansion-item>

          <q-expansion-item
            :content-inset-level="0.5"
            expand-separator
            icon="schedule"
            label="Postponed"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-expansion-item>

        <q-expansion-item expand-separator icon="mail" label="Menu" />
      </q-list>

      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  // name: 'LayoutName',

  setup() {
    let nama = ref(null);
    var age = ref(false);
    var myclass = ref("bg-grey-2");
    const leftDrawerOpen = ref(true);

    function gotopage() {
      window.location.href = "#/admin";
    }
    return {
      myclass,
      gotopage,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
