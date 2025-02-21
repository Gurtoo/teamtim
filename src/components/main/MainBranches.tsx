import SettingIcon from "../../assets/img/icons/SettingIcon.tsx";

const MainBranches = () => {
	const list = [
		{
			title: "Финтех",
			text: "Мы не только создаем программное обеспечение, но и обеспечиваем его бесперебойную работу.",
		},
		{
			title: "Финтех",
			text: "Мы не только создаем программное обеспечение, но и обеспечиваем его бесперебойную работу.",
		},
		{
			title: "Финтех",
			text: "Мы не только создаем программное обеспечение, но и обеспечиваем его бесперебойную работу.",
		},
		{
			title: "Финтех",
			text: "Мы не только создаем программное обеспечение, но и обеспечиваем его бесперебойную работу.",
		},
		{
			title: "Финтех",
			text: "Мы не только создаем программное обеспечение, но и обеспечиваем его бесперебойную работу.",
		},
		{
			title: "Финтех",
			text: "Мы не только создаем программное обеспечение, но и обеспечиваем его бесперебойную работу.",
		},
	]

	return (
		<div className={"main__containers main__branches"}>
			<div className="container">
				<div className="main__containers__header">
					<p>Отрасли применения</p>
				</div>

				<div className="main__branches__content">
					{list.map((item, idx) => (
						<div
							key={`opportunities-list-item-${idx}`}
							className={"main__branches__block"}
						>
							<div className="main__branches__content__icon">
								<SettingIcon/>
							</div>

							<div className="main__branches__content__text">
								<h4>{item.title}</h4>

								<p>{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MainBranches;