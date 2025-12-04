import { useState } from "react";
import Input from "./Input";

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
      <h2>Professional Experience</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <Input label="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}></Input>
          <Input label="Company" value={company} onChange={(e) => setCompany(e.target.value)}></Input>

          <Input label="Year Begin" type="date" value={yearBegin} onChange={(e) => setYearBegin(e.target.value)}></Input>
          <Input label="Year End" type="date" value={yearEnd} onChange={(e) => setYearEnd(e.target.value)}></Input>
          <Input label="Skill Description " value={skillDesc} onChange={(e) => setSkillDesc(e.target.value)}></Input>
          <div></div>
        </form>
      </div>
    </div>
  );
}

export default ProfessionalExperience;
