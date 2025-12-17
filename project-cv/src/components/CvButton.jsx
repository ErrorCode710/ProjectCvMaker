function CvButton({ style, onClick, name }) {
  return (
    <button className={style} onClick={onClick}>
      {name}
    </button>
  );
}
export default CvButton;
