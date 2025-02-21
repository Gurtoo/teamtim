
const MainPartners = () => {
	const list = [
		{
			img: "/teamtim/images/partner/partner-1.svg"
		},
		{
			img: "/teamtim/images/partner/partner-2.svg"
		},
		{
			img: "/teamtim/images/partner/partner-1.svg"
		},
		{
			img: "/teamtim/images/partner/partner-2.svg"
		},
		{
			img: "/teamtim/images/partner/partner-1.svg"
		},
		{
			img: "/teamtim/images/partner/partner-2.svg"
		},
		{
			img: "/teamtim/images/partner/partner-1.svg"
		},
		{
			img: "/teamtim/images/partner/partner-2.svg"
		},
	]

	return (
		<div className={"main__containers main__partners"}>
			<div className="container">
				<div className="main__containers__header">
					<p>Партнеры</p>
				</div>

				<div className="main__partners__content">
					{list.map((item, idx) => (
						<div
							key={`partners-list-item-${idx}`}
							className={"main__partners__block"}
						>
							<div className="main__partners__content__text">
								<img src={item.img}/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MainPartners;