const eventState = {
  fingerEventOccurred: false,
  principleEventOccurred: false,
  refrigeEventOccurred: false,
  seasoningEventOccurred: false,
};
function resetEventState() {
  eventState.fingerEventOccurred = false;
  eventState.principleEventOccurred = false;
  eventState.refrigeEventOccurred = false;
  eventState.seasoningEventOccurred = false;
}

module.exports = { eventState, resetEventState };
