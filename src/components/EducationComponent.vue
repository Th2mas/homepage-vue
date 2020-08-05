<template>
  <div
    class="q-pl-sm q-pr-sm"
  >
    <q-card
      v-for="edu of education"
      :key="edu.abbreviation"
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
            <a
              class="q-link"
              :href="edu.university.link"
            >
              {{ edu.university.en }}
            </a>
          </div>
          <div
            class="text-h5 q-mt-sm q-mb-xs"
          >
            <a
              class="q-link"
              :href="edu.title.link"
            >
              {{ edu.title.en }}
            </a>
          </div>
          <span class="text-caption">
            {{ edu.degree.full }}
          </span>
          <div class="text-caption text-grey">
            <!-- From - to -->
            <q-icon name="event" />
            {{ edu.duration.from }} -
            <span
              v-if="edu.duration.to"
            >
              {{ edu.duration.to }}
            </span>
            <span
              v-else
            >
              Now
            </span>
          </div>
          <span
            v-if="edu.thesis"
            class="text-caption"
          >
            Thesis:
            <a
              :href="edu.thesis.link"
              target="_blank"
            >
              {{ edu.thesis.title }}
            </a>
          </span>
        </q-card-section>
      </q-card-section>

      <q-separator
        v-if="edu.exchange"
      />

      <q-card-section
        v-if="edu.exchange"
        class="q-pt-none"
      >
        <div class="text-overline">
          <a
            class="q-link"
            :href="edu.exchange.link"
          >
            {{ edu.exchange.university }}
          </a>
        </div>
        <div class="text-subtitle1">
          {{ edu.exchange.title }}
        </div>
        <div class="text-caption text-grey">
          <q-icon name="event" />
          {{ edu.exchange.period }} {{ edu.exchange.year }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';
import { EducationModel } from 'src/models/education.model';
import educationJSON from 'assets/info/education.json';

  @Component
export default class EducationComponent extends Vue {
    private readonly education: Array<EducationModel> = educationJSON;
}
</script>

<style lang="scss">
  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: $primary;
    }
  }
</style>
