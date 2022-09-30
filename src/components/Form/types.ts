import { InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface TPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
}
