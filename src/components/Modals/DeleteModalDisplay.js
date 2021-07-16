import Backdrop from "./Backdrop/Backdrop";
import DeleteModal from "./DeleteModal/DeleteModal";
import React from "react";
import reactDOM from "react-dom";


const DeleteModalDisplay = (props) => {
  return (
    <React.Fragment>
      {reactDOM.createPortal(
        <Backdrop hideModal={props.hideModal} />,
        document.getElementById("backdrop")
      )}
      {reactDOM.createPortal(
        <DeleteModal
          item={props.item}
          hideModal={props.hideModal}
          delete={props.delete}
        />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default DeleteModalDisplay;
