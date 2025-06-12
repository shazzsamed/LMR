<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header :style="{ backgroundColor: '#7ba7e6' }">
            <h4 class="title">Contact Details - Responders</h4>
            <p class="category">
              Find all the details of the emergency responders here.
            </p>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="blue"></simple-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable } from "@/components";

export default {
  components: {
    SimpleTable,
  },
};
</script>
