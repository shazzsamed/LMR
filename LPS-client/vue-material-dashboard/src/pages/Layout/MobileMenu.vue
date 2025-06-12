<template>
  <ul class="nav nav-mobile-menu">
    <li>
      <md-field>
        <label>Search</label>
        <md-input v-model="search" type="text"></md-input>
      </md-field>
    </li>
    <li>
      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        <i class="material-icons">dashboard</i>
        <p>Dashboard</p></a
      >
    </li>
    <li>
      <drop-down>
        <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
          <i class="material-icons">notifications</i>
          <span class="notification">5</span>
          <p>Notifications</p>
        </a>
        <ul class="dropdown-menu dropdown-menu-right">
          <li>
            <a href="#"
              >Flooding reported near Marina Beach, Chennai at 08:12 AM.</a
            >
          </li>
          <li>
            <a href="#"
              >Flooding reported in Kotturpuram, Chennai at 09:28 AM.</a
            >
          </li>
          <li>
            <a href="#"
              >Flooding detected in Adyar Park, Chennai at 10:03 AM.</a
            >
          </li>
          <li>
            <a href="#"
              >Flooding emergency in Nungambakkam, Chennai at 11:47 AM.</a
            >
          </li>
          <li>
            <a href="#">Flooding in Tidel Park area, Chennai at 01:22 PM.</a>
          </li>
        </ul>
      </drop-down>
    </li>
    <li>
      <a href="#" data-toggle="dropdown" class="dropdown-toggle"
        ><i class="material-icons">person</i>
        <p>Profile</p></a
      >
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      search: null,
      selectedEmployee: null,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone",
      ],
    };
  },
};
</script>
