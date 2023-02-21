import { NavLink } from 'react-router-dom';
import './button.scss';

export default function Button({ text, linkTo }) {
	return (
		<NavLink className="button" to={linkTo}>
			{text}
		</NavLink>
	);
}

//<button className="button">{text}</button>;
