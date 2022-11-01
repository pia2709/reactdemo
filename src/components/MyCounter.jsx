import { useState } from "react";


const MyCounter=(props)=>{

    const [countState, setCountState]=useState(0)
    function incCount(){
        setCountState(countState+props.incBy)  
    }


    function decCount(){
        setCountState(countState-props.decBy)  
    }
    return (
        <div>
            <div>{countState}</div>
            <button onClick={incCount}>+{props.incBy}</button>
            <button onClick={decCount}>-{props.decBy}</button>
        </div>
    )
}

export default MyCounter