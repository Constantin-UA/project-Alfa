import './iconsBox.scss';

export default function IconsBox({ icons }) {
	return (
		<div className="iconsBox">
			{icons.map((item, idx) => {
				return (
					<div className="iconsBox__icon" key={idx}>
						<img src={item} alt={idx} />
					</div>
				);
			})}
		</div>
	);
}
