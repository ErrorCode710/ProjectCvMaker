function EntryList({ items = [], editEntry }) {
  console.log("Entry lIst");
  return (
    // <li className="education-manager__item">
    //   <button className="education-manager__select">Bachelor of Industrial Technology — ABC University</button>
    // </li>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="education-manager__item">
          <button
            onClick={() => {
              editEntry(item);
            }}
            className="button-9 button-9-list  education-manager__select"
          >
            Entry
          </button>
        </li>
      ))}
    </ul>
  );
}

export default EntryList;
