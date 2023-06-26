import {useState} from "react"
import { useDispatch } from "react-redux";
import { editTodo } from "../../store/actions";
import { removeTodo } from "../../store/actions";

export function ToDoTask ({element, index}) { 
  const dispatch=useDispatch()
  const [done, setDone] = useState(false)
  const [edit, setEdit] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [indexToBeEdited, setIndexToBeEdited] = useState();  
  
  const handleEdit = (index) => {
    setIndexToBeEdited(index);
    setEdit(true);
  }

  const handleEditChange = (event)  => {
    element= event.target.value
    setInputValue(event.target.value);
  }

  const handleEditKeyPress = (event)  => {
    if(event.key === 'Enter' && inputValue!=="")
    {
      setEdit(false);
      dispatch(editTodo(indexToBeEdited, inputValue));
    }
  }
  return(
    <div className='todoTask'>
      {
          edit ? <div>  <input   className="checkbox" type='text' value={inputValue ?  inputValue : element} onChange={handleEditChange} onKeyDown={handleEditKeyPress} autoFocus /></div>  
          : <div> <input    type='checkbox' onChange={(event) => {event.target.checked ? setDone(true) : setDone(false)}} /> <span className= {done? 'strike':'normal'} >{inputValue===''? element : inputValue}</span> </div> 
      }
      <div>
        <i id='edit'   className='fa fa-edit edit buttons' onClick={() => handleEdit(index)}></i>
        <i id='delete'  className='fa-solid fa-trash-can buttons' onClick={ () => {dispatch(removeTodo(index))} }></i>
      </div>    
  </div>
    );
  }
