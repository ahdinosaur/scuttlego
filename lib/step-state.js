module.exports = stepState

function stepState (state, stepMsg) {
  // TODO validate step msg

  state.board.set(stepMsg.content.move, stepMsg.author)

  return state
}
