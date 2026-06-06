import styles from "./TicTacToe.module.css"
import { useState } from "react"



export const TicTacToe = () => {
    const [turn,setTurn]=useState(0)//0 is X 1 is O
    const [text,setText]=useState([
        {fill:" ",id : 0,filled:false},
        {fill:" ",id : 1,filled:false},
        {fill:" ",id : 2,filled:false},
        {fill:" ",id : 3,filled:false},
        {fill:" ",id : 4,filled:false},
        {fill:" ",id : 5,filled:false},
        {fill:" ",id : 6,filled:false},
        {fill:" ",id : 7,filled:false},
        {fill:" ",id : 8,filled:false}
    ])
    const [scores,setScores] = useState([{id:"X" ,score:0},{id:"O" ,score:0},{id:"Draw", score:0}])
    const [winningElements,setWinningElements] =  useState([-1,-1,-1])
    const [flag,setFlag]=useState(0)
    const [status,setStatus]=useState("Playing")
    const [currTurn,setCurrTurn]=useState("X")
    const [counter,setCounter] = useState(0)
    const [showConfirm,setShowConfirm] = useState(false)
    const checkWinner = (newText,newTurn,newCounter) =>{
        const check = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for(let i=0;i<check.length;i++){
            const curr=check[i]
            // console.log("first if",newText[curr[0]].fill,curr[1])
            if(newText[curr[0]].fill===newText[curr[1]].fill&&newText[curr[0]].fill!==" "){
                // console.log("first if",curr[0],curr[1])
                if(newText[curr[1]].fill===newText[curr[2]].fill){
                    //winner is curr[0]
                    setWinningElements([curr[0],curr[1],curr[2]])
                    console.log("Won")
                    setFlag(1)
                    if(newTurn%2===1){
                        setStatus("X")
                        setScores( prevScores=>
                            prevScores.map((curr)=>{
                                if(curr.id==="X"){
                                    const num=curr.score+1
                                    return {...curr,score:num}
                                }return curr
                            })
                        )
                        return 1
                    }
                    else{

                        setStatus("O")
                        setScores( prevScores=>
                            prevScores.map((curr)=>{
                                if(curr.id==="O"){
                                    const num=curr.score+1
                                    return {...curr,score:num}
                                }return curr
                            })
                        )
                        return 1
                    }
                }
            }
        }
        if(newCounter===9){
            setStatus("Draw")
            setScores( prevScores=>
                            prevScores.map((curr)=>{
                                if(curr.id==="Draw"){
                                    const num=curr.score+1
                                    return {...curr,score:num}
                                }return curr
                            })
                        )
            return 1
        }
    }
    
    const handleClick = (id) => {
        if (text[id].fill !== " " || status !== "Playing") return
        const need = (turn%2===0)? "X" : "O"
            setText(
                text.map((tex)=>{
                if(tex.id === id){
                    return {...tex,fill:need,filled:true}
                }
                return tex
            }))
            setTurn(turn+1)
            setCounter(counter+1)
        {(turn%2==1) ? setCurrTurn("X") : setCurrTurn("O")}
        const newTurn = turn+1
        const newCounter=counter+1
        const newText = text.map((tex)=>{
            if(tex.id === id){
                    // console.log("Elemnt is",id)
                    return {...tex,fill:need}
                }
                return tex
        })
        console.log("",newText[5].fill)
        checkWinner(newText,newTurn,newCounter)
    }

    //fn for restart button
    const handleRestart = ()=> {
            setText(
                text.map((tex)=>{
                    // console.log("Elemnt is",id)
                    const need = (turn%2===1)? "X" : "O"
                    return {...tex,fill:" ",filled:false}
                

            }))
        setWinningElements([-1,-1,-1])
        setStatus("Playing")
        setCounter(0)
        setTurn(0)
        setCurrTurn("X")
        setScores(prevScores=> 
            prevScores.map((sco)=>{
                return { ...sco,score:0}
            })
        )

    }
    const Restart = () => {
        return (
        <button className={styles.restartButton} onClick={()=>setShowConfirm(true)} >Restart</button>
        )
    }

    //fn for playagain
    const handlePlayAgain = ()=> {
            setText(
                text.map((tex)=>{
                    // console.log("Elemnt is",id)
                    const need = (turn%2===1)? "X" : "O"
                    return {...tex,fill:" ",filled:false}
                

            }))
        setWinningElements([-1,-1,-1])
        setStatus("Playing")
        setCounter(0)
    }
    
    const PlayAgain = () => {
        return (
        <button className={styles.restartButton} onClick={handlePlayAgain} >Play Again</button>
        )
    }
    

    const ToReturn = () => {
        if(status==="Draw"){
            return(
           <h1 className={`${styles.turn} `}>Draw</h1>
            )
        }
        else if(status==="X"){
            return(
            <h1 className={`${styles.turn} `}>Player X Wins!</h1>
            )
        }
        else if(status==="O"){
            return(
            <h1 className={`${styles.turn} `}>Player O Wins!</h1>
            )
        }
    }
    const ButtonFn = ({id}) => {
        return(
            <button id = {id} className={`${text[id].filled? styles.square_filled: status==="Playing" ? styles.square : styles.square_filled}  ${winningElements.includes(id) ? styles.wonElemnet : ""} ${text[id].fill==="X" ? styles.x : styles.o}`} onClick={()=>handleClick(id)}>{text[id].fill}</button>
        )
    }

        console.log("",scores[0].score)
        return(
            
            <div className={`${styles.outer}  `}>
            {/* {checkWinner()} */}
                <div className={styles.title}>
                    <span className={`${styles.titleX}`}>X</span>
                    {" vs "}
                    <span className={`${styles.titleO}`}>O</span>

                </div>
                
                <div className={styles.scores}>
                    <span className={`${styles.scorescol}`}> <span className={`${styles.scoreX} ${styles.scorescol}`}>{scores[0].score}</span> <span>Player X</span></span>
                    <span className={`${styles.scorescol}`}> <span className={`${styles.scoreD} ${styles.scorescol}`}>{scores[2].score}</span> <span>Draws</span></span>
                    <span className={`${styles.scorescol}`}> <span className={`${styles.scoreO} ${styles.scorescol}`}>{scores[1].score}</span> <span>Player O</span> </span>
                </div>
                

                {
                    (status==="Playing")?
                    <div className={`${styles.turn} `}>
                        <span className={`${styles.turn} `}>Turn - <span className={`${currTurn==="X" ? styles.x : styles.o}`}>{currTurn}</span></span>
                    </div> :
                    <div className={`${status==="X" ? styles.x : (status==="O" ? styles.o : styles.draw)} `}><ToReturn /></div>
                }

                <div className={styles.gridWrapper}>
                    <div className={`${styles.grid} ${showConfirm ? styles.blur : ""}`}>
                        <div className={styles.three}><ButtonFn id={0} /><ButtonFn id={1} /><ButtonFn id={2} /></div>
                        <div className={styles.three}><ButtonFn id={3} /><ButtonFn id={4} /><ButtonFn id={5} /></div>
                        <div className={styles.three}><ButtonFn id={6} /><ButtonFn id={7} /><ButtonFn id={8} /></div>
                    </div>
                    {showConfirm ? (
                        <div className={styles.confirm}>
                            <h2>Are you sure you want to restart?</h2>
                            <div className={styles.yesno}>
                                <button className={`${styles.yesnob}`} onClick={() => { handleRestart(); setShowConfirm(false); }}>Yes</button>
                                <button className={`${styles.yesnob}`} onClick={() => setShowConfirm(false)}>No</button>
                            </div>
                        </div>
                    ):""}
                </div>




                <div className={`${styles.bottombtns} ${showConfirm? styles.bottomOnConfirm:""}`}>
                    <div className={styles.restart}><PlayAgain /></div>
                    <div className={styles.restart}><Restart /></div>
                </div>
            </div>
        )
    // }

}
    