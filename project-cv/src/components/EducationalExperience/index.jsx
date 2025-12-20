// import { useState } from "react";
import Input from "../Input";
import CvButton from "../CvButton";
import EntryList from "../EntryList";

function EducationalExperience({ educationalInfo, setEducationalInfo, onAddEducation, educations,setEditingEduId }) {
  // console.log(educations);

  // console.log(educationalInfo);

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddEducation();

    console.log("Submitted:");
  };

  const handleChange = (field, value) => {
    setEducationalInfo({
      ...educationalInfo,
      [field]: value,
    });
  };

  const editEducation = (edu) => {
    setEducationalInfo(edu)
    setEditingEduId(edu.id)

  }

  // TO DO 
  // WHEN ADDING FIRST ENTRY IT GONE NOT REFLECTING ON THE SECTION ALSO AND THE ENTRY BUT ON THE SECOND ENTRY IT APPEAR 

  return (
    <div>
      <h2 className="section-title">Educational Experience</h2>
      <EntryList editEntry={editEducation} items={educations}></EntryList>
      <div>
        <form onSubmit={handleSubmit} className="formInputContainer">
          <Input
            label="Degree"
            value={educationalInfo.degree}
            required
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
          <CvButton type="submit" style="button-9" name="Add"></CvButton>
          <CvButton style="button-9 button-9-edit" name="Edit"></CvButton>
        </form>
      </div>
    </div>
  );
}

export default EducationalExperience;
