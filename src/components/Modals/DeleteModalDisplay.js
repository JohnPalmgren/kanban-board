import Backdrop from "./Backdrop/Backdrop";
import DeleteModal from "./DeleteModal/DeleteModal";

const DeleteModalDisplay = (props) => {
  return (
    <div>
      <Backdrop hideModal={props.hideModal} />
      <DeleteModal item={props.item} hideModal={props.hideModal} delete={props.delete}/>
    </div>
  );
};

export default DeleteModalDisplay;
