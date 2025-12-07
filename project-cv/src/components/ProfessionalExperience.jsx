import { useState } from "react";
import Input from "./Input";
import CvButton from "./CvButton";

function ProfessionalExperience() {
  //   console.log(useState(4));
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [skillDesc, setSkillDesc] = useState("");
  const [yearBegin, setYearBegin] = useState("");
  const [yearEnd, setYearEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { jobTitle, company });
  };

  return (
    <div>
      <h2 className="section-title">Professional Experience</h2>
      <div>
        <form onSubmit={handleSubmit} className="formInputContainer">
          <Input label="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}></Input>
          <Input label="Company" value={company} onChange={(e) => setCompany(e.target.value)}></Input>
          <Input label="Year Begin" type="date" value={yearBegin} onChange={(e) => setYearBegin(e.target.value)}></Input>
          <Input label="Year End" type="date" value={yearEnd} onChange={(e) => setYearEnd(e.target.value)}></Input>
          <div>
            <label>Skill Description</label>
            <textarea value={skillDesc} onChange={(e) => setSkillDesc(e.target.value)}></textarea>
          </div>
          <CvButton style="button-9" name="Submit"></CvButton>
          <CvButton style="button-9 button-9-edit" name="Edit"></CvButton>
        </form>
      </div>
    </div>
  );
}

export default ProfessionalExperience;
