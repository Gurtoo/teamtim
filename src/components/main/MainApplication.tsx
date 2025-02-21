import Button from "../ui/form/Buttons/Button.tsx";
import { Controller, useForm } from "react-hook-form";
import TextField from "../ui/form/Fields/TextField.tsx";

interface FormData {
	name: string;
	phone: string;
	telegram: string;
}

const MainApplication = () => {
	const {
		handleSubmit,
		control,
		formState: {errors},
		reset
	} = useForm<FormData>(
		{
			values: {
				name: "",
				phone: "",
				telegram: ""
			}
		}
	);

	function onSubmit(data: any) {
		console.log(data)
	}

	return (
		<div className={"main__containers main__application"}>
			<div className="container">
				<div className="main__application__content">
					<div className={"main__application__block"}>
						<div className="main__application__content__left">
							<h2>Давайте начнем</h2>

							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						</div>

						<div className="main__application__content__right">
							<h4>Оставьте нам заявку и мы вам перезвоним</h4>

							<form
								className="main__application__content__form"
								onSubmit={handleSubmit(onSubmit)}
							>
								<Controller
									name="name"
									control={control}
									render={({field: {onChange, value}}) => (
										<TextField
											value={value}
											title="Имя"
											placeholder={"Введите имя"}
											name="name"
											onChange={onChange}
										/>
									)}
								/>

								<Controller
									name="phone"
									control={control}
									render={({field: {onChange, value}}) => (
										<TextField
											value={value}
											title="Номер телефона"
											placeholder={"Введите номер телефона"}
											name="phone"
											onChange={onChange}
										/>
									)}
								/>

								<Controller
									name="telegram"
									control={control}
									render={({field: {onChange, value}}) => (
										<TextField
											value={value}
											title="Telegram"
											placeholder={"@example"}
											name="telegram"
											onChange={onChange}
										/>
									)}
								/>

								<Button
									className={"btn btn-primary"}
									type={"submit"}
									text={"Заказать свонок"}
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainApplication;