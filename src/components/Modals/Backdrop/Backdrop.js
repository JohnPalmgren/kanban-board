import classes from "./Backdrop.module.css"

const Backdrop = props => {

    const clickHandler = () => props.hideModal();

    return <div onClick={clickHandler} className={classes.backdrop}></div>
}

export default Backdrop;