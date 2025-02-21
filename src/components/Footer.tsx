import LogoIcon from "../assets/img/icons/LogoIcon.tsx";
import { TelegramIcon } from "../assets/img/icons/footer/TelegramIcon.tsx";
import { FacebookIcon } from "../assets/img/icons/footer/FacebookIcon.tsx";
import { InstagramIcon } from "../assets/img/icons/footer/InstagramIcon.tsx";

const Footer = () => {
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

	return (
		<footer className={"footer"}>
			<div className={"container"}>
				<div className={"footer__menu header__menu"}>
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

				<div className={"footer__bottom"}>
					<div className={"footer__logo"}>
						<div className={"header__logo"}>
							<LogoIcon/>
						</div>

						<p>Внедряем IT в ДНК вашей компании</p>
					</div>

					<div className={"footer__info"}>
						<p>+998 99 999 99 99</p>

						<p>example@teamtim.mail</p>

						<p>Адресс компании для того чтобы он был</p>
					</div>

					<div className={"footer__social"}>
						<TelegramIcon/>

						<FacebookIcon/>

						<InstagramIcon/>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer