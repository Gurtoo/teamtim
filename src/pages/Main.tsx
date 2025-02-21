import '../assets/scss/style.module.scss';
import Button from "../components/ui/form/Buttons/Button.tsx";
import ArrowRightIcon from "../assets/img/icons/ArrowRightIcon.tsx";
import MainOpportunities from "../components/main/MainOpportunities.tsx";
import MainBranches from "../components/main/MainBranches.tsx";
import MainProjects from "../components/main/MainProjects.tsx";
import MainPartners from "../components/main/MainPartners.tsx";
import MainApplication from "../components/main/MainApplication.tsx";

const Main = () => {

	const list = [
		{
			title: "Разработка ПО",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		},
		{
			title: "Разработка ПО",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		},
		{
			title: "Разработка ПО",
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		}
	]

	function handleOpenRequest() {
	}

	return (
		<main className={"main"}>
			<div className={"main__banners"}>
				<div className={"main__banners__img"}>
					<img src="/teamtim/images/banner-1.png"/>
				</div>

				<div className={"main__banners__block"}>
					<h3 className={"main__banners__title"}>
						Внедряем IT решение
						в ДНК вашей компании
					</h3>

					<p className={"main__banners__info"}>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy
					</p>
				</div>
			</div>

			<div className="main__top">
				<div className={"container"}>
					<div className={"main__top__block"}>
						<div className={"main__top__left"}>
							<h2>O TeamTim</h2>
						</div>

						<div className={"main__top__text"}>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has
								been
								the industry's standard dummy text ever since the 1500s, when an unknown printer took a
								galley
								of type and scrambled it to make a type specimen book. It has survived not only five
								centuries,
								but also the leap into electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
								passages,
								and more recently with desktop publishing software like Aldus PageMaker including
								versions
								of
								Lorem Ipsum.
							</p>
						</div>
					</div>

					<div className={"main__top__services"}>
						<div className="main__containers__header main__top__services__header">
							<p>Наши услуги</p>

							<ArrowRightIcon/>
						</div>

						<div className={"main__top__services__slider"}>
							{list.map((item, idx) => (
								<div
									key={`services-list-item-${idx}`}
									className="main__top__services__block">
									<h5>{item.title}</h5>

									<p>{item.text}</p>

									<Button
										className={"btn btn-primary"}
										text={"Подробнее"}
										onClick={() => handleOpenRequest()}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className={"main__container"}>
				<MainOpportunities/>

				<MainBranches/>

				<MainProjects/>

				<MainPartners/>

				<MainApplication/>
			</div>
		</main>
	)
}

export default Main;