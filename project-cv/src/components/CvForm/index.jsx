import GeneralInformation from "../GeneralInformation";
import EducationalExperience from "../EducationalExperience";
import ProfessionalExperience from "../ProfessionalExperience";
// import classes from "./CvForm.module.css";
import "./CvForm.css";

function CvForm(props) {

  return (
    <div className="cvContainer">
      <GeneralInformation generalInfo={props.generalInfo} setGeneralInfo={props.setGeneralInfo}></GeneralInformation>
      {/* <EducationalExperience></EducationalExperience>
      <ProfessionalExperience></ProfessionalExperience> */}
    </div>
  );
}

export default CvForm;
