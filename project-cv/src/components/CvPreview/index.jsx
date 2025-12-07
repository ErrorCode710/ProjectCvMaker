import GeneralInformationPreview from "../GeneralInformation/Preview";

function CvPreview({generalInfo}) {
  
  return (
    <div className="cv-preview">
      <GeneralInformationPreview {...generalInfo}/>
    </div>
  );
}

export default CvPreview;
