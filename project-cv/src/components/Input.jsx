function Input({ label, type = "text", value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="label-title">{label}</label>
      <input
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default Input;
