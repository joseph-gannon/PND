/**
 * Created by joe on 8/3/2015.
 */
if(Meteor.isClient)
{
    Template.MessageQueue.helpers
    ({
        'user' : function()
        {
            return Meteor.users.find()
        },
        'MessagesUnAnswered' : function()
        {
            var uId = Meteor.userId();
            return Messages.find({'sentTo' : uId}).count();
        },

        'isCurrentUser' : function(userId)
        {
            if(Meteor.userId() == userId)
            {
                return true
            }
            else
            {
                return false
            }
        }
    });

    Template.MessageQueue.events
    ({
        'submit form' : function(event)
        {
            event.preventDefault();
            var opponentNameList = document.getElementById('messageToText');
            var opponentName = opponentNameList.options[opponentNameList.selectedIndex].text;
            var opponentId = Meteor.users.findOne({username: opponentName})._id;
            var newMessage = {sentTo: opponentId, sentFrom: Meteor.userId(), matchApproved: false};
            Meteor.call('addMessageToQueue',newMessage);
        }
    });
}