import GeneralInformation from "../GeneralInformation";
import EducationalExperience from "../EducationalExperience";
import ProfessionalExperience from "../ProfessionalExperience";
import CvButton from "../CvButton";
// import classes from "./CvForm.module.css";
// import "./CvForm.css";

function CvForm({
  generalInfo,
  setGeneralInfo,
  educationalInfo,
  setEducationalInfo,
  educations,
  professionalInfo,
  setProfessionalInfo,
  profession,
  onAddEducation,
  onAddProfession,
  onLoadSample,
  onClear,
  onSaveGeneral,
}) {
  console.log(educations);
  return (
    <div className="cvContainer">
      <div className="cv-actions">
        <CvButton style="button-9 button-9-edit" onClick={onClear} name="Reset CV" />

        <CvButton style="button-9" onClick={onLoadSample} name="Load Sample CV" />
      </div>

      <GeneralInformation generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} onSaveGeneral={onSaveGeneral} />

      <EducationalExperience
        educationalInfo={educationalInfo}
        setEducationalInfo={setEducationalInfo}
        onAddEducation={onAddEducation}
        educations={educations}
      />

      <ProfessionalExperience
        professionalInfo={professionalInfo}
        setProfessionalInfo={setProfessionalInfo}
        onAddProfession={onAddProfession}
        profession={profession}
      />
    </div>
  );
}

export default CvForm;
