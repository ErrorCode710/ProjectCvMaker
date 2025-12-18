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

  // blue print
  const [educationalInfo, setEducationalInfo] = useState({
    degree: "",
    school: "",
    city: "",
    country: "",
    yearBegin: "",
    yearEnd: "",
  });

  const [education, setEducation] = useState([]);

  const addEntryEducation = () => {
    setEducation((prev) => [...prev, educationalInfo]);
    setEducationalInfo({ degree: "", school: "", city: "", country: "", yearBegin: "", yearEnd: "" });
    console.log(education);
  };

  const [professionalInfo, setProfessionalInfo] = useState({
    jobTitle: "",
    company: "",
    skillDesc: "",
    yearBegin: "",
    yearEnd: "",
  });

  const [professions, setProfessions] = useState([]);

  const addEntryProfessions = () => {
    setProfessions((prev) => [...prev, professionalInfo]);
    setProfessionalInfo({ jobTitle: "", company: "", skillDesc: "", yearBegin: "", yearEnd: "" });
  };

  const loadSampleData = () => {
    setGeneralInfo(sampleData.generalInfo);

    setEducation([sampleData.educationalInfo]);

    setProfessions([sampleData.professionalInfo]);
  };

  const clearSampleData = () => {
    console.log("Clear CV");
    setGeneralInfo({
      name: "",
      email: "",
      phoneNo: "",
      address: "",
    });

    setEducation([]);
    setProfessions([]);
  };

  return (
    <div className="wrapper">
      <CvForm
        cvButtonActions={{ loadSampleData, clearSampleData, addEntryEducation, addEntryProfessions }}
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        educationalInfo={educationalInfo}
        setEducationalInfo={setEducationalInfo}
        professionalInfo={professionalInfo}
        setProfessionalInfo={setProfessionalInfo}
      ></CvForm>
      <CvPreview generalInfo={generalInfo} educationalInfo={education} professionalInfo={professions}></CvPreview>
    </div>
  );
}

export default CvBuilder;
