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
  setEditingEduId,
  professionalInfo,
  setProfessionalInfo,
  professions,
  setEditingProfId,
  onAddEducation,
  onAddProfession,
  onLoadSample,
  onClear,
  onSaveGeneral,
  editingEduId,
  editingProfId,
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
        setEditingEduId={setEditingEduId}
        editingEduId={editingEduId}
      />

      <ProfessionalExperience
        professionalInfo={professionalInfo}
        setProfessionalInfo={setProfessionalInfo}
        onAddProfession={onAddProfession}
        professions={professions}
        setEditingProfId={setEditingProfId}
        editingProfId={editingProfId}
      />
    </div>
  );
}

export default CvForm;
