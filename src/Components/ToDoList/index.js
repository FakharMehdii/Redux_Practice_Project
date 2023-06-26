import { InputField } from "../InputField"
import { ToDoTask } from "../ToDoTask"
import {useSelector} from "react-redux"

export function ToDoList ()
{
  const tasks = useSelector(state => state.list.tasks)
  
  console.log('tasks in list', tasks)

  
debugger
    return(

        <div className='toDoList'>
            <h2 className='heading'>
              My Todo        </h2>
            <InputField />
            <hr></hr>

            {tasks.map((element, index,) => (
              <ToDoTask element={element} index={index} key={index}/>
            ))}

                       
            </div>
    );
}
