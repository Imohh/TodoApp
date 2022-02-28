import { useState, useEffect, useContext } from 'react'
import TodoList from './TodoList'
import Alert from './Alert'
import './style.css'
import Toggle from './Toggle'
import { ThemeContext } from '../context/context'

const getLocalStorage = () => {
    let list = localStorage.getItem('list')
    if(list) {
        return JSON.parse(localStorage.getItem('list'))
    } else {
        return []
    }
}

const TodoForm = () => {

    // DARKMODE
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode



    //USESTATE FOR INPUTING NAME
    const [name, setName] = useState('')
    // USESTATE FOR DISPLAYING THE NAMES
    const [list, setList] = useState(getLocalStorage())
    // USESTATE FOR EDITING NAMES
    const [isEditing, setIsEditing] = useState(false)
    // USESTATE FOR GIVING EDITING NAME AN ID
    const [editID, setEditID] = useState(null)
    //USESTATE FOR DISPLAYING ALERT
    const [alert, setAlert] = useState({ 
        show: false, 
        msg: '', 
        type: '' 
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            // show alert is user submits form without inputing a name
            setAlert({show:true,msg:'please enter value', type: 'danger'})
        } else if (name && isEditing) {
            // IF THE USER CLICKES ON THE EDIT BUTTON
            setList(
                list.map((item) => {
                    if(item.id === editID){
                        return {...item, title: name}
                    }
                    return item
                })
            )
            // when the user is done editing
            setName('') // make the input field empty after submission
            setEditID(null)
            setIsEditing(false)
        } else {
            const newItem = {id: new Date().getTime().toString(), title:name}
        setList([...list, newItem])
        }
        // when the user is done inputing a name make input fiele empty
        setName('')
    }

    // delete each name from the project
    const deleteItem = (id) => {
        setList(list.filter((item) => item.id !== id))
    }

    // edit items on the project
    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id)
        setIsEditing(true)
        setEditID(id)
        setName(specificItem.title)
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])
    
    return (
        <>
            <div className="form-submit-section" style={{background: darkMode ? "#fff" :"#222"}}>
                <div className="container">
                    <h1 className="todo-h3" style={{color: darkMode ? "#000" :"#fff"}}>Add Todo</h1>
                    <Toggle />
                    <form onSubmit={handleSubmit}>
                        {alert.show && <Alert {...alert} />}
                        <input 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{background: !darkMode && "#fff", border: darkMode && "1px solid #000"}}
                        />
                        <button>{isEditing ? 'Edit' : 'Add'}</button>


                    </form>

                    { list.length > 0 ? <TodoList 
                        deleteItem={deleteItem} 
                        items={list}
                        editItem={editItem}
                    /> : <p>nothing to display</p>}
                    {list.length> 0 && (<button className="deleteItem" onClick={()=> setList([])}>Clear All</button>)}

                </div>
            </div>
            
                    
        </>
    )
}

export default TodoForm