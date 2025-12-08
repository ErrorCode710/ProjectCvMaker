function EducationalExperiencePreview({ degree, school, city, country, yearBegin, yearEnd }) {
  console.log(degree, school, city);

  return (
    <div>
      <h1>{degree}</h1>
      <h2>{school}</h2>
      <h2>{city}</h2>
      <h2>{country}</h2>
      <h2>{yearBegin}</h2>
      <h2>{yearEnd}</h2>
    </div>
  );
}

export default EducationalExperiencePreview;
