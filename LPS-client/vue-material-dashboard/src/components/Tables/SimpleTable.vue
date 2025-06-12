<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Phone Number">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Address">{{ item.address }}</md-table-cell>
        <md-table-cell md-label="Status">
          <span :style="{ color: getStatusColor(item.status) }">
            {{ item.status }}
          </span>
        </md-table-cell>
        <md-table-cell md-label="Last Active Time">{{
          item.lastActiveTime
        }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      users: [
        {
          name: "Arun Kumar",
          phone: "9876543210",
          address: "Chennai, Tamil Nadu",
          status: "On-duty",
          lastActiveTime: "10:45 AM",
        },
        {
          name: "Suresh Raj",
          phone: "9876543211",
          address: "Madurai, Tamil Nadu",
          status: "Off-duty",
          lastActiveTime: "8:30 PM",
        },
        {
          name: "Vignesh Varma",
          phone: "9876543212",
          address: "Coimbatore, Tamil Nadu",
          status: "On-duty",
          lastActiveTime: "9:15 AM",
        },
        {
          name: "Siva Moorthy",
          phone: "9876543213",
          address: "Tiruchirappalli, Tamil Nadu",
          status: "Off-duty",
          lastActiveTime: "11:00 PM",
        },
        {
          name: "Bala Krishnan",
          phone: "9876543214",
          address: "Tenkasi, Tamil Nadu",
          status: "On-duty",
          lastActiveTime: "7:00 AM",
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      if (status === "On-duty") {
        return "green";
      } else if (status === "Off-duty") {
        return "red";
      }
      return "black"; // default color
    },
  },
};
</script>
