import MainWrapper from '../../mainWrapper/MainWrapper';
import ContactBox from '../../contactBox/ContactBox';
import bg from '../../../assets/contacts/BG.png';
import './contactsPage.scss';

export default function ContactsPage() {
	return (
		<div className="contactsPage">
			<MainWrapper customStyle={{ backgroundImage: `url(${bg})` }}>
				<div className="contactsPage__wrapper">
					<ContactBox />
				</div>
			</MainWrapper>
		</div>
	);
}
