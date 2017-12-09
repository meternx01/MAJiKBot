/*jslint node:true*/

var ConversationV1 = require("watson-developer-cloud/conversation/v1");

var conversation = new ConversationV1({
    username: "64107c90-c34d-408e-96d8-199a5b1ca68b",
    password: "DTx4ImeFweuq",
    version_date: ConversationV1.VERSION_DATE_2017_05_26
});

module.exports = {
    sendToWatson: function (req, res) {
        "use strict";
        var output = {
            text: ""
        };
        conversation.message({
            input: {
                text: req.query.input
            },
            workspace_id: "f1f8545c-15ee-493a-ba1e-1d0ff7c7b06a"
        }, function (err, response) {
            "use strict";
            if (err) {
                console.error(err);
            } else {
                if (response.intents.length === 0) {
                    output.text = "You need to input your query more specifically, Please state if you want to get your Balance or Transfer. And how much you want to transfer to Whom.";
                } else {
                    switch (response.intents[0].intent) {
                        case "Transfer":
                            {
                                output.text = "Transfer completed from Your account to " + response.context.ToAcct + " in the amount of " + response.context.Amount;
                                //transferIntent(response.context.Amount, response.context.ToAcct, response.input.text);
                            }

                            break;
                        case "Balance":
                            {
                                // SQL Statement here
                                output.text = "Your Balance is X";
                            }
                    }
                }
                res.json(output);
            }
        });
    }

    //    function irrelevantResponse() {
    //        console.log("I didn\'t understand. You can try rephrasing.");
    //    }
    //
    //    function transferIntent(amount, toAccount, text) {
    //        console.log(amount, toAccount, text)
    //        if (!amount) {
    //            // need to set trigger to ask for the amount
    //            console.log("How Much?");
    //        } else
    //        if (!toAccount) {
    //            // need to set trigger to ask for the destination
    //            console.log("To Where?");
    //        } else {
    //            // sequelize statement to update current account and destination
    //        }
    //
    //    }
    //
    //    function balanceIntent(user) {
    //        console.log("Balance Intent");
    //
    //        // db.findOne where username = user
    //    }
    //
    //    function transIntentAmount(funds) {
    //        //set funds to some state
    //    }
    //
    //    function transIntentDestination(toAccount) {
    //        //set funds to some state
    //    }
};
/* Balance JSON Response fields
    response.intents[0].intent
    response.input.text
*/

/* Transfer JSON Response fields
    response.intents[0].intent
    response.input.text
    response.context.Amount
    response.context.ToAcct
    response.context.FromAcct
*/
/*  Irrelevant Response Format
    response.intents == [];
*/
