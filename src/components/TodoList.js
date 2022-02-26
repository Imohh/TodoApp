import './style.css'

const TodoList = ({ items, deleteItem, editItem }) => {
    return(
        <>
            {items.map((item) => (
                <article className="article" key={item.id}>
                    <div className="article-container">
                        <div className="first">
                            <p className="">{item.title}</p>
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