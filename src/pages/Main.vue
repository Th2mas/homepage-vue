<template>
  <q-page class="column">
    <q-list
      bordered
      class="rounded-borders q-ma-lg"
    >
      <q-expansion-item
        v-for="item of items"
        :key="item.label"
        expand-separator
        :icon="item.icon"
        :label="item.label"
        :caption="item.caption"
      >
        <q-card>
          <q-card-section>
            <EducationComponent
              v-if="item.label === 'Education'"
            />
            <ExperienceComponent
              v-if="item.label === 'Experience'"
            />
            <LanguageComponent
              v-if="item.label === 'Languages'"
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ExpansionItemModel } from 'src/models/expansion-item.model';
import EducationComponent from 'components/EducationComponent.vue';
import ExperienceComponent from 'components/ExperienceComponent.vue';
import LanguageComponent from 'components/LanguageComponent.vue';

@Component({
  components: { ExperienceComponent, EducationComponent, LanguageComponent }
})
export default class Main extends Vue {
  get items () {
    return [
      { label: 'Education', icon: 'menu_book' },
      { label: 'Experience', icon: 'code' },
      { label: 'Languages', icon: 'record_voice_over' }
    ] as Array<ExpansionItemModel>;
  }
}
</script>
