import { ToDoTask } from "../ToDoTask"
import {useSelector} from "react-redux"
import { InputField } from "../InputField"


export const ToDoList = () => {
  const tasks = useSelector(state => state.list.tasks)
    return(

      <div className='toDoList'>
          <h2 className='heading'>My Todo</h2>
          <InputField />
          <hr></hr>
          {tasks.map((element, index,) => <ToDoTask element={element} index={index} /> ) }                      
      </div>
    );
}
