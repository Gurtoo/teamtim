import { forwardRef, useRef } from "react";
import { FieldJSXProps } from "./types";

type Ref = HTMLInputElement;

const TextField = forwardRef<Ref, FieldJSXProps>(
	(
		{
			className = "",
			id = "",
			label,
			title,
			prepend,
			append,
			placeholder,
			value,
			onChange,
			autoFocus,
			maxLength,
			pattern,
			inputMode,
			errors,
			type,
			isSingle,
			required,
			name = "",
			onKeyDown,
			disabled,
			readOnly
		},
		ref
	) => {
		const prependElRef = useRef<any>(null);
		const appendElRef = useRef<any>(null);

		function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
			if (type === "number") {
				if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
					e.preventDefault();
				}
			}

			if (onKeyDown) onKeyDown(e);
		}

		return (
			<div className={"form-group"}>
				{title && (
					<label
						htmlFor={id}
						className={"form-label"}
					>
						{title}
					</label>
				)}

				<div
					className={`field ${className} ${(typeof value === "string" ? !!(value || "").trim() : "") ? "active" : ""}`}
				>
					{prepend && (
						<div
							ref={prependElRef}
							className="field__prepend"
						>
							{prepend}
						</div>
					)}

					<input
						ref={ref}
						value={value}
						onChange={(e) => onChange && onChange(e.target.value)}
						type={type || "text"}
						id={id}
						placeholder={placeholder}
						className="form-control"
						autoFocus={autoFocus}
						autoComplete={(type === "password" && id !== "password") ? "new-password" : "off"}
						name={name || id}
						maxLength={maxLength}
						pattern={pattern}
						inputMode={inputMode}
						required={required}
						disabled={disabled}
						readOnly={readOnly}
						onKeyDown={handleKeyPress}
						onWheel={(e) => {
							type === "number" && e.currentTarget.blur()
						}}
					/>

					{append && (
						<div ref={appendElRef} className="field__append">
							{append}
						</div>
					)}
				</div>

				{errors?.[name] && (
					<div className="d-flex flex-column">
						<p className="field__error">
							{errors?.[name]?.message as any}
						</p>
					</div>
				)}
			</div>
		);
	}
);

TextField.displayName = "TextField";

export default TextField;
