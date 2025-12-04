import { useState } from "react";
import Input from "./Input";

function EducationalExperience() {
  //   console.log(useState(4));
  const [degree, setDegree] = useState("");
  const [school, setSchool] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [yearBegin, setYearBegin] = useState("");
  const [yearEnd, setYearEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { degree, school });
  };

  return (
    <div>
      <h2>Educational Experience</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <Input label="Degree" value={degree} onChange={(e) => setDegree(e.target.value)}></Input>
          <Input label="School" value={school} onChange={(e) => setSchool(e.target.value)}></Input>
          <Input label="City" value={city} onChange={(e) => setCity(e.target.value)}></Input>
          <Input label="Country" value={country} onChange={(e) => setCountry(e.target.value)}></Input>
          <Input label="Year Begin" type="date" value={yearBegin} onChange={(e) => setYearBegin(e.target.value)}></Input>
          <Input label="Year End" type="date" value={yearEnd} onChange={(e) => setYearEnd(e.target.value)}></Input>
        </form>
      </div>
    </div>
  );
}

export default EducationalExperience;
