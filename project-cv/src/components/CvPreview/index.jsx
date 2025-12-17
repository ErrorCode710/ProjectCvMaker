import GeneralInformationPreview from "../GeneralInformation/Preview";
import EducationalExperiencePreview from "../EducationalExperience/Preview";
import ProfessionalExperiencePreview from "../ProfessionalExperience/Preview";

function CvPreview({ generalInfo, educationalInfo, professionalInfo }) {
  return (
    <article className="cv-preview">
      <GeneralInformationPreview {...generalInfo} />
      <EducationalExperiencePreview {...educationalInfo} />
      <ProfessionalExperiencePreview {...professionalInfo} />
    </article>
  );
}

export default CvPreview;
