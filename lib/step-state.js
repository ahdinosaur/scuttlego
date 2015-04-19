module.exports = stepState

function stepState (state, stepMsg) {
  // TODO validate step msg

  state.board.play(stepMsg.content.move, stepMsg.author)

  return state
}
