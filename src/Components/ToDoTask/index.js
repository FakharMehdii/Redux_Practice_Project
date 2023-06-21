export function ToDoTask () {
  return(
    <div className='todoTask'>
      <div>
        <input   className="checkbox" type='checkbox'  /> 
        <span className= 'normal'>task</span> 
      </div>               
      <div>
        <i id='edit'  className='fa fa-edit edit'></i>
        <i id='del' className="fa-solid fa-trash-can"></i>
      </div>    
  </div>
    );
  }
  