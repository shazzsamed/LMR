<template>
  <div class="chat-container">
    <div id="messages" class="message-container">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="message-bubble"
      >
        <p>{{ message }}</p>
      </div>
    </div>
    <form @submit.prevent="sendMessage" id="message_form" class="message-form">
      <input
        v-model="message"
        id="message"
        placeholder="What's happening?"
        class="message-input"
      />
      <button type="submit" class="send-button">Send</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Transmit } from "@adonisjs/transmit-client";

// Reactive variables
const messages = ref([]);
const message = ref("");

// Create the Transmit client
const transmit = new Transmit({
  baseUrl: "http://localhost:3333",
});

// Send a message
const sendMessage = async () => {
  if (!message.value) return;

  const formData = new FormData();
  formData.append("message", message.value);

  try {
    const response = await fetch("http://localhost:3333/messages", {
      method: "POST",
      body: formData,
    });
    messages.value.push(message.value);
    message.value = "";
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

// Subscribe to the Transmit channel
const subscribeToMessages = async () => {
  const subscription = transmit.subscription("chats/1");
  await subscription.create();

  subscription.onMessage(({ message }) => {
    messages.value.push(message);
  });
};

// Lifecycle hook to subscribe to messages when the component is mounted
onMounted(() => {
  subscribeToMessages();
});
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
}

.message-container {
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #e1e8ed;
  padding: 15px;
  background-color: #f5f8fa;
  margin-bottom: 15px;
  border-radius: 12px;
}

.message-bubble {
  background-color: #1da1f2;
  color: white;
  border-radius: 20px;
  padding: 8px 16px;
  margin-bottom: 12px;
  max-width: 80%;
  word-wrap: break-word;
  display: inline-block;
}

.message-form {
  display: flex;
  align-items: center;
  gap: 10px;
}

.message-input {
  flex-grow: 1;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid #e1e8ed;
  font-size: 16px;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.message-input:focus {
  border-color: #1da1f2;
}

.send-button {
  padding: 8px 16px;
  background-color: #1da1f2;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
}

.send-button:hover {
  background-color: #1991d0;
}

.send-button:active {
  background-color: #1686b8;
}
</style>
