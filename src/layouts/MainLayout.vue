<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <NavListComponent />
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar
            size="80px"
            class="q-mb-sm"
          >
            <img
              src="../assets/images/profile.png"
              alt="Khlebovitch Thomas Profile"
            >
          </q-avatar>
          <div class="text-weight-bold">
            Khlebovitch Thomas
          </div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import NavListComponent from 'components/NavListComponent.vue';

  @Component({
    components: {
      NavListComponent
    }
  })
export default class MainLayout extends Vue {
    private leftDrawerOpen = false;
}
</script>
