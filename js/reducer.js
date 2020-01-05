let state = { count: 0 };

function changeState(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render() {
  document.getElementById("root").innerText = state.count;
  // document.body.textContent = state.count;
}

function handleButton() {
  dispatch({ type: "@@INIT" });
  dispatch({ type: "INCREASE_COUNT" });
}

dispatch({ type: "INIT" });
// dispatch({ type: "INCREASE_COUNT" });
