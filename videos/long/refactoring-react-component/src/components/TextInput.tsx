import { ComponentProps } from 'react';
import { Control, useController } from 'react-hook-form';

type TextInputProps = ComponentProps<'input'> & {
  control: Control<any>;
  label?: string;
  name: string;
};

export default function TextInput({
  control,
  label,
  name,
  ...inputProps
}: TextInputProps) {
  const {
    formState: { errors },
  } = useController({ control, name });

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-semibold">{label}</label>}
      <input {...control.register(name)} {...inputProps} />
      {errors[name] && (
        <span className="text-red-500">{errors[name].message?.toString()}</span>
      )}
    </div>
  );
}
