import { useState, useEffect, useRef } from "react"
import "bootstrap-icons/font/bootstrap-icons.css"

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

useEffect(() => {
    generateNumbers()
},[])

const generateNumbers = () => {
    const number = Math.floor(Math.random() * 3) + 1;
    setRandomnumber(number)
    alert(randomnumber)
}



const Guessbutton = (event) => {
    event.preventDefault()

    const stakenumber = Number(stake)
   
    
    if (stakenumber == 0 < stakenumber){
        if(balance == 0){
            alert("Insufficient funds")
            return
        }
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
            setStatus(<i class="bi bi-emoji-frown"></i>)
            }
            
        }
    }
    else if(stakenumber > 0 > balance){
        setBalance(balance)
    }
    
    
    generateNumbers()

}

const deposit = () => {
    if(depositAmount > amount){
        alert("Insufficient fund")
    }
    else{
        if (balance == 0){
            setAmount(amount - depositAmount)
        setBalance(depositAmount * 1 + balance)
        alert(`Your Guess game has been credited with: $${depositAmount}`)
        } 
    }
    setDepositAmount("")
}

const withdraw = () => {
    if(withdrawAmount > balance){
        alert("Amount higher than your lugame balance")
    }else{
        setBalance(balance - withdrawAmount)
        setAmount(withdrawAmount * 1 + amount)
        alert("Successful.")
    }
    setWithdrawAmount("")
}




    return(
        <>
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