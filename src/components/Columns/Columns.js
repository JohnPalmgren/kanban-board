import Column from "./Column"
import classes from "./Columns.module.css"
import { DragDropContext } from "react-beautiful-dnd"


const Columns = props => {

  const onDragEnd = result => {
    //reorder the column
  }

  return (
    <div className={classes.columnsStyles}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Column
          setColumnState={props.setColumnState}
          displayModal={props.displayModal}
          input={props.toDo}
          title="To Do"
          type="toDo"
          delete={props.delete}
        />

        <Column
          setColumnState={props.setColumnState}
          displayModal={props.displayModal}
          input={props.inProgress}
          title="In Progress"
          type="inProgress"
          delete={props.delete}
        />

        <Column
          input={props.done}
          title="Done"
          type="done"
          delete={props.delete}
        />
      </DragDropContext>
    </div>
  );
};

export default Columns;