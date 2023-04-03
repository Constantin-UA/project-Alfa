import { lazy, Suspense } from 'react';
import TextBox from '../../textBox/TextBox';
import bgHome from '../../../assets/home/BG.webp';
import Face from '../../face/Face';
import Spiner from '../../spiner/Spiner';

import './homePage.scss';
const MainWrapper = lazy(() => import('../../mainWrapper/MainWrapper'));
export default function HomePage(props) {
	return (
		<div className="homePage">
			<Suspense fallback={<Spiner />}>
				<MainWrapper customStyle={{ backgroundImage: `url(${bgHome})`, paddingBottom: '0px' }}>
					<div className="homePage__wrapper">
						<div className="homePage__wrapper-a">
							<Face />
						</div>
						<div className="homePage__wrapper-b">
							<TextBox />
						</div>
					</div>
				</MainWrapper>
			</Suspense>
		</div>
	);
}
