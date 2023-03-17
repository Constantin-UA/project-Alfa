/* import GalleryItem from '../galleryItem/GalleryItem'; */
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Mousewheel, Zoom, Keyboard } from 'swiper';
import ai_img from '../../assets/gallary/image 1.png';
import port_img from '../../assets/gallary/image 3.png';
import coffe_img from '../../assets/gallary/image 2.png';
import ipfind from '../../assets/gallary/ipfind.png';
import roam from '../../assets/gallary/roam.png';
import richS from '../../assets/gallary/richS.png';
import skgranite from '../../assets/gallary/skgranite.png';

import 'swiper/swiper-bundle.css';

import './galleryWrapper.scss';

const galleryItems = [
	{ img: ai_img, ref: 'https://ai.constantine-web.space' },
	{ img: port_img, ref: 'https://port.constantine-web.space' },
	{ img: ipfind, ref: 'https://ip.constantine-web.space' },
	{ img: coffe_img, ref: 'https://coffee.constantine-web.space/' },
	{ img: roam, ref: 'https://roam.constantine-web.space/' },
	{ img: richS, ref: 'https://rich-stone.dp.ua/' },
	{ img: skgranite, ref: 'https://sk-granite.dp.ua/' },
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
							<a href={i.ref} className="gallaryItem__a">
								<img src={i.img} alt="First slide element" className="gallaryItem__img" />
							</a>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
