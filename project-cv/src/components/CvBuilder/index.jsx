import CvButton from "../CvButton";
import CvForm from "../CvForm";
import CvPreview from "../CvPreview";
import { useState } from "react";
function CvBuilder() {
 const sampleData = {
   generalInfo: {
     name: "Jhunrey",
     email: "jhunrey@email.com",
     phoneNo: "+63 9XX XXX XXXX",
     address: "Philippines",
   },
   educationalInfo: {
     degree: "Bachelor of Industrial Technology major in Computer Technology",
     school: "ABC University",
     city: "City",
     country: "Philippines",
     yearBegin: "2022-06-01", // full date
     yearEnd: "2026-05-31", // full date
   },
   professionalInfo: {
     jobTitle: "Junior Web Developer",
     company: "Facebook Startup",
     skillDesc: "Built dynamic web interfaces using HTML, CSS, JavaScript, and beginner-level React.",
     yearBegin: "2024-01-15", // full date
     yearEnd: "2025-12-31", // full date
   },
 };


  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phoneNo: "",
    address: "",
  });

  const [educationalInfo, setEducationalInfo] = useState({
    degree: "",
    school: "",
    city: "",
    country: "",
    yearBegin: "",
    yearEnd: "",
  });

  const [professionalInfo, setProfessionalInfo] = useState({
    jobTitle: "",
    company: "",
    skillDesc: "",
    yearBegin: "",
    yearEnd: "",
  });

  const loadSampleData = () => {
    setGeneralInfo(sampleData.generalInfo);
    setEducationalInfo(sampleData.educationalInfo);
    setProfessionalInfo(sampleData.professionalInfo);
  };
  const clearSampleData = () => {
    console.log("Clear CV");
    setGeneralInfo({
      name: "Name",
      email: "",
      phoneNo: "",
      address: "",
    });

    setEducationalInfo({
      degree: "",
      school: "",
      city: "",
      country: "",
      yearBegin: "",
      yearEnd: "",
    });

    setProfessionalInfo({
      jobTitle: "",
      company: "",
      skillDesc: "",
      yearBegin: "",
      yearEnd: "",
    });
  };

  return (
    <div className="wrapper">
      <CvForm
        cvButtonActions={{ loadSampleData, clearSampleData }}
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
