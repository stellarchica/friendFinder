// handles incoming survey results / compatibility logic
// load datas
var friendList = require("../data/friend.js");

module.exports = function(app){
  // GET route, displays JSON of all possible friends
  app.get("/api/friends", function(req,res){
    res.json(friendList);
  });

  app.post("/api/friends", function(req,res){
    // grabs new friend's scores to compare with friends in array
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    // runs through current friends in list
    for(var i=0; i<friendList.length; i++){
      var scoresDiff = 0;
      // runs through scores, compares friends
      for(var j=0; j<newFriendScores.length; j++){
          // right math?
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      // push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    // after all friends are compared, finds best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    var bff = friendList[bestMatch];
    res.json(bff);

    //pushes new submission into the friendsList array
    friendList.push(req.body);
  });
};