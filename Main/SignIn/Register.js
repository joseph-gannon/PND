/**
 * Created by joe on 7/9/2015.
 */
if(Meteor.isClient)
{
    Template.register.events
    ({
        'submit form' : function(event)
        {
            event.preventDefault();
//            var email = event.target.registrationEmail.value; //$('[name=email]').val();
//            var password = event.target.registrationPassword.value; //$('[name=password]').val();

            var regEmail = $('[name=registrationEmail]').val();
            var regPassword = $('[name=registrationPassword]').val();
            var regConfirmPassword = $('[name=confirmRegistrationPassword]').val();
            var regUserName = $('[name=registrationUserName]').val();
            if(regPassword != regConfirmPassword)
            {
                toastr.error("Passwords don't match, dummy!");
            }
            else
            {
                //insert user into Meteor
                var user = {
                    email: regEmail,
                    password: regPassword,
                    username: regUserName,
                    profile:
                    {
                        rating: 0,
                        playerWins: 0,
                        playerLoses: 0,
                        gamesPlayed: 0
                    }
                };


                Accounts.createUser(user, function(error)
                {
                    if(error)
                    {
                        toastr.error(error.reason);
                    }
                    else
                    {
                        toastr.info("Welcome Ponger "+username+"!");
                    }
                });
                Router.go('/UserHome');
            }



        }



    });


}