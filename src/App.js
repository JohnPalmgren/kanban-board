import Columns from "./components/Columns/Columns";
import Heading from "./components/Heading/Heading"
import ModalDisplay from "./components/Modals/ModalDisplay";
import DeleteModalDisplay from "./components/Modals/DeleteModalDisplay";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";


library.add(fas);

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [delModalVisibility, setDelModalVisibility] = useState(false);

  const displayModal = () => {
    setModalVisibility(true);
  };
  const hideModal = () => {
    setModalVisibility(false);
  };

  const [currentColumn, setCurrentColumn] = useState("toDo");
  const [deleteData, setDeleteData] = useState();
  const [deleteItem, setDeleteItem] = useState();

  const [toDo, setToDo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const columnStateHandler = (column) => setCurrentColumn(column);

  /**
   * Add user input into column where the add button was clicked
   * @param {object} value  object containing user input and unique ID
   */
  const userInputHandler = (value) => {
    if (!value.userInput) {
      return;
    } // could add style or error message here
    if (currentColumn === "toDo") {
      setToDo((currentList) => [value, ...currentList]);
    } else if (currentColumn === "inProgress") {
      setInProgress((currentList) => [value, ...currentList]);
    } else {
      setDone((currentList) => [value, ...currentList]);
    }
    hideModal();
  };

  /**
   * Update state with the name of the item that has been triggered by delete button.
   * @param {array} data array where item 0 corresponds to the
   * item UID and item 1 corresponds to the items column position.
   */
  const deleteItemName = (data) => {
    if (data[1] === "done") {
      done.forEach((item) => {
        if (item.uid === data[0]) {
          setDeleteItem(`"${item.userInput}"`);
          return;
        }
      });
    } else if (data[1] === "inProgress") {
      inProgress.forEach((item) => {
        if (item.uid === data[0]) {
          setDeleteItem(`"${item.userInput}"`);
          return;
        }
      });
    } else if (data[1] === "toDo") {
      toDo.forEach((item) => {
        if (item.uid === data[0]) {
          setDeleteItem(`"${item.userInput}"`);
          return;
        }
      });
    }
  };

  /**
   * Update state to remove item where delete has been confirmed
   */
  const deleteLogic = () => {
    if (deleteData[1] === "done") {
      setDone((prevItems) => {
        const updatedItems = prevItems.filter(
          (item) => item.uid !== deleteData[0]
        );
        return updatedItems;
      });
    } else if (deleteData[1] === "inProgress") {
      setInProgress((prevItems) => {
        const updatedItems = prevItems.filter(
          (item) => item.uid !== deleteData[0]
        );
        return updatedItems;
      });
    } else if (deleteData[1] === "toDo") {
      setToDo((prevItems) => {
        const updatedItems = prevItems.filter(
          (item) => item.uid !== deleteData[0]
        );
        return updatedItems;
      });
    }
    removeDelete();
  };

  /**
   * Display modal to delete object and store item information in a state
   * @param {array} data array where item 0 corresponds to the
   * item UID and item 1 corresponds to the items column position.
   */
  const displayDelete = (data) => {
    setDeleteData(data);
    deleteItemName(data);
    setDelModalVisibility(true);
  };

  /**
   * hide the delete modal
   */
  const removeDelete = () => {
    setDelModalVisibility(false);
  };

  /**
   * Display item in the correct column at the end of a drag event. Remove
   * the item from the column it was being dragged from and create the item
   * in the column it is dropped into or re-order the items in the column
   * if it's dropped in it's original column
   * @param {object} result object with information on item's UID, drag column,
   * drop column and index in each column.
   */
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = source.droppableId;
    const destinationColumn = destination.droppableId;

    let beingDragged;

    // remove item from column when dragged


    if (sourceColumn === "toDo") {
   
      const dragObj = toDo.filter((item) => item.uid === draggableId);
      beingDragged = dragObj[0];

      if (sourceColumn === destinationColumn) {
        setToDo((prevItems) => {
          const newItems = prevItems.splice(source.index, 1);
          return newItems;
        });
      } else {
        setToDo((prevItems) => {
          const updatedItems = prevItems.filter(
            (item) => item.uid !== draggableId
          );
          return updatedItems;
        });
      }
    }

    if (sourceColumn === "inProgress") {
      const dragObj = inProgress.filter((item) => item.uid === draggableId);
      beingDragged = dragObj[0];

      if (sourceColumn === destinationColumn) {
        setInProgress((prevItems) => {
          const newItems = prevItems.splice(source.index, 1);
          return newItems;
        });
      } else {
        setInProgress((prevItems) => {
          const updatedItems = prevItems.filter(
            (item) => item.uid !== draggableId
          );
          return updatedItems;
        });
      }
    }

    if (sourceColumn === "done") {
      const dragObj = done.filter((item) => item.uid === draggableId);
      beingDragged = dragObj[0];


      if (sourceColumn === destinationColumn) {
        setDone((prevItems) => {
          const newItems = prevItems.splice(source.index, 1);
          return newItems;
        });
      } else {
        setDone((prevItems) => {
          const updatedItems = prevItems.filter(
            (item) => item.uid !== draggableId
          );
          return updatedItems;
        });
      }
    }

    if (destinationColumn === "toDo") {
      const newItems = [...toDo];
      newItems.splice(destination.index, 0, beingDragged);
      setToDo(newItems);
    }

    if (destinationColumn === "inProgress") {
      const newItems = [...inProgress];
      newItems.splice(destination.index, 0, beingDragged);
      setInProgress(newItems);
    }

    if (destinationColumn === "done") {
      const newItems = [...done];
      newItems.splice(destination.index, 0, beingDragged);
      setDone(newItems);
    }
  };

  return (
    <div>
      <Heading />
      {modalVisibility ? (
        <ModalDisplay userInput={userInputHandler} hideModal={hideModal} />
      ) : (
        <div></div>
      )}
      {delModalVisibility ? (
        <DeleteModalDisplay
          item={deleteItem}
          hideModal={removeDelete}
          delete={deleteLogic}
        />
      ) : (
        <div></div>
      )}
      <DragDropContext onDragEnd={onDragEnd}>
        <Columns
          setColumnState={columnStateHandler}
          displayModal={displayModal}
          toDo={toDo}
          inProgress={inProgress}
          done={done}
          delete={displayDelete}
        />
      </DragDropContext>
    </div>
  );
}

export default App;
