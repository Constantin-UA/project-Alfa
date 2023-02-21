import MainWrapper from '../../mainWrapper/MainWrapper';
import GallaryWrapper from '../../galleryWrapper/GalleryWrapper';
import Button from '../../button/Button';
import bg from '../../../assets/gallary/BG.png';

import './gallaryPage.scss';

export default function GallaryPage() {
	return (
		<div className="gallaryPage">
			<MainWrapper
				customStyle={{
					backgroundImage: `url(${bg})`,
				}}
			>
				<div className="gallaryPage__wrapper">
					<GallaryWrapper />
					<Button text="Contact" linkTo="/contact" />
				</div>
			</MainWrapper>
		</div>
	);
}

/* function GallaryItem({ item }) {
	return (
		<div className={`gallaryPage__img-box`}>
			<a href={item.ref} className="gallaryPage__img ">
				<img src={item.img} alt="First slide element" />
			</a>
		</div>
	);
} */

/* imgBG={{ backgroundImage: `url(${bg})` }} */

/*<a href={item.ref} className="gallaryPage__img gallaryPage__${item.name} ">  */
