import CvForm from "../CvForm";
import CvPreview from "../CvPreview";
import { useState } from "react";
function CvBuilder() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "Jhunrey",
    email: "",
    phoneNo: "",
    address: "",
  });

  const [educationalInfo, setEducationalInfo] = useState({
    degree: "defree",
    school: "",
    city: "",
    country: "",
    yearBegin: "",
    yearEnd: "",
  });

  const [professionalInfo, setProfessionalInfo] = useState({
    jobTitle: "defree",
    company: "",
    skillDesc: "",
    yearBegin: "",
    yearEnd: "",
  });

  
  
  return (
    <div className="wrapper">
      <CvForm
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        educationalInfo={educationalInfo}
        setEducationalInfo={setEducationalInfo}
        professionalInfo={professionalInfo}
        setProfessionalInfo={setProfessionalInfo}
      ></CvForm>
      <CvPreview generalInfo={generalInfo} educationalInfo={educationalInfo} professionalInfo={professionalInfo}></CvPreview>
    </div>
  );
}

export default CvBuilder;
