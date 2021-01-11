//////////////////////////////////
//  The Number Guesser Project  //
//      from Codecademy         //
//  Written by Zimuzo Agu       //
//////////////////////////////////




let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;













/*
    This function will be called at the start of each new round 
    in order to generate the new secret target number
    This function should return a random integer between 0 and 9.
*/
const generateTarget = random_Integer => {

    // The random_Integer is set to a random variable bewteen 0 and 9
    random_Integer = Math.floor(Math.random() * 10);

    //The function returns the random_Integer variable
    return random_Integer;

} // End of the generate Target function





















/*
    This functin determines which guess 
    is closest to the target number

    returning true means the human won
    returning false means the computer won
*/
const compareGuesses = (user_Guess, computer_Guess, secret_Target) => {


    /* 
        The user_Closeness_to_target variable is set 
        to how close the user was to the secret target
    */
    const user_Closeness_to_target = Math.abs(secret_Target - user_Guess);






     /* 
        The computer_Closeness_to_target variable is set 
        to how close the user was to the secret target
    */
    const computer_Closeness_to_target = Math.abs(secret_Target - computer_Guess);







    // If the user and computer guess the same number the user wins
    if (user_Closeness_to_target == computer_Closeness_to_target) {

        return true;

    } else if (user_Closeness_to_target < computer_Closeness_to_target) {

        //If user is closer to the target than the computer then the user wines
        return true;

    } else if (user_Closeness_to_target > computer_Closeness_to_target) {

        //If computer is closer to the target than the user then the computer wins
        return false;
    }




} // End of the compareGuesses function























/*
    This function will be used to correctly
    increase the winner’s score after each round.
*/
const updateScore = winner => {

    // If the human wins a point gets added to its score
    if (winner == `human`) {

        humanScore++;

      // If the computer wins a point gets added to its score
    } else if (winner == `computer`) {

        computerScore++;

    }

} // End of the updateScore 













// This function advances the round number by 1
const  advanceRound = () => {

currentRoundNumber ++;

} // End of the advanceRound number


