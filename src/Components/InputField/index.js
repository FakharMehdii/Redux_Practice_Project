import { addTodo } from '../../store/actions';
import { useDispatch } from 'react-redux'

export const InputField = () => {
  const dispatch = useDispatch()
  
  const handleKeyDown=(event)=>{
    if(event.key === 'Enter' && event.target.value !== "")
    {
      dispatch(addTodo(event.target.value));
      event.target.value='';

    }
  };

  return(
    <input 
    type='text'
    className='input'
    placeholder='Input task name and then tab enter to add'
    onKeyDown={handleKeyDown}
    autoFocus
  />
  );
}