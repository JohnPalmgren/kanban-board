import classes from "./Heading.module.css";
import logo from "../../images/logo.png"

const Heading = () => {
    return <div className={classes.wrapper}>
        <h1 className={classes.heading}>Kanban Ninja</h1>
        <img src={logo} alt="logo" className={classes.logo} />
    </div>
};

export default Heading