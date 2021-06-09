import classes from "./Card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Draggable } from "react-beautiful-dnd"


const Card = props => {

  const clickHandler = () => {
    props.delete([props.id, props.column])
  }

    return (
      <Draggable draggableId={props.id} index={props.index}>
        {(provided) => (
          <div
            className={classes.card}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className={classes.listStyles}>
              {props.content}
              <FontAwesomeIcon
                onClick={clickHandler}
                icon={["fas", "trash"]}
                className={classes.delete}
              />
            </div>
          </div>
        )}
      </Draggable>
    );
};

export default Card