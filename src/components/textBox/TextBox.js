import reactIcon from '../../assets/icons/skils/react 1.png';
import reduxIcon from '../../assets/icons/skils/redux 1.png';
import javascriptIcon from '../../assets/icons/skils/javascript 1.png';
import sassIcon from '../../assets/icons/skils/sass 1.png';
import htmlIcon from '../../assets/icons/skils/html 1.png';
import IconsBox from '../iconsBox/IconsBox';
import Button from '../button/Button';
import NameBox from '../nameBox/NameBox';
import './textBox.scss';
const skills = [reactIcon, reduxIcon, javascriptIcon, sassIcon, htmlIcon];

export default function TextBox() {
	return (
		<div className="textBox">
			<NameBox />
			<IconsBox icons={skills} />
			<Button text="my works" linkTo="/gallary" />
		</div>
	);
}
