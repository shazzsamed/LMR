<template>
  <form @submit.prevent="handleSubmit">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Report An Incident Directly</h4>
        <p class="category">Submit a detailed report</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Phone Number</label>
              <md-input v-model="phonenumber" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Full Name</label>
              <md-input v-model="fullname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Address</label>
              <md-input v-model="address" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>City</label>
              <md-input v-model="city" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Country</label>
              <md-input v-model="country" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Postal Code</label>
              <md-input v-model="code" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Description</label>
              <md-textarea v-model="description"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button type="submit" class="md-raised md-danger"
              >Report</md-button
            >
          </div>
        </div>
        <p v-if="showSuccessMessage" class="success-message">
          Reported Incident Successfully!
        </p>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      phonenumber: null,
      fullname: null,
      address: null,
      city: null,
      country: null,
      code: null,
      description: "",
      showSuccessMessage: false,
    };
  },
  methods: {
    handleSubmit() {
      // Simulate form submission
      console.log("Form submitted:", {
        phonenumber: this.phonenumber,
        fullname: this.fullname,
        address: this.address,
        city: this.city,
        country: this.country,
        code: this.code,
        description: this.description,
      });

      // Reset form fields
      this.phonenumber = null;
      this.fullname = null;
      this.address = null;
      this.city = null;
      this.country = null;
      this.code = null;
      this.description = "";

      // Show success message
      this.showSuccessMessage = true;

      // Hide success message after 3 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
    },
  },
};
</script>

<style>
.success-message {
  color: green;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}
</style>
