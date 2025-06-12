<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-large-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dailySalesChart.data"
          :chart-options="dailySalesChart.options"
          :chart-type="'Line'"
          data-background-color="blue"
        >
          <template slot="content">
            <h4 class="title">Incident Tweets and Reports over the time</h4>
            <p class="category">
              <span class="text-success"
                ><i class="fas fa-long-arrow-alt-up"></i> 55%
              </span>
              increase in incidents over the last hour.
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              updated 4 minutes ago
            </div>
          </template>
        </chart-card>
      </div>

      <div
        class="md-layout-item md-large-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dataCompletedTasksChart.data"
          :chart-options="dataCompletedTasksChart.options"
          :chart-type="'Bar'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title">Key Locations from Tweets</h4>
            <p class="category">
              Identify the Highly reported locations mentioned in tweets
            </p>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>report</md-icon>
          </template>

          <template slot="content">
            <p class="category">Total Incident Reported</p>
            <h3 class="title">245</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>info</md-icon>
              updated 2 min ago
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>person</md-icon>
          </template>

          <template slot="content">
            <p class="category">Working Responders</p>
            <h3 class="title">42/51</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">relief required in some locations</a>
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>map</md-icon>
          </template>

          <template slot="content">
            <p class="category">Unassigned Response Locations</p>
            <h3 class="title">75</h3>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <i class="fab fa-twitter"></i>
          </template>

          <template slot="content">
            <p class="category">Total Tweets Processed</p>
            <h3 class="title">+745</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>update</md-icon>
              Just Updated
            </div>
          </template>
        </stats-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  // NavTabsCard,
  // NavTabsTable,
  // OrderedTable,
} from "@/components";

export default {
  components: {
    StatsCard,
    ChartCard,
    // NavTabsCard,
    // NavTabsTable,
    // OrderedTable,
  },
  data() {
    return {
      dailySalesChart: {
        data: {
          labels: [
            "1:00PM",
            "2:00PM",
            "3:00PM",
            "4:00PM",
            "5:00PM",
            "6:00PM",
            "7:00PM",
          ],
          series: [[12, 17, 7, 17, 23, 18, 38]],
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      dataCompletedTasksChart: {
        data: {
          labels: [
            "Velachery",
            "Nungambakkam",
            "Madhavarm",
            "Perungudi",
            "Kolathur",
            "Ashok NAgar",
          ],
          series: [[230, 750, 450, 300, 280, 240]],
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De",
          ],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          ],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
    };
  },
};
</script>
