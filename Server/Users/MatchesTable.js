if(Meteor.isClient)
{
    Template.MatchesTable.helpers
    ({
        'numMatches' : function()
        {
            var uId = Meteor.userId();
            return MatchList.find({$or:[{'winnerId' : uId},{'loserId':uId}]}).count();
        }
    });
}