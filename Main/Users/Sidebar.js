/**
 * Created by joe on 8/4/2015.
 */
if(Meteor.isClient)
{
    Template.Sidebar.events
    ({
        'click .logout': function (event) {
            event.preventDefault();
            Meteor.logout();
            Router.go('/Login');
        },
        'click .home': function (event) {
            event.preventDefault();
            Router.go('/UserHome');
        },
        'click .matches': function (event) {
            event.preventDefault();
            Router.go('/MatchesTable');
        }
    });
}