const game = () =>{

    let pScore = 0;
    let cScore = 0;

    // start the game

    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add("fadeIn");

        });
    };

    //Play game

    const playMatch = ()=>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //Computer Options
        const computerOptions = ['rock','paper','scissors'];
        
        options.forEach(option=>{

            option.addEventListener('click',function(){
                // Computer CHoice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // we call compare hands here

                 compareHands(this.textContent, computerChoice);


                //update images

                playerHand.src= `./imagini/${this.textContent}.png`;
                computerHand.src=`./imagini/${computerChoice}.png`;


            })
        })

       
        
    }

    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');

        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
    }

    const compareHands = (playerChoice,computerChoice)=>{
        // Update text
        const winner= document.querySelector(".winner");
        // check for a tie
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie!';
            return;
        }
        //check for rock
        if(playerChoice=== 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Players wins!";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent="Computer wins!";
                cScore++;
                updateScore();
                return;
            }
        }
        //chehc for paper
        if(playerChoice=== 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Computer wins!";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent="Player wins!";
                pScore++;
                updateScore();
                return;
            }
        }
        //chech for scissors

        if(playerChoice=== 'scissors'){
            if(compteruChoice === 'rock'){
                winner.textContent = "Computer wins!";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent="Player wins!";
                pScore++;
                updateScore();
                return;
            }
        }

    }

 // Call all the inner function
 startGame();
 playMatch();
};

//Start the game function
game();