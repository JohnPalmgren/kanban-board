import classes from "./Column.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Card/Card";
import { Droppable } from "react-beautiful-dnd"

const Column = (props) => {
  const clickHandler = () => {
    props.displayModal();
    props.setColumnState(props.type);
  };

  const toDo = props.type === "toDo";
  const inProgress = props.type === "inProgress";

  return (
    <Droppable droppableId={props.type}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={
            toDo
              ? classes.columnOne
              : inProgress
              ? classes.columnTwo
              : classes.columnThree
          }
        >
          <h2 className={classes.heading}>
            {props.title}
            <button onClick={clickHandler} className={classes.button}>
              <FontAwesomeIcon
                icon={["fas", "plus"]}
                color={"white"}
                size={"lg"}
              />
            </button>
          </h2>

          <div className={classes.columnStyle}>
            {props.input.map((value, index) => {
              return (
                <Card
                  key={value.uid}
                  delete={props.delete}
                  id={value.uid}
                  content={value.userInput}
                  column={props.type}
                  index={index}
                />
              );
            })}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Column;
