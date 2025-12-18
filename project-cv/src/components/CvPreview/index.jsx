import GeneralInformationPreview from "../GeneralInformation/Preview";
import EducationalExperiencePreview from "../EducationalExperience/Preview";
import ProfessionalExperiencePreview from "../ProfessionalExperience/Preview";

function CvPreview({ generalInfo, educationalInfo, professionalInfo }) {
  console.log(educationalInfo);
  return (
    <article className="cv-preview">
      <GeneralInformationPreview {...generalInfo} />
      <EducationalExperiencePreview educationalInfo={educationalInfo} />
      <ProfessionalExperiencePreview professionalInfo={professionalInfo} />
    </article>
  );
}

export default CvPreview;
