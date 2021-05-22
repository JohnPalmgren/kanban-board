import classes from "./Card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = props => {

  const clickHandler = () => {
    props.delete([props.id, props.column])
  }

    return (
      <div className={classes.card}>
        <li className={classes.listStyles}>
          {props.content}
          <FontAwesomeIcon onClick={clickHandler} icon={["fas", "trash"]} className={classes.delete} />
        </li>
      </div>
    );
};

export default Card