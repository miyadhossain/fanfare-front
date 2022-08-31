export default function AppInput({
  inputType = "",
  className = "",
  inputPlaceholder = "",
  required = false,
  onClick = null,
  onChange = null,
  onInput = null,
  name = "",
  ...others
}) {
  return (
    <input
      type={inputType}
      className={` text-gray-900 text-sm rounded-md focus:border-green-500 outline-none ${className}`}
      placeholder={inputPlaceholder}
      required={required}
      onClick={onClick}
      onChange={onChange}
      onInput={onInput}
      name={name}
      {...others}
    />
  );
}
