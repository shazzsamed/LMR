<template>
  <div id="map"></div>
</template>

<script>
import L from "leaflet"; // Import Leaflet library
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS for proper styling
import { Transmit } from "@adonisjs/transmit-client";

export default {
  data() {
    return {
      map: null,
      markers: [], // Array to hold marker objects
      assignedPerson: null, // Holds the person selected for assignment
      id: 12,
      transmit: null,
      customIcon: L.icon({
        iconUrl: require("@/assets/img/map-marker.png"), // Path to the marker image
        iconSize: [38, 38], // Size of the icon
        iconAnchor: [22, 38], // Anchor point of the icon (where it points)
        popupAnchor: [-3, -38], // Position where the popup appears relative to the icon
      }),
    };
  },
  mounted() {
    // Initialize the map and set its view to Chennai
    this.transmit = new Transmit({
      baseUrl: "http://localhost:3333",
    });
    this.map = L.map("map").setView([13.0827, 80.2707], 10); // Coordinates for Chennai

    // Add the OpenStreetMap tile layer to the map
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        'Map data © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // Array of coordinates for markers near Chennai
    const markerCoordinates = [
      [13.0827, 80.2707],
      [13.0674, 80.2376],
      [13.0225, 80.1859],
      [13.0282, 80.2494],
      [13.0294, 80.207],
      [13.046, 80.2185],
      [13.065, 80.1918],
      [13.0669, 80.247],
      [13.0768, 80.2908],
      [13.022, 80.2345],
      [12.9783, 80.2381],
      [13.035, 80.1976],
    ];

    // Loop through coordinates to create markers
    markerCoordinates.forEach((coords) => {
      const marker = L.marker(coords, { icon: this.customIcon })
        .addTo(this.map)
        .bindPopup(this.getInitialPopupContent());
      // this.markers.push(marker);
      marker.on("popupopen", () => {
        this.handlePopupEvents(marker);
      });
    });

    this.loadMarkersFromLocalStorage();
    // Listen for the popupopen event to attach event listeners
    this.subscribeToMessages();
  },
  methods: {
    saveMarkerToLocalStorage(marker) {
      this.markers = JSON.parse(localStorage.getItem("markers")) || [];
      this.markers.push(marker);
      console.log(this.markers);
      console.log(JSON.stringify(this.markers));
      localStorage.setItem("markers", JSON.stringify(this.markers));
      // window.location.reload();
    },
    loadMarkersFromLocalStorage() {
      const storedMarkers = JSON.parse(localStorage.getItem("markers")) || [];
      storedMarkers.forEach((coords) => {
        const marker = L.marker([coords.lat, coords.lng], {
          icon: this.customIcon,
        })
          .addTo(this.map)
          .bindPopup(this.getInitialPopupContent(coords.text));
        // this.markers.push(marker);
        marker.on("popupopen", () => {
          this.handlePopupEvents(marker);
        });
      });
    },
    async subscribeToMessages() {
      const subscription = this.transmit.subscription("chats/1");
      await subscription.create();

      subscription.onMessage(({ message }) => {
        // console.log(message.coordinates);

        this.updateMap(message);
      });
    },

    updateMap(data) {
      const { coordinates, text } = data;

      if (coordinates) {
        // Add a new marker if it doesn't exist
        // console.log(coordinates, text);
        const data = {
          lat: coordinates.latitude,
          lng: coordinates.longitude,
          text: text,
        };
        this.saveMarkerToLocalStorage(data);
        const marker = L.marker([coordinates.latitude, coordinates.longitude], {
          icon: this.customIcon,
        })
          .addTo(this.map)
          .bindPopup(this.getInitialPopupContent(text));
        // this.markers.push(marker);
        marker.on("popupopen", () => {
          this.handlePopupEvents(marker);
        });

        // Center the map to the new marker
        this.map.setView([coordinates.latitude, coordinates.longitude], 12);
      }
    },
    // Get the initial popup content with tweet text and buttons
    getInitialPopupContent(text) {
      // console.log("text", text);
      return `
        <div>
          <p>${
            text ||
            "<strong>Disaster Relief Request:</strong> Severe flooding in this area. Immediate assistance required."
          }</p>
          <button id="navigate-btn">Navigate to Location</button>
          <button id="assign-btn">Assign</button>
        </div>
      `;
    },
    // Assign people for the task
    getAssignPopupContent() {
      return `
    <div class="assign-modal-content">
      <h5>Select a person to assign:</h5>
      <form id="assign-form">
        <div class="checkbox-group">
          <label>
            <input type="checkbox" class="assign-person-checkbox" data-person="Person A">
            Ramakrishnan
          </label>
        </div>
        <div class="checkbox-group">
          <label>
            <input type="checkbox" class="assign-person-checkbox" data-person="Person B">
            Sathish Kumar
          </label>
        </div>
        <div class="checkbox-group">
          <label>
            <input type="checkbox" class="assign-person-checkbox" data-person="Person C">
            Arun Prasath C
          </label>
        </div>
        <div class="checkbox-group">
          <label>
            <input type="checkbox" class="assign-person-checkbox" data-person="Person D">
            Harish Raj
          </label>
        </div>
        <div class="checkbox-group">
          <label>
            <input type="checkbox" class="assign-person-checkbox" data-person="Person E">
            Suresh G
          </label>
        </div>
        <!-- Add more checkboxes as necessary -->
        <div class="button-group">
          <button type="button" id="go-back-btn" class="go-back-btn">Go Back</button>
          <button type="submit" class="submit-assignment-btn">Assign</button>
        </div>
      </form>
    </div>
  `;
    },
    // Handle popup interactions
    handlePopupEvents(marker) {
      const navigateBtn = document.getElementById("navigate-btn");
      const assignBtn = document.getElementById("assign-btn");

      if (navigateBtn) {
        navigateBtn.addEventListener("click", () => {
          const lat = marker.getLatLng().lat; // Latitude of the marker
          const lng = marker.getLatLng().lng; // Longitude of the marker

          // Construct the Google Maps URL for directions
          const googleMapsUrl = `https://www.google.com/maps/dir//${lat},${lng}`;

          // Open the URL in a new tab
          window.open(googleMapsUrl, "_blank");

          // Close the popup after navigating
          marker.closePopup();
        });
      }

      if (assignBtn) {
        assignBtn.addEventListener("click", () => {
          marker.setPopupContent(this.getAssignPopupContent()).openPopup();
          this.handleAssignEvents(); // Attach events for assignment
        });
      }
    },
    // Handle events in the "Assign" popup
    handleAssignEvents() {
      document.querySelectorAll(".assign-person-btn").forEach((btn) => {
        btn.addEventListener("click", (event) => {
          this.assignedPerson = event.target.dataset.person;
          alert(`${this.assignedPerson} assigned successfully!`);
          const marker = this.marker[0];
          marker.closePopup();
        });
      });

      const goBackBtn = document.getElementById("go-back-btn");
      if (goBackBtn) {
        // Handle the "Go Back" button click
        goBackBtn.addEventListener("click", () => {
          const marker = this.marker[0];
          marker.setPopupContent(this.getInitialPopupContent()).openPopup();
        });
      }
    },
  },
};
</script>

<style>
#map {
  width: 100%;
  height: 100vh; /* Full screen height */
}

button {
  display: inline-block;
  padding: 5px 10px;
  margin-top: 10px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  margin-bottom: 5px;
}
.assign-modal-content {
  max-height: 40vh; /* Set max height of the modal content */
  overflow-y: auto; /* Enable vertical scrolling */
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.checkbox-group {
  margin-bottom: 10px;
}

.checkbox-group input {
  margin-right: 10px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.submit-assignment-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}

.submit-assignment-btn:hover {
  background-color: #218838;
}

.go-back-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}

.go-back-btn:hover {
  background-color: #c82333;
}
</style>
