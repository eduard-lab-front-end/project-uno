import { useDispatch, useSelector } from 'react-redux';
import ListBox from './ListBox/index'


import style from './style.module.css'


function Lists () {

   
    const lists = useSelector(state => state.lists.content);



   
    return (
        <div className={style.listsContainer} >
            {
            lists.map(list => {
                return <ListBox key={list.id} listId={list.id} listHeader={list.header}/>
            }
                
            )}
        </div>
    )
}

export default Lists;