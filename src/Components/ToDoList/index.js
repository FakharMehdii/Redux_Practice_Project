import { InputField } from "../InputField"
import { ToDoTask } from "../ToDoTask"

export function ToDoList ()
{
    return(
        <div className='area'>
            <h2 className='heading'>
              My Todo        </h2>
            <InputField />
            <hr></hr>                
              <ToDoTask />
            </div>
    );
}
