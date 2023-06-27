// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
  let takeoffButton = document.getElementById("takeoff-button");
  takeoffButton.addEventListener("click", function() {
    let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (confirmation) {
      // Change flight status
      let flightStatus = document.getElementById("flight-status");
      flightStatus.textContent = "Shuttle in flight.";

      // Change background color
      let shuttleBackground = document.getElementById("shuttleBackground");
      shuttleBackground.style.backgroundColor = "blue";

      // Increase shuttle height
      let shuttleHeight = document.getElementById("shuttle-height");
      let currentHeight = parseInt(shuttleHeight.textContent.split(" ")[2]);
      let newHeight = currentHeight + 10000;
      shuttleHeight.textContent = "Current height: " + newHeight + " miles";
    }
  });
});
