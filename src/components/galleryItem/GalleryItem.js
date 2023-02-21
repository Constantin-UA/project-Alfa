import { SwiperSlide } from 'swiper/react';

import './galleryItem.scss';
export default function GalleryItem({ item }) {
	return (
		<SwiperSlide className="gallaryItem">
			<a href={item.ref} className="gallaryItem__a ">
				<img src={item.img} alt="First slide element" className="gallaryItem__img" />
			</a>
		</SwiperSlide>
	);
}
