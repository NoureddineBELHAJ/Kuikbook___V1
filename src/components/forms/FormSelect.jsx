import { useFormContext } from 'react-hook-form';
import { clsx } from 'clsx';

export default function FormSelect({
  name,
  label,
  options,
  className = '',
  required = false,
  ...props
}) {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const error = errors[name];

  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="mt-1">
        <select
          id={name}
          className={clsx(
            'input w-full',
            error && 'border-red-300 focus:border-red-500 focus:ring-red-500'
          )}
          {...register(name)}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
}
