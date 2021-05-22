import classes from "../UI/Modal.module.css"

const DeleteModal = props => {

    const noClick = () => props.hideModal()
    const yesClick = () => props.delete()

    return <div className={classes.wrapper}>
        <h2 className={classes.heading}>Are you sure you want to delete {props.item}</h2>
        <div className={classes.buttonWrapper}>
            <button type={"button"} onClick={yesClick}>Yes</button>
            <button type={"button"} onClick={noClick}>No</button>
        </div>
    </div>
}

export default DeleteModal