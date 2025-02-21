import { InputHTMLAttributes, ReactElement } from "react";
import { FieldMaskProps, MergeJSX } from "../../../../utils";

export interface FieldProps {
    label?: string;
    prepend?: ReactElement | string;
    append?: ReactElement | string;
    placeholder?: string;
    value: string;
    autoFocus?: boolean;
    maxLength?: number;
    minLength?: number;
    rows?: number;
    disabled?: boolean;
    pattern?: InputHTMLAttributes<HTMLInputElement>["pattern"];
    inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
    onChange?: (value: string) => void;
    errorMessage?: string;
    isSingle?: boolean;
    type?: "text" | "password" | "tel" | "number" | "email";
    required?: boolean;
    name?: string;
    errors?: any;
    onKeyDown?: (event: any) => void;
    readOnly?: boolean;
}

export interface MaskFieldProps extends FieldProps {
    mask: FieldMaskProps;
    unmaskedOutput?: boolean;
}

export type FieldJSXProps = MergeJSX<FieldProps, HTMLDivElement>

export type MaskFieldJSXProps = MergeJSX<MaskFieldProps, HTMLDivElement>
