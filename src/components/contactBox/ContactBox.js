import item_1 from '../../assets/icons/social/item-1.png';
import item_2 from '../../assets/icons/social/item-2.png';
import item_3 from '../../assets/icons/social/item-3.png';
import item_4 from '../../assets/icons/social/item-4.png';
import item_5 from '../../assets/icons/social/item-5.png';
import IconsBox from '../iconsBox/IconsBox';
import Button from '../button/Button';
import NameBox from '../nameBox/NameBox';

import './contactBox.scss';
const social = [item_1, item_2, item_3, item_4, item_5];

export default function ContactBox() {
	return (
		<div className="contactBox">
			<div className="contactBox__wrapper">
				<div className="contactBox__title">
					<p>Creativity</p>
					<p>Responsibility</p>
					<p>Efficiency</p>
					<p>Professionalism</p>
				</div>
				<div className="contactBox__subtitle">
					<p>You can find it here:</p>
				</div>
				<NameBox />
				<IconsBox icons={social} />
				<Button text="Back to main" linkTo="/" />
			</div>
		</div>
	);
}
