let client;

init();

async function init() {
  client = await app.initialized();
  client.events.on("app.activated", renderText);
}

async function renderText() {
  client.events.on("ticket.forwardClick", forwardClick);
}

const spotlight = document.querySelector(".spotlight");

//Open Forward editor dialog box
const forwardClick = async (event) => {
  let loggedInUser = await client.data.get("loggedInUser");
  let event_data = await event.helper.getData();
  const row = `<fw-label value="${loggedInUser?.loggedInUser?.contact?.name}" color="green"></fw-label>`;
  spotlight.insertAdjacentHTML("afterend", row);
  console.log(event, "----event");
  console.log(loggedInUser?.loggedInUser?.contact?.name, "---->logged in user");
};
