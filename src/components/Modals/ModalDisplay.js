import Backdrop from "./Backdrop/Backdrop"
import Modal from "./Modal/Modal"
import React from "react"
import reactDOM from "react-dom";


const ModalDisplay = props => {

    return (
      <React.Fragment>
        {reactDOM.createPortal(
          <Backdrop hideModal={props.hideModal} />,
          document.getElementById("backdrop")
        )}
        {reactDOM.createPortal(
          <Modal userInput={props.userInput} hideModal={props.hideModal} />,
          document.getElementById("overlay")
        )}
      </React.Fragment>
    );
}

export default ModalDisplay