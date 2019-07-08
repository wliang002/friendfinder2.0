// ===============================================================================
// LOAD DATA
// // ===============================================================================

let userData = require('../data/friends')

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = (app) => {
  app.get('/api/friends', (req, res) => {
    res.json(userData)
  })

  app.post('/api/friends', (req, res) => {
    let newUser = {
      name: req.body.name,
      image: req.body.image,
      score: req.body.score
    }

    let bestMatch = userData[0]

    if (userData.length > 0) {
      let lowestDiff = 1000

      for (let i = 0; i < userData.length; i++) {
        let currFriend = userData[i]
        let currScore = userData[i].score
        let diffence = 0

        for (let j = 0; j < currScore.length; j++) {
          let user1score = parseInt(currScore[j])
          let user2score = parseInt(newUser.score[j])

          diffence += Math.abs(user1score - user2score)
        }

        if (diffence < lowestDiff) {
          lowestDiff = diffence
          bestMatch = currFriend
        }
      }
    }

    userData.push(req.body)

    res.json(bestMatch)
  })
}
