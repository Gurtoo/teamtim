import { ReactNode } from 'react'
import Spinner from "../../Spinner";

interface ButtonProps {
	loading?: boolean;
	leftIcon?: ReactNode | undefined;
	rightIcon?: ReactNode | undefined;
	text: string | ReactNode;
	onClick?: (event: any) => void;
	onMouseEnter?: (event: any) => void;
	onMouseLeave?: (event: any) => void;
	className?: string;
	type?: 'submit' | 'reset' | 'button' | undefined;
	gap?: number;
	disabled?: boolean;
	id?: any;
	style?: any;
}

const Button = (
	{
		loading,
		leftIcon,
		rightIcon,
		text,
		onClick,
		onMouseEnter,
		onMouseLeave,
		className,
		type = 'button',
		gap = 10,
		disabled = false,
		id,
		style,
	}: ButtonProps
) => {
	function onClickBtn(event: any): void {
		onClick && onClick(event)
	}

	return (
		<button
			id={id}
			onMouseOver={onMouseEnter}
			onMouseLeave={onMouseLeave}
			type={type}
			onClick={(event) => onClickBtn(event)}
			className={className}
			style={{
				...style,
				gap: leftIcon || rightIcon ? gap : 0,
				cursor: disabled ? 'no-drop' : 'pointer',
				pointerEvents: disabled ? 'none' : 'auto',
				opacity: disabled ? '0.5' : '1',
			}}
			disabled={disabled || loading}
		>
			{leftIcon && <span className="header__left">{leftIcon}</span>}

			{loading ? (
				<div
					className="vertical-center"
					style={{position: 'relative'}}
				>
					<Spinner isSmall/>
				</div>
			) : (
				<div className="header__text d-flex">{text}</div>
			)}

			{rightIcon && <span className="header__right">{rightIcon}</span>}
		</button>
	)
}

export default Button
