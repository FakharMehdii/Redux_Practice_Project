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

  let divToBeDisplayed ;

  if(edit)
    divToBeDisplayed = <div>  <input   className="checkbox" type='text' value={inputValue ?  inputValue : element} onChange={handleEditChange} onKeyDown={handleEditKeyPress} autoFocus /></div>;
  else
    divToBeDisplayed = <div> <input    type='checkbox' onChange={(event) => {event.target.checked ? setDone(true) : setDone(false)}} /> <span className= {done? 'strike':'normal'} >{inputValue===''? element : inputValue}</span> </div>;

  return(
    <div className='todoTask'>
    {divToBeDisplayed}   
      <div>
        <i id='edit'  className='fa fa-edit edit' onClick={() => handleEdit(index)}></i>
        <i id='delete' className="fa-solid fa-trash-can" onClick={ () => {dispatch(removeTodo(index))} }></i>
      </div>    
  </div>
    );
  }
