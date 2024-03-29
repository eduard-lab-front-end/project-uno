import style from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { todoImportant } from '../../../../../../storage/content/actionsCreactor.js';


function TodoImportant({todoId}) {
  const dispatch = useDispatch();

  const selectedListId = useSelector(
    state => state.interface.listId)
  

  function importantClick(e) {
    e.stopPropagation();
    dispatch(todoImportant(selectedListId,todoId))
  }

  const important = useSelector(
    state => 
      state.lists
        .content.find( list =>  list.id === selectedListId)
        ?.todos.find( todoItem => todoId === todoItem.id)?.important
  )

  return(
    <span 
      className={style.todoImportant}
      onClick={importantClick}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" 
        fill='none'
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M11.6886 9L10 3.4407L8.31136 9H3.12293L7.34894 12.0156L5.70765 17.3166L9.99951 14.0543L14.3036 17.3206L12.6612 12.0162L16.8812 9H11.6886ZM20 8L13.83 12.41L16.18 20L10 15.31L3.83 20L6.18 12.41L0 8H7.57L10 0L12.43 8H20Z" 
          className={
            important ? style.isImportant : style.notImportant
          } 
          fillOpacity="0.38"
        />
      </svg>
    </span>
  )
}

export default TodoImportant;