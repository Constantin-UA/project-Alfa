import MainWrapper from '../../mainWrapper/MainWrapper';
import roam from '../../../assets/gallary/roam.png';
import space from '../../../assets/gallary/space.png';
import sunnyside from '../../../assets/gallary/sunnyside.png';
import ipfind from '../../../assets/gallary/ipfind.png';
import art from '../../../assets/gallary/art.png';
import Button from '../../button/Button';

import bg from '../../../assets/gallary/BG.png';

import './gallaryPage.scss';

const gallaryItems = [
	{ img: roam, ref: 'https://roam-well.vercel.app/' },
	{ img: space, ref: 'https://space-tourism-chi-nine.vercel.app/' },
	{ img: art, ref: 'https://creative-duhb94009-constantin-ua.vercel.app/' },
	{ img: ipfind, ref: 'https://ipfind-sigma.vercel.app/' },
	{ img: sunnyside, ref: 'https://sunnyside-git-main-constantin-ua.vercel.app/' },
];
/* const gallaryItems = [
	{ name: 'roam', ref: 'https://roam-well.vercel.app/' },
	{ name: 'space', ref: 'https://space-tourism-chi-nine.vercel.app/' },
	{ name: 'art', ref: 'https://creative-duhb94009-constantin-ua.vercel.app/' },
	{ name: 'ipfind', ref: 'https://ipfind-sigma.vercel.app/' },
	{ name: 'sunnyside', ref: 'https://sunnyside-git-main-constantin-ua.vercel.app/' },
]; */
export default function GallaryPage() {
	return (
		<div className="gallaryPage">
			<MainWrapper
				customStyle={{
					backgroundImage: `url(${bg})`,
				}}
			>
				<div className="gallaryPage__box">
					<div className="gallaryPage__wrapper">
						{gallaryItems.map((item, idx) => {
							return <GallaryItem key={idx} item={item} />;
						})}
					</div>
					<Button text="Contact" linkTo="/contact" />
				</div>
			</MainWrapper>
		</div>
	);
}
function GallaryItem({ item }) {
	return (
		<div className={`gallaryPage__img-box`}>
			<a href={item.ref} className="gallaryPage__img ">
				<img src={item.img} alt="First slide element" />
			</a>
		</div>
	);
}

/* imgBG={{ backgroundImage: `url(${bg})` }} */

/*<a href={item.ref} className="gallaryPage__img gallaryPage__${item.name} ">  */
