const nodes = {
  alice: document.getElementById("alice"),
  bob: document.getElementById("bob"),
  eve: document.getElementById("eve")
};

const actions = ["Broadcast", "Multicast", "Unicast"];
const message = document.getElementById("message");

function sendAction() {
  const action = actions[Math.floor(Math.random() * actions.length)];
  message.textContent = action;

  // clear previous highlights
  Object.values(nodes).forEach(n => n.classList.remove("active"));

  if (action === "Broadcast") {
    nodes.alice.classList.add("active");
    setTimeout(() => {
      nodes.bob.classList.add("active");
      nodes.eve.classList.add("active");
    }, 500);
  } 
  else if (action === "Multicast") {
    nodes.alice.classList.add("active");
    setTimeout(() => nodes.bob.classList.add("active"), 500);
  } 
  else if (action === "Unicast") {
    nodes.alice.classList.add("active");
    setTimeout(() => nodes.eve.classList.add("active"), 500);
  }

  // remove glow after 2 seconds
  setTimeout(() => {
    Object.values(nodes).forEach(n => n.classList.remove("active"));
  }, 2000);
}

setInterval(sendAction, 3000);
