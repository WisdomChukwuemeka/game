import { useState, useEffect} from "react"
import "bootstrap-icons/font/bootstrap-icons.css"
import sound from "../src/sound/music.mp3"


export const Start = () => {
const [randomnumber, setRandomnumber] = useState(0)
const [guess, setGuess] = useState("")
const [balance, setBalance] = useState(100)
const [stake, setStake] = useState(0)
const [score, setScore] = useState(0)
const [message, setMessage] = useState("")
const [amount, setAmount] = useState(5000)
const [withdrawAmount, setWithdrawAmount] = useState(0)
const [depositAmount, setDepositAmount]  = useState(0)
const [status, setStatus] = useState(<i class="bi bi-dice-3"></i>)
const [won, setWon] = useState(0)
const [lost, setLost] = useState(0)
const [audio, setAudio] = useState(null)

useEffect(() => {
    generateNumbers()
},[])




const Play = () => {
    const newAudio = new Audio(sound);
    newAudio.volume = 0.5;
    newAudio.play();
    setAudio(newAudio); 
    
};
const Stop = () => {
    if (audio) {
        audio.pause()
        audio.currentTime = 0
    }
};

const generateNumbers = () => {
    const number = Math.floor(Math.random() * 3) + 1;
    setRandomnumber(number)
    alert(randomnumber)
}



const Guessbutton = (event) => {
    event.preventDefault()

    const stakenumber = Number(stake)
   
    
    if(balance == 0){
        alert("Insufficient funds")
    }
    
    if (stakenumber < 0 < balance){
        if (guess == randomnumber){
            if(stakenumber > balance){
                setBalance(balance)
            } else{
                setBalance(balance + stakenumber * 1)
                setMessage("Won")
                setStatus(<i class="bi bi-trophy"></i>)
                setScore(score + 1)
                setWon(won + 1)
            }
        }
        else if(guess != randomnumber){
            if(stakenumber > balance){
                setBalance(balance)
                
            } else{
                setBalance(balance - stakenumber)
                setMessage("Lost")
            setLost(lost + 1)
                if(lost <= 10){
                setStatus(<i class="bi bi-emoji-surprise"></i>)
                }else if(lost > 10 && lost <= 20){
                    setStatus(<i class="bi bi-emoji-frown"></i>)
                }else{
                setStatus(<i class="bi bi-emoji-angry"></i>)
                }
            
        }
    } else if(stakenumber > 0 > balance){
        setBalance(balance)
    }
    generateNumbers()

}
}

const deposit = () => {
    if(depositAmount < 0 && depositAmount > amount){
        alert("Not enough funds, try again later")
    }else if(depositAmount <= amount && depositAmount > 0){
        setAmount(amount - depositAmount)
        setBalance(depositAmount * 1 + balance)
        alert(`Your Guess game has been credited with: $${depositAmount}`)
    }else{
        alert("Insufficient funds")
    }
    setDepositAmount("")
}

const withdraw = () => {
    if(withdrawAmount <= 0){
        alert("Enter a valid number")
    }else if(balance < withdrawAmount){
        alert("Balance too low")
    }else{
        setBalance(balance - withdrawAmount)
        setAmount(withdrawAmount * 1 + amount)
        alert("Successful.")
    }
    setWithdrawAmount("")
}




    return(
        <>
        <div className="music">
            <div>
                <button onClick={Play}><i class="bi bi-music-note-beamed"></i></button>
            </div>
            <div>
                <button onClick={Stop}><i class="bi bi-mic-mute"></i></button>
            </div>
        </div>
        <audio src={sound}></audio>
            <div className="game-container">
               <div className="game-sub-one">
                    <div className="fit">
                        <div className="adjust">
                        <div className="bank-balance">
                            <div className="balance">
                                <h1>Balance: ${balance}</h1>
                                </div>
                            <div><h1>Bank Amount: ${amount}</h1></div>
                        </div>
                        <div className="won-failed">
                            <div><p>Score: {score}</p></div>
                            <div><p>Games Won: {won}</p></div>
                            <div><p>Games lost: {lost}</p></div>
                        </div>
                        
                        <div className="status">
                        <div className="status-icon">
                        <h1>{status}</h1>
                        
                        </div>
                        <p>{message}</p>
                        </div>
                        
                        
                        <form onSubmit={Guessbutton}> 
                        <div className="input-field">
                            <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Guess number between 1-3"/>
                            <input type="number" value={stake} onChange={(e) => setStake(e.target.value)} placeholder="Stake amount" />
                            <button type="submit">Submit</button>
                        </div>
                        </form>
                        </div>
                        
                    </div>
               </div>
            </div>


            <div className="deposit-withdraw">
                <div>
                <input type="number" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} />
                <button className="deposit" onClick={deposit}>Deposit</button>
                </div>
               <div>
                <input type="number" value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} />
                <button className="withdraw" onClick={withdraw}>Withdraw</button>
               </div>
            </div>

        </>
    )
}