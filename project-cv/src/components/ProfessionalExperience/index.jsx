import Input from "../Input";
import CvButton from "../CvButton";
import EntryList from "../EntryList";
function ProfessionalExperience({ professionalInfo, setProfessionalInfo }) {
  //   console.log(useState(4));
  // const [jobTitle, setJobTitle] = useState("");
  // const [company, setCompany] = useState("");
  // const [skillDesc, setSkillDesc] = useState("");
  // const [yearBegin, setYearBegin] = useState("");
  // const [yearEnd, setYearEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (field, value) => {
    setProfessionalInfo({
      ...professionalInfo,
      [field]: value,
    });
  };

  return (
    <div>
      <h2 className="section-title">Professional Experience</h2>
      <ul>
        <EntryList></EntryList>
      </ul>
      <div>
        <form onSubmit={handleSubmit} className="formInputContainer">
          <Input
            label="Job Title"
            value={professionalInfo.jobTitle}
            onChange={(e) => handleChange("jobTitle", e.target.value)}
          ></Input>
          <Input
            label="Company"
            value={professionalInfo.company}
            onChange={(e) => handleChange("company", e.target.value)}
          ></Input>
          <Input
            label="Year Begin"
            type="date"
            value={professionalInfo.yearBegin}
            onChange={(e) => handleChange("yearBegin", e.target.value)}
          ></Input>
          <Input
            label="Year End"
            type="date"
            value={professionalInfo.yearEnd}
            onChange={(e) => handleChange("yearEnd", e.target.value)}
          ></Input>
          <div>
            <p>Skill Description</p>
            <textarea
              value={professionalInfo.skillDesc}
              onChange={(e) => handleChange("skillDesc", e.target.value)}
            ></textarea>
          </div>
          <CvButton style="button-9" name="Submit"></CvButton>
          <CvButton style="button-9 button-9-edit" name="Edit"></CvButton>
        </form>
      </div>
    </div>
  );
}

export default ProfessionalExperience;
