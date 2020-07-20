export const loadingActions = {
    startLoading,
    stopLoading,
}

function startLoading() {
  return { type: "START_LOADING"};
}
function stopLoading() {
  return { type: "STOP_LOADING"};
}
