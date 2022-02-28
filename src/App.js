import { useContext } from 'react'
import TodoForm from './components/TodoForm'
// import Toggle from './components/Toggle'
import './components/style.css'
import { ThemeContext } from './context/context'

const App = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    return (
        <>
            <div>
                <TodoForm />
                {/*<Toggle />*/}
            </div>
                    
        </>
    )
}

export default App