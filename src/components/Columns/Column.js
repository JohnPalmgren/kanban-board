import classes from "./Column.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Card/Card";
// import { faMicrophoneAltSlash } from "@fortawesome/free-solid-svg-icons";

const Column = (props) => {
  const clickHandler = () => {
    props.displayModal();
    props.setColumnState(props.type);
  };

  const toDo = props.type === "toDo"
  const inProgress = props.type === "inProgress"

  return (
    <div className={ toDo ? classes.columnOne : inProgress ? classes.columnTwo : classes.columnThree}>
      <h2 className={classes.heading}>
        {props.title}
        <button onClick={clickHandler} className={classes.button}>
          <FontAwesomeIcon icon={["fas", "plus"]} color={"white"} size={"lg"} />
        </button>
      </h2>
      <ul className={classes.columnStyle}>
        {props.input.map((value) => (
          <Card
            delete={props.delete}
            id={value.uid}
            content={value.userInput}
            key={value.uid}
            column={props.type}
          />
        ))}
      </ul>
    </div>
  );
};

export default Column;
