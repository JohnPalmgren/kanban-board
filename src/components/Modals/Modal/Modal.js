import classes from "../UI/Modal.module.css"
import { useState, useRef } from "react"
const Modal = props => {


  const userInputs = useRef()

  const clickHandler = () => props.hideModal();

  const getUserInput = event => {
    event.preventDefault();
    props.userInput({userInput:userInputs.current.value, uid:Date.now().toString()})
  }

    return (
      <div className={classes.wrapper}>
        <form onSubmit={getUserInput}>
          <h1 className={classes.heading}>Add a task</h1>
          <input
            type={"text"}
            className={classes.input}
            autoFocus
            ref={userInputs}
          ></input>
          <div className={classes.buttonWrapper}>
            <button type={"submit"}>Add</button>
            <button onClick={clickHandler} type={"button"}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
}

export default Modal;