import Backdrop from "./Backdrop/Backdrop"
import Modal from "./Modal/Modal"

const ModalDisplay = props => {


    return  <div>
        <Backdrop hideModal={props.hideModal} />
        <Modal userInput={props.userInput} hideModal={props.hideModal} />
    </div>
}

export default ModalDisplay