module.exports = initState

function initState (initMsg) {
  return {
    players: initMsg.players,
    stones: new Map()
  }
}
