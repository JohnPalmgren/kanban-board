import classes from "../UI/Modal.module.css"
import { useState } from "react"
const Modal = props => {

  const [userInput, setUserInput] = useState()

  const clickHandler = () => props.hideModal();

  const setInput = event => setUserInput(event.target.value)

  const getUserInput = event => {
    event.preventDefault();
    props.userInput({userInput:userInput, uid:Date.now()})
  }

    return (
      <div className={classes.wrapper}>
        <form onSubmit={getUserInput}>
          <h1 className={classes.heading}>Add a task</h1>
          <input onChange={setInput} type={"text"} className={classes.input}></input>
          <div className={classes.buttonWrapper}>
            <button type={"submit"}>Add</button>
            <button onClick={clickHandler} type={"button"}>Cancel</button>
          </div>
        </form>
      </div>
    );
}

export default Modal;