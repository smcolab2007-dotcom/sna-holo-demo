const actions = ["Broadcast", "Unicast", "Multicast", "Anycast", "ACK"];
const message = document.getElementById("message");

function randomAction() {
  const action = actions[Math.floor(Math.random() * actions.length)];
  message.textContent = action + " active...";
  message.style.opacity = 1;
  setTimeout(() => (message.style.opacity = 0), 1500);
}

setInterval(randomAction, 2000);
