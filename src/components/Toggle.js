import { useContext } from 'react'
import './style.css'
import left from '../images/arrow-left.png'
import right from '../images/arrow-right.png'
import {ThemeContext} from '../context/context'


const Toggle = () => {
	const theme = useContext(ThemeContext)

	const handleClick = () => {
		theme.dispatch({type: "TOGGLE"})
	}

	return (
		<>
			<div className="t">
				<img src={left} alt="" className="t-icon"/>
				<img src={right} alt="" className="t-icon"/>
				<div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
			</div>
		</>
	)
}

export default Toggle