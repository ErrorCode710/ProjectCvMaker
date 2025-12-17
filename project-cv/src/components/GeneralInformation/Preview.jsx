function GeneralInformationPreview({ name, email, phoneNo, address }) {
  return (
    <header className="cv__header">
      <h1 className="cv__name">{name}</h1>

      <ul className="cv__contact">
        {email && <li className="cv__contact-item">{email}</li>}
        {phoneNo && <li className="cv__contact-item">{phoneNo}</li>}
        {address && <li className="cv__contact-item">{address}</li>}
      </ul>
    </header>
  );
}

export default GeneralInformationPreview;
