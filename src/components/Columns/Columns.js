import Column from "./Column"
import classes from "./Columns.module.css"


const Columns = props => {


  return (
    <div className={classes.columnsStyles}>
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
        setColumnState={props.setColumnState}
        displayModal={props.displayModal}
        input={props.done}
        title="Done"
        type="done"
        delete={props.delete}
      />
    </div>
  );
};

export default Columns;