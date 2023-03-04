import MainWrapper from '../../mainWrapper/MainWrapper';
import TextBox from '../../textBox/TextBox';
import bgHome from '../../../assets/home/BG.png';
import Face from '../../face/Face';
import './homePage.scss';

export default function HomePage(props) {
	return (
		<div className="homePage">
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
		</div>
	);
}
