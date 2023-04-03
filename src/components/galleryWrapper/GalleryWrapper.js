/* import GalleryItem from '../galleryItem/GalleryItem'; */
import { useEffect, useState } from 'react';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Mousewheel, Zoom, Keyboard, Pagination } from 'swiper';
import ai_img from '../../assets/gallary/ai.webp';
import port_img from '../../assets/gallary/port.webp';
import coffe_img from '../../assets/gallary/coffe.webp';
import ipfind from '../../assets/gallary/ipfind.webp';
import roam from '../../assets/gallary/roam.webp';
import richS from '../../assets/gallary/richS.webp';
import skgranite from '../../assets/gallary/skgranite.webp';

import 'swiper/swiper-bundle.css';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './galleryWrapper.scss';
const galleryItems = [
	{ img: port_img, ref: 'https://port.constantine-web.space' },
	{ img: ai_img, ref: 'https://ai.constantine-web.space' },
	{ img: ipfind, ref: 'https://ip.constantine-web.space' },
	{ img: coffe_img, ref: 'https://coffee.constantine-web.space/' },
	{ img: roam, ref: 'https://roam.constantine-web.space/' },
	{ img: richS, ref: 'https://rich-stone.dp.ua/' },
	{ img: skgranite, ref: 'https://sk-granite.dp.ua/' },
];
// register Swiper custom elements

export default function GalleryWrapper() {
	const [windowWidth, setWindowWidth] = useState(0);
	useEffect(() => {
		setWindowWidth(document.getElementById('body').clientWidth);
	}, []);
	const changeSliderSizer = (elem) => {
		if (elem >= 0 && elem <= 456) {
			return 3;
		}
		if (elem >= 456 && elem <= 1024) {
			return 2;
		}
		if (elem > 1024) {
			return 1;
		}
	};
	return (
		<div className="galleryWrapper">
			<Swiper
				modules={[Autoplay, FreeMode, Mousewheel, Zoom, Keyboard, Pagination]}
				spaceBetween={8}
				slidesPerView={changeSliderSizer(windowWidth)}
				freeMode={true}
				autoplay={true}
				speed="1200"
				loop={true}
				mousewheel={true}
				zoom={true}
				keyboard={true}
				autoHeight={true}
				direction={'vertical'}
				pagination={{
					clickable: true,
				}}
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
