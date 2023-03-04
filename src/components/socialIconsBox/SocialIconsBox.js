import './socialIconsBox.scss';

export default function IconsBox({ icons }) {
	return (
		<div className="iconsBox">
			{icons.map((item, idx) => {
				return (
					<a href={item.href} className="iconsBox__icon" key={idx}>
						<img src={item.img} alt={idx} />
					</a>
				);
			})}
		</div>
	);
}
