import { useContext } from 'react'
import './style.css'
import { ThemeContext } from '../context/context'

const TodoList = ({ items, deleteItem, editItem }) => {
    // DARKMODE
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    return(
        <>
            {items.map((item) => (
                <article className="article" key={item.id}>
                    <div className="article-container" style={{background: darkMode ? "rgb(221, 213, 213)" : "rgb(53, 50, 50)"}}>
                        <div className="first">
                            <p className="" style={{color: darkMode ? "#000" :"#fff"}}>{item.title}</p>
                        </div>
                        <div className="second">
                            <button onClick={() => editItem(item.id)}>Edit</button>
                            <button className="deleteItem" onClick={() => deleteItem(item.id)}>Delete</button>
                        </div>
                    </div>
                </article>
            ))}
        </>
    )
}

export default TodoList