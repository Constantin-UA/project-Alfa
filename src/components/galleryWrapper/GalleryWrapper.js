/* import GalleryItem from '../galleryItem/GalleryItem'; */
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Mousewheel, Zoom, Keyboard } from 'swiper';
import roam from '../../assets/gallary/roam.png';
import space from '../../assets/gallary/space.png';
import sunnyside from '../../assets/gallary/sunnyside.png';
import ipfind from '../../assets/gallary/ipfind.png';
import art from '../../assets/gallary/art.png';

import 'swiper/swiper-bundle.css';

import './galleryWrapper.scss';

const galleryItems = [
	{ img: roam, ref: 'https://roam-well.vercel.app/' },
	{ img: space, ref: 'https://space-tourism-chi-nine.vercel.app/' },
	{ img: art, ref: 'https://creative-duhb94009-constantin-ua.vercel.app/' },
	{ img: ipfind, ref: 'https://ipfind-sigma.vercel.app/' },
	{ img: sunnyside, ref: 'https://sunnyside-git-main-constantin-ua.vercel.app/' },
];
// register Swiper custom elements

export default function GalleryWrapper() {
	return (
		<div className="galleryWrapper">
			<Swiper
				modules={[Autoplay, FreeMode, Mousewheel, Zoom, Keyboard]}
				spaceBetween={8}
				slidesPerView={2}
				freeMode={true}
				autoplay={true}
				speed="1200"
				loop={true}
				mousewheel={true}
				zoom={true}
				keyboard={true}
				autoHeight={true}
				direction="vertical"
			>
				{galleryItems.map((i, el) => {
					return (
						<SwiperSlide key={el}>
							<img src={i.img} alt="First slide element" className="gallaryItem__img" />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

/* return <GalleryItem key={idx} item={item} />; */
/* <div class="swiper slider slider1">
	<div class="swiper-wrapper slider__wrapper">
		<div class="swiper-slide slider__item">
				<div class="slider__img" style="background-image: url(img/1.jpg)"></div>
		</div>
	</div>
</div> */
