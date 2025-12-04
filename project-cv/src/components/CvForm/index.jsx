import GeneralInformation from "../GeneralInformation";
import EducationalExperience from "../EducationalExperience";
import ProfessionalExperience from "../ProfessionalExperience";
// import classes from "./CvForm.module.css";
import "./CvForm.css"
function CvForm() {
  return (
    <div className="cvContainer">
      <GeneralInformation></GeneralInformation>
      <EducationalExperience></EducationalExperience>
      <ProfessionalExperience></ProfessionalExperience>
    </div>
  );
}

export default CvForm;
