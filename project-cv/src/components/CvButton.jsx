function CvButton({ style, onClick, name, type }) {
  return (
    <button type={type} className={style} onClick={onClick}>
      {name}
    </button>
  );
}
export default CvButton;
