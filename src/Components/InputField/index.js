import { useSelector, useDispatch } from 'react-redux'

export function InputField ()
{
  const dispatch = useDispatch()
  return(
    <input 
    type='text'
    className='input'
    placeholder='Input task name and then tab enter to add'
    onChange={() => dispatch(changeValue())}
    onKeyDown={()=> dispatch(addTodo())}
    autoFocus
  />
  );
}