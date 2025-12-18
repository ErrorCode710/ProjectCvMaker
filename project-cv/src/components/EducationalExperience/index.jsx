// import { useState } from "react";
import Input from "../Input";
import CvButton from "../CvButton";

function EducationalExperience({ educationalInfo, setEducationalInfo, buttonAction }) {
  //   console.log(useState(4));
  // const [degree, setDegree] = useState("");
  // const [school, setSchool] = useState("");
  // const [city, setCity] = useState("");
  // const [country, setCountry] = useState("");
  // const [yearBegin, setYearBegin] = useState("");
  // const [yearEnd, setYearEnd] = useState("");

  // console.log(educationalInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:");
  };

  const handleChange = (field, value) => {
    setEducationalInfo({
      ...educationalInfo,
      [field]: value,
    });
  };

  return (
    <div>
      <h2 className="section-title">Educational Experience</h2>
      <ul></ul>
      <div>
        <form onSubmit={handleSubmit} className="formInputContainer">
          <Input
            label="Degree"
            value={educationalInfo.degree}
            onChange={(e) => handleChange("degree", e.target.value)}
          ></Input>
          <Input
            label="School"
            value={educationalInfo.school}
            onChange={(e) => handleChange("school", e.target.value)}
          ></Input>
          <Input label="City" value={educationalInfo.city} onChange={(e) => handleChange("city", e.target.value)}></Input>
          <Input
            label="Country"
            value={educationalInfo.country}
            onChange={(e) => handleChange("country", e.target.value)}
          ></Input>
          <Input
            label="Year Begin"
            type="date"
            value={educationalInfo.yearBegin}
            onChange={(e) => handleChange("yearBegin", e.target.value)}
          ></Input>
          <Input
            label="Year End"
            type="date"
            value={educationalInfo.yearEnd}
            onChange={(e) => handleChange("yearEnd", e.target.value)}
          ></Input>
        </form>
        <CvButton style="button-9" name="Add" onClick={buttonAction}></CvButton>
        <CvButton style="button-9 button-9-edit" name="Edit"></CvButton>
      </div>
    </div>
  );
}

export default EducationalExperience;
