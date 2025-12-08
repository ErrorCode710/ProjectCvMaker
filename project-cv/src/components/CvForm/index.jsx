import GeneralInformation from "../GeneralInformation";
import EducationalExperience from "../EducationalExperience";
import ProfessionalExperience from "../ProfessionalExperience";
// import classes from "./CvForm.module.css";
import "./CvForm.css";

function CvForm(props) {
  console.log(props);
  return (
    <div className="cvContainer">
      <GeneralInformation generalInfo={props.generalInfo} setGeneralInfo={props.setGeneralInfo}></GeneralInformation>

      <EducationalExperience
        educationalInfo={props.educationalInfo}
        setEducationalInfo={props.setEducationalInfo}
      ></EducationalExperience>
      <ProfessionalExperience professionalInfo={props.professionalInfo} setProfessionalInfo={props.setProfessionalInfo} ></ProfessionalExperience>
    </div>
  );
}

export default CvForm;
