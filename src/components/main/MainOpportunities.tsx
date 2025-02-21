import Button from "../ui/form/Buttons/Button.tsx";
import ArrowRightIcon from "../../assets/img/icons/ArrowRightIcon.tsx";

const MainOpportunities = () => {
	const list = [
		{
			title: "Разработка на 6 языках програмирования",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			categories: ["iOS", "Node.JS", "C++", "Phyton", "Ruby", "Swift"],
			rightImg: "",
			banner: ""
		},
		{
			title: "Интеграция с вашими системами",
			text: "Мы создаем программные решения, которые легко интегрируются с уже существующими бизнес-системами.",
			categories: ["CRM", "ERP", "API", "SaaS"],
			rightImg: "",
			banner: "/teamtim/images/opportunities-1.jpg",
			bannerMobile: "/teamtim/images/opportunities-mobile-1.jpg"
		},
		{
			title: "Интеграция с вашими системами",
			text: "Мы создаем программные решения, которые легко интегрируются с уже существующими бизнес-системами.",
			categories: ["CI/CD", "DevOps", "Updates", "UX/UI"],
			rightImg: "",
			banner: "/teamtim/images/opportunities-2.jpg",
			bannerMobile: "/teamtim/images/opportunities-mobile-2.jpg"
		}
	]

	function handleOpenRequest() {
	}

	return (
		<div className={"main__containers main__opportunities"}>
			<div className="container">
				<div className="main__containers__header">
					<p>Наши возможности</p>
				</div>

				<div className="main__opportunities__content">
					{list.map((item, idx) => (
						<div
							key={`opportunities-list-item-${idx}`}
							className={"main__opportunities__block"}
						>
							<div className="main__opportunities__content__banner">
								<img src={item.banner}/>
							</div>

							<div className="main__opportunities__content__left">
								<h2>{item.title}</h2>

								<p>{item.text}</p>

								<div className="main__opportunities__content__tags">
									{item.categories.map((tag, _idx) => (
										<div
											key={`opportunities-list-item-${idx}-tag-${_idx}`}
											className={"main__opportunities__content__tag"}
										>
											{tag}
										</div>
									))}
								</div>

								<Button
									className={"btn btn-link"}
									text={"Подробнее"}
									rightIcon={<ArrowRightIcon/>}
									onClick={() => handleOpenRequest()}
								/>
							</div>

							{item.rightImg && (
								<div className="main__opportunities__content__right">
									<img src={item.rightImg}/>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MainOpportunities;