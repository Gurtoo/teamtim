import Button from "../ui/form/Buttons/Button.tsx";
import ArrowRightIcon from "../../assets/img/icons/ArrowRightIcon.tsx";

const MainProjects = () => {
	const list = [
		{
			title: "ГТО",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			banner: "/images/project-1.png"
		},
		{
			title: "ГТО",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			banner: "/images/project-2.png",
			isBlack: true
		},
		{
			title: "ГТО",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			banner: "/images/project-3.png",
			isBlack: true
		},
		{
			title: "ГТО",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			banner: "/images/project-1.png"
		},
		{
			title: "ГТО",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			banner: "/images/project-2.png",
			isBlack: true
		},
		{
			title: "ГТО",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			banner: "/images/project-3.png",
			isBlack: true
		},
	]

	function handleOpenRequest() {
	}

	return (
		<div className={"main__containers main__projects"}>
			<div className="container">
				<div className="main__containers__header">
					<p>Наши проекты</p>

					<ArrowRightIcon/>
				</div>

				<div className="main__projects__content">
					{list.map((item, idx) => (
						<div
							key={`opportunities-list-item-${idx}`}
							className={`main__projects__block ${item?.isBlack ? "black" : ""}`}
						>
							<div className="main__projects__content__banner">
								<img src={item.banner}/>
							</div>

							<div className="main__projects__content__block">
								<div className="main__projects__content__info">
									<h2>{item.title}</h2>

									<p>{item.text}</p>

									<Button
										className={"btn btn-primary"}
										text={"Подробнее"}
										onClick={() => handleOpenRequest()}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MainProjects;