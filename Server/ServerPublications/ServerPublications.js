/**
 * Created by joe on 8/16/2015.
 */
if (Meteor.isServer)
{
    Meteor.startup(function() {
        process.env.MONGO_URL = 'mongodb://heroku_lmkgf49q:mtc3ckmal0cjl47gsacdn4fp4i@ds149329.mlab.com:49329/heroku_lmkgf49q';
        console.log("All UserData Publish");
        Meteor.publish("allUserData", function () {
            //return Meteor.users.find({}, {fields: {"emails.address": 1}});
            return Meteor.users.find();
        });
        Meteor.publish("allMatchData", function () {
            return MatchList.find();
        });
        return Meteor.methods({

            removeAllPlayers: function()
            {
                return Meteor.users.remove({});
            },
            addMatchResult: function(match)
            {
                console.log(match.winnerName);

                //add match to the match collection
                MatchList.insert(match);

                //update winner
                var winnerWins = MatchList.find({'winnerId':match.winnerId}).count();
                var winnerLoses = MatchList.find({'loserId':match.winnerId}).count();
                console.log("winnerLosesReq: "+winnerLoses);
                var winnerGamesPlayed = winnerWins + winnerLoses;
                Meteor.users.update({_id: match.winnerId},{ $set:{"profile.playerWins":winnerWins, "profile.gamesPlayed": winnerGamesPlayed}}); //update winner


                //update Loser
                var loserWins = MatchList.find({'winnerId':match.loserId}).count();
                var loserLoses = MatchList.find({'loserId':match.loserId}).count();
                var loserGamesPlayed = loserWins + loserLoses;
                Meteor.users.update({_id: match.loserId},{ $set:{"profile.playerWins":loserWins, "profile.gamesPlayed": loserGamesPlayed, "profile.playerLoses": loserLoses}});
                return true;
            },
            removeAllMatches: function()
            {
                return MatchList.remove({});
            },
            addMessageToQueue : function(message)
            {
                Messages.insert(message)
                console.log(message);
                return true;
            }

        });

    });


};