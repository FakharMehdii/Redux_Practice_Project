import { useDispatch } from "react-redux";

export function ToDoTask () {
  const dispatch=useDispatch()
  return(
    <div className='todoTask'>
      <div>
        <input   className="checkbox" type='checkbox'  onClick={() => dispatch(strikeThrough())} /> 
        <span className= 'normal'>task</span> 
      </div>               
      <div>
        <i id='edit'  className='fa fa-edit edit' onClick={() => dispatch(editTask())}></i>
        <i id='del' className="fa-solid fa-trash-can" onClick={() => dispatch(deleteTask())}></i>
      </div>    
  </div>
    );
  }
  