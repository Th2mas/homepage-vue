<template>
  <div
    class="q-pl-sm q-pr-sm"
  >
    <q-card
      v-for="exp of orderedExperience"
      :key="exp.abbreviation"
      class="q-mb-md"
      flat
      bordered
    >
      <q-card-section
        horizontal
      >
        <q-card-section
          class="q-pt-xs"
        >
          <div
            class="text-overline"
          >
            {{ exp.type }}
          </div>
          <div
            class="text-h5 q-mt-sm q-mb-xs"
          >
            <a
              class="q-link"
              :href="exp.link"
            >
              {{ exp.name }}
            </a>
          </div>
          <div class="q-gutter-sm q-mt-sm">
            <span
              v-for="language in exp.language"
              :key="exp.name + language"
            >
              {{ language }}
            </span>
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-section>
        {{ exp.description }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import { ExperienceModel } from 'src/models/experience.model';
import experienceJSON from 'assets/info/experience.json';

@Component
export default class ExperienceComponent extends Vue {
    private readonly experience: Array<ExperienceModel> = experienceJSON;

    get orderedExperience (): Array<ExperienceModel> {
      const displayedExperience = this.experience.filter(exp => exp.display);
      displayedExperience.sort((a, b) => a.name.localeCompare(b.name));
      return displayedExperience;
    }
}
</script>

<style scoped>

</style>
