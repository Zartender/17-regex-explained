

//Test emails
const email = ["john.dane@yahoo.com", "powderpuffBopitKing@gmail.com", "james.regis31@ccad.edu", 
"mhamiltion52@osu.edu", "guntherCollins@wowway.com", "fletcherKingpin@ACDC.com", "foragerking@borealopelta.com", 
"AshleyMcCoy@gmail.com", "thirdeyeraven@rrMARTIN.io", "sHarper@BazaarMag.com"];

//Define Regex to validate the email string
const regex = new RegExp(/\b[a-z0-9#$_-]+@[a-z0-9]+\.[a-z]{2,3}\b/, 'i')

//Test and check the console for the results
email.forEach(email => console.log(email, regex.test(email)));
