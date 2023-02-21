import './mainWrapper.scss';

export default function MainWrapper(props) {
	const { customStyle } = props;
	return (
		<div className="mainWrapper" style={customStyle}>
			{props.children}
		</div>
	);
}
