export default function AppInputLabel({ className = "", labelTitle }) {
  return (
    <label className={`block mb-2 font-semibold text-gray-900 ${className}`}>
      {labelTitle}
    </label>
  );
}
