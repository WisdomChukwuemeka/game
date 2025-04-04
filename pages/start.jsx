import { useState, useEffect } from "react"
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
const [status, setStatus] = useState("")
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
   
    
    if (balance == 0){
        alert("Insufficient funds")
        return
    }
    if (guess == parseFloat){
        alert("You have inputed a float number.")
    }
    if (guess == randomnumber){
        setScore(score + 1)
        setWon(won + 1)
        setBalance(balance + stakenumber * 1)
        setMessage("Won")
        setStatus(<i class="bi bi-trophy"></i>)

    }
    else if(guess != randomnumber){
        setBalance(balance - stakenumber)
        setMessage("Lost")
        setLost(lost + 1)
        setStatus(<i class="bi bi-sign-stop"></i>)
    }
    generateNumbers()

}

const deposit = () => {
    if (balance == 0){
      setAmount(amount - depositAmount)
      setBalance(depositAmount * 1 + balance)
      alert(`Your Guess game has been credited with: $${depositAmount}`)
    }
    setDepositAmount("")
}

const withdraw = () => {
    if (balance > 0){
        setBalance(balance - withdrawAmount)
        setAmount(withdrawAmount * 1 + amount)
        alert("Successful.")
    }
    else{
        alert("Your balance is too low.")
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
                        <h1>{status}</h1>
                        <p>{message}</p>
                        </div>
                        
                        
                        <form onSubmit={Guessbutton}> 
                        <div className="input-field">
                            <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Guess number"/>
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