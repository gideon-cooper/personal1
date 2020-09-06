const request = require("superagent")

let deckId = ""

export const getDeck = () => {
  return request
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
    .then((resp) => {
      console.log(resp.body.deck_id)
      deckId = resp.body.deck_id
      console.log(deckId)
    })
}
export const beginningDraw = () => {
  return request
    .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((resp) => {
      console.log(resp.body.cards)
      return resp.body.cards
    })
}
