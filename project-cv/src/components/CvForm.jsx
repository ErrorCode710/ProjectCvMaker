import GeneralInformation from "./GeneralInformation";
import EducationalExperience from "./EducationalExperience";
import ProfessionalExperience from "./ProfessionalExperience";

function CvForm() {
  return (
    <>
      <GeneralInformation></GeneralInformation>
      <EducationalExperience></EducationalExperience>
      <ProfessionalExperience></ProfessionalExperience>
    </>
  );
}

export default CvForm;
