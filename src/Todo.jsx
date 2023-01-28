import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row : `flex`,
    text : `ml-2 cursor-pointer`,
    textComplete : `ml-2 cursor-pointer line-through`,
    button : `cursor-pointer flex item-center`
}

const Todo = ({todo}) => {
    return (
        <>
            <li className={style.li}>
                <div className={style.row}>
                    <input type="checkbox" />
                    <p className={style.text}>{todo}</p>
                </div>
                <button>{<DeleteIcon />}</button>
            </li>
        </>
    )
}

export default Todo