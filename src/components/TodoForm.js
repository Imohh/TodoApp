import { useState } from 'react'
import './style.css'

const TodoForm  =() => {
    const [text, setText] = useState('')

    return (
        <>
        <h2 className="deleteItem">Hello</h2>
            <div className="form-submit-section">
                <div className="container">

                    <form onSubmit="">
                        
                        <input
                            type="text"
                            value={text}
                            placeholder="add a task"
                            onChange={(e) => setText(e.target.value)} />
                    
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default TodoForm