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
  const [deleteData, setDeleteData] = useState()
  const [deleteItem, setDeleteItem] = useState()

  const [toDo, setToDo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const columnStateHandler = (column) => setCurrentColumn(column);

  const userInputHandler = (value) => {
    if(!value.userInput) {return} // could add style or error message here
    if (currentColumn === "toDo") {
      setToDo((currentList) => [value, ...currentList]);
    } else if (currentColumn === "inProgress") {
      setInProgress((currentList) => [value, ...currentList]);
    } else {
      setDone((currentList) => [value, ...currentList]);
    }
    hideModal()
  };

  const deleteItemName = (data) => {
    if (data[1] === "done") {
      done.forEach(item => {
        if (item.uid === data[0]) {
          setDeleteItem(`"${item.userInput}"`)
          return;
        }
      })
    } else if (data[1] === "inProgress") {      
      inProgress.forEach((item) => {
      if (item.uid === data[0]) {
        setDeleteItem(`"${item.userInput}"`);
        return;
      }})
    } else if (data[1] === "toDo") {
      toDo.forEach(item => {
        if(item.uid === data[0]) {
          setDeleteItem(`"${item.userInput}"`);
          return;
        }
      })
    }
  }

  const deleteLogic = () => {
    if (deleteData[1] === "done") {
      setDone((prevItems) => {
        const updatedItems = prevItems.filter(
          (item) => item.uid !== deleteData[0]);
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
    removeDelete()
  };

  const displayDelete = data => {
    setDeleteData(data)
    deleteItemName(data)
    setDelModalVisibility(true);
  };
  const removeDelete = () => {
    setDelModalVisibility(false);
  };

  const onDragEnd = (result) => {
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
