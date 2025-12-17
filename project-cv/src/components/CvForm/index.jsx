import GeneralInformation from "../GeneralInformation";
import EducationalExperience from "../EducationalExperience";
import ProfessionalExperience from "../ProfessionalExperience";
import CvButton from "../CvButton";
// import classes from "./CvForm.module.css";
// import "./CvForm.css";

function CvForm(props) {
  console.log(props);
  return (
    <div className="cvContainer">
      <div className="cv-actions">
        <CvButton style="button-9 button-9-edit" onClick={props.cvButtonActions.clearSampleData} name="Reset CV">
          Reset CV
        </CvButton>
        <CvButton style="button-9 " onClick={props.cvButtonActions.loadSampleData} name="Load Sample">
          Load Sample CV
        </CvButton>
      </div>
      <GeneralInformation generalInfo={props.generalInfo} setGeneralInfo={props.setGeneralInfo}></GeneralInformation>
      <EducationalExperience
        educationalInfo={props.educationalInfo}
        setEducationalInfo={props.setEducationalInfo}
      ></EducationalExperience>
      <ProfessionalExperience
        professionalInfo={props.professionalInfo}
        setProfessionalInfo={props.setProfessionalInfo}
      ></ProfessionalExperience>
    </div>
  );
}

export default CvForm;
