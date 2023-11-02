let client;
// let username = "";

init();

async function init() {
  client = await app.initialized();
  client.events.on("app.activated", renderText);
}

async function renderText() {
  client.events.on("ticket.replyClick", replyClick);
}

const spotlight = document.querySelector(".spotlight");

//Open Reply editor dialog box
const replyClick = async (event) => {
  let loggedInUser = await client.data.get("loggedInUser");
  let event_data = await event.helper.getData();
  const row = `<fw-label value="${loggedInUser?.loggedInUser?.contact?.name}" color="green"></fw-label>`;
  let username = loggedInUser?.loggedInUser?.contact?.name;
  spotlight.insertAdjacentHTML("afterend", row);
  console.log(event, "----event");
  console.log(loggedInUser?.loggedInUser?.contact?.name, "---->logged in user");
  await client.interface
    .trigger("setValue", {
      id: "editor",
      text: `<div class="fw-type-light">Regards</div>
             <div class="fw-type-light">${username}</div>`,
      replace: false,
      position: "end",
    })
    .then(function (data) {
      // data - success message
      console.log(data, "--->data");
    })
    .catch(function (error) {
      // error - error object
    });
};
