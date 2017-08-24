PlayerList = new Mongo.Collection('players');
MatchList = new Mongo.Collection('matches');
Messages = new Mongo.Collection('messages');
//UserAccounts = new Mongo.Collection('users');
Router.route('/register');
Router.route('/UserHome');
Router.route('/personalBoard');
Router.route('login');
Router.route('/MatchesTable');
Router.route('/',{template: 'login'});
Router.configure({
    layoutTemplate: 'main'
});
if(Meteor.isClient){
//    PlayerList.insert({name: "Joe",gamesPlayed: 0});
//    PlayerList.insert({name: "Ben", gamesPlayed: 0});
   console.log("Hello client");


}

