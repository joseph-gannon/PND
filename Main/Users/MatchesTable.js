if(Meteor.isClient)
{
    Meteor.subscribe("allMatchData");
    Template.MatchesTable.helpers
    ({
        'numMatches' : function()
        {
            var uId = Meteor.userId();
            return MatchList.find({$or:[{'winnerId' : uId},{'loserId':uId}]}).count();
        },
        'allMatches' : function () {
            return MatchList.find();
        },
        'myCollection' : function () {
            return MatchList;
        },
        settings : function(){
            return {
                collection : MatchList,
                rowsPerPage: 10,
                showFilter: true,
                class: "pure-table table",
                fields: [
                    {key:'winnerName', label: 'Winner'},
                    {key: 'loserName', label: 'Loser'},
                    {key: 'winnerScore', label:'Winner Score'},
                    {key: 'loserScore', label:'Loser Score'},
                    {key: 'matchDate', label:'Match Date'}
                ]
            }
        }

    });
}