import item_1 from '../../assets/icons/social/item-1.png';
import item_2 from '../../assets/icons/social/item-2.png';
import item_3 from '../../assets/icons/social/item-3.png';
import item_4 from '../../assets/icons/social/item-4.png';
import item_5 from '../../assets/icons/social/item-5.png';
import SocialIconsBox from '../socialIconsBox/SocialIconsBox';
import Button from '../button/Button';

import './contactBox.scss';
const social = [
	{ img: item_1, href: 'https://github.com/Constantin-UA' },
	{ img: item_2, href: 'https://www.linkedin.com/in/konstantin-shtanko-686021234/' },
	{ img: item_3, href: 'https://t.me/Konstantin_Constantin' },
	{ img: item_4, href: 'tel:+380981780294' },
	{ img: item_5, href: 'https://www.facebook.com/constantine.shtanko' },
];

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

				<SocialIconsBox icons={social} />
				<Button text="Back to main" linkTo="/" />
			</div>
		</div>
	);
}
