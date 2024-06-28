const chatInput = document.querySelector("#chat-input");
const sendInput = document.querySelector("#send-btn");
console.log("Hi");
let userText = null;

const handleOutgoingChat = () => {
    userText = chatInput.value.trim();
    console.log(userText);
};


sendInput.addEventListener("click", handleOutgoingChat);
