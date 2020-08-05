<template>
  <q-list padding>
    <q-item
      v-for="menu of shownMenus"
      :key="menu.name"
      v-ripple
      clickable
      :to="menu.link"
    >
      <q-item-section
        active
        avatar
      >
        <q-icon :name="menu.icon" />
      </q-item-section>

      <q-item-section>
        {{ menu.name }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import menuJSON from 'assets/info/nav/menus.json';
import { Vue, Component } from 'vue-property-decorator';
import { RouterModel } from 'src/models/router.model';

@Component
export default class NavListComponent extends Vue {
    private readonly menus: Array<RouterModel> = menuJSON;

    private get shownMenus () {
      return this.menus.filter(menu => menu.show);
    }
}
</script>
