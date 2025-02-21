import LogoIcon from "../assets/img/icons/LogoIcon.tsx";
import Button from "./ui/form/Buttons/Button.tsx";
import { useNavigate } from "react-router-dom";

import '../assets/scss/style.module.scss';

const Header = () => {
	const navigate = useNavigate();

	const menu = [
		{
			key: "/services",
			text: "Услуги"
		},
		{
			key: "/projects",
			text: "Наши работы"
		},
		{
			key: "/about",
			text: "О нас"
		}
	]

	function handleOpenRedirect(url: string) {
		// navigate(url);
	}

	function handleOpenRequest() {}

	return (
		<header className={"header"}>
			<div className={"container header__container"}>
				<div className={"header__left header__logo"}>
					<LogoIcon/>
				</div>

				<div className={"header__menu"}>
					<ul className={"header__menu__list"}>
						{menu.map((item, idx) => (
							<li
								key={`menu-item-${idx}`}
								className={"header__menu__item"}
								onClick={() => handleOpenRedirect(item.key)}
							>
								{item.text}
							</li>
						))}
					</ul>
				</div>

				<div className={"header__right header__btn"}>
					<Button
						className={"btn btn-primary"}
						text={"Заказать звонок"}
						onClick={handleOpenRequest}
					/>
				</div>
			</div>
		</header>
	)
}

export default Header