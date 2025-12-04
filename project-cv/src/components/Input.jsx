function Input({ label, type = "text", value, onChange, placeholder, required }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} />
    </div>
  );
}

export default Input;
