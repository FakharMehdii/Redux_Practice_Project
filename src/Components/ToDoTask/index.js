import { useDispatch, useSelector } from "react-redux";
import {useState} from "react"
import { removeTodo } from "../../store/actions";
import { editTodo } from "../../store/actions";


export function ToDoTask ({element, index}) {
  debugger
  console.log("element:", element)
  console.log("index:", index)
  const dispatch=useDispatch()
  const [done, setDone] = useState(false)
  const [edit, setEdit] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [indexToBeEdited, setIndexToBeEdited] = useState();


  

  function strike(event)
  {
    if(event.target.checked)
      setDone(true);
    else
      setDone(false);  
  }

  function handleDelete(index)
  {
    dispatch(removeTodo(index));

  }

  function handleEdit(index)
  {
    setIndexToBeEdited(index);
    setEdit(true);
  }

  function handleEditChange(event) {
    element= event.target.value
    setInputValue(event.target.value);

}

function handleEditKeyPress(event){

  if(event.key === 'Enter' && inputValue!=="")
  {
    setEdit(false);
    dispatch(editTodo(indexToBeEdited, inputValue));
  }


}

  let divToBeDisplayed;

  if(edit)
    divToBeDisplayed = <div>  <input   className="checkbox" type='text' value={inputValue ? inputValue : element} onChange={handleEditChange} onKeyDown={handleEditKeyPress} autoFocus /></div>;
  else
    divToBeDisplayed = <div> <input    type='checkbox' onChange={strike} /> <span className= {done? 'strike':'normal'} >{element===inputValue? inputValue:element}</span> </div>;




  return(
    <div className='todoTask'>

{divToBeDisplayed}

      

      <div>
        <i id='edit'  className='fa fa-edit edit' onClick={() => handleEdit(index)}></i>
        <i id='del' className="fa-solid fa-trash-can" onClick={() =>handleDelete(index)}></i>
      </div>    
  </div>
    );
  }
  