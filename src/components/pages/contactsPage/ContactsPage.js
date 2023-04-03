import { lazy, Suspense } from 'react';

import ContactBox from '../../contactBox/ContactBox';
import bg from '../../../assets/contacts/BG.webp';
import Spiner from '../../spiner/Spiner';

import './contactsPage.scss';
const MainWrapper = lazy(() => import('../../mainWrapper/MainWrapper'));
export default function ContactsPage() {
	return (
		<div className="contactsPage">
			<Suspense fallback={<Spiner />}>
				<MainWrapper customStyle={{ backgroundImage: `url(${bg})` }}>
					<div className="contactsPage__wrapper">
						<ContactBox />
					</div>
				</MainWrapper>
			</Suspense>
		</div>
	);
}
