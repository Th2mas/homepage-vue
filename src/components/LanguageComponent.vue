<template>
  <div
    class="q-pl-sm q-pr-sm"
  >
    <q-list
      bordered
      separator
      class="q-mb-md"
      flat
    >
      <q-item
        v-for="lang of languages"
        :key="lang.name"
        class="q-pr-none"
      >
        <q-item-section
          avatar
        >
          <q-badge :color="getBadgeColor(lang.level)">
            {{ lang.level }}
          </q-badge>
        </q-item-section>
        <q-item-section>
          <span class="text-subtitle1 q-ml-sm">{{ lang.name }}</span>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';
import { LanguageLevel, LanguageModel } from 'src/models/language.model';
import languageJSON from 'assets/info/languages.json';

@Component
export default class LanguageComponent extends Vue {
    private readonly languages: Array<LanguageModel> = languageJSON as Array<LanguageModel>;

    getBadgeColor (language: LanguageLevel): string {
      switch (language) {
        case 'A1':
        case 'A2':
          return 'warning';
        case 'B1':
        case 'B2':
          return 'positive';
        default:
          return 'primary';
      }
    }
}
</script>

<style lang="scss">
</style>
