import Input from "../Input";
import CvButton from "../CvButton";
import EntryList from "../EntryList";
function ProfessionalExperience({ professionalInfo, setProfessionalInfo, professions, onAddProfession, setEditingProfId }) {
  const handleSubmit = (e) => {
    onAddProfession();
    e.preventDefault();
  };

  const handleChange = (field, value) => {
    setProfessionalInfo({
      ...professionalInfo,
      [field]: value,
    });
  };

  const editProfesison = (prof) => {
    console.log("prof state", prof);
    setProfessionalInfo(prof);
    setEditingProfId(prof.id);
  };
  console.log(professions);

  return (
    <div>
      <h2 className="section-title">Professional Experience</h2>
      <ul>
        <EntryList editEntry={editProfesison} items={professions}></EntryList>
      </ul>
      <div>
        <form onSubmit={handleSubmit} className="formInputContainer">
          <Input
            label="Job Title"
            value={professionalInfo.jobTitle}
            onChange={(e) => handleChange("jobTitle", e.target.value)}
            required
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
          <CvButton type="submit" style="button-9" name="Add"></CvButton>
          <CvButton style="button-9 button-9-edit" name="Edit"></CvButton>
        </form>
      </div>
    </div>
  );
}

export default ProfessionalExperience;
