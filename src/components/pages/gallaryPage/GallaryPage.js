import { lazy, Suspense } from 'react';
import Spiner from '../../spiner/Spiner';

import Button from '../../button/Button';
import bg from '../../../assets/gallary/BG.webp';
import './gallaryPage.scss';

const MainWrapper = lazy(() => import('../../mainWrapper/MainWrapper'));
const GallaryWrapper = lazy(() => import('../../galleryWrapper/GalleryWrapper'));

export default function GallaryPage() {
	return (
		<div className="gallaryPage">
			<Suspense fallback={<Spiner />}>
				<MainWrapper
					customStyle={{
						backgroundImage: `url(${bg})`,
					}}
				>
					<div className="gallaryPage__wrapper">
						<Suspense fallback={<Spiner />}>
							<GallaryWrapper />
						</Suspense>
						<Button text="Contact" linkTo="/contact" />
					</div>
				</MainWrapper>
			</Suspense>
		</div>
	);
}
