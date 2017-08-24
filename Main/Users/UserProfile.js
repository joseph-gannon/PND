/**
 * Created by joe on 7/10/2015.
 */

if(Meteor.isClient)
{
    Template.UserProfile.events
    ({
        'click .logout': function (event) {
            event.preventDefault();
            Meteor.logout();
            Router.go('/Login');
        },
        'click .home' : function(event)
        {
            event.preventDefault();
            Router.go('/UserHome');
        }
    });

    Template.UserProfile.helpers
    ({
        currentWins: function(userId)
        {
            return MatchList.find({'winnerId':userId}).count();
        }
    })
}