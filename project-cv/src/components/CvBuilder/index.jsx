import { useState } from "react";
import CvButton from "../CvButton";
import CvForm from "../CvForm";
import CvPreview from "../CvPreview";

function CvBuilder() {
  // ------------------------
  // Sample / Static Data
  // ------------------------
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
      yearBegin: "2022-06-01",
      yearEnd: "2026-05-31",
    },
    professionalInfo: {
      jobTitle: "Junior Web Developer",
      company: "Facebook Startup",
      skillDesc: "Built dynamic web interfaces using HTML, CSS, JavaScript, and beginner-level React.",
      yearBegin: "2024-01-15",
      yearEnd: "2025-12-31",
    },
  };

  // ------------------------
  // General Information State
  // ------------------------
  const [generalInfo, setGeneralInfo] = useState({
    id: "",
    name: "",
    email: "",
    phoneNo: "",
    address: "",
  });

  const onSaveGeneral = (general) => {
    setGeneralInfo(general);
  };

  // ------------------------
  // Educational State
  // ------------------------
  const [educationalInfo, setEducationalInfo] = useState({
    id: null,
    degree: "",
    school: "",
    city: "",
    country: "",
    yearBegin: "",
    yearEnd: "",
  });

  const [education, setEducation] = useState([]);
  const [editingEduId, setEditingEduId] = useState(null);

  const saveEducationEntry = () => {
    // console.log("editingID State", editingEduId);
    if (editingEduId === null) {
      setEducation((prev) => [...prev, { ...educationalInfo, id: crypto.randomUUID() }]);
      // console.log("SUCCESS ADD", education);
    } else {
      setEducation((prev) => prev.map((edu) => (edu.id === editingEduId ? { ...educationalInfo, id: editingEduId } : edu)));
      // console.log("SUCCESS EDIT", education);
    }

    //reset
    setEducationalInfo({
      id: "",
      degree: "",
      school: "",
      city: "",
      country: "",
      yearBegin: "",
      yearEnd: "",
    });
    setEditingEduId(null);

    console.log(education);
  };

  // Summary To Add the update or add entry
  // If the educationalInfo is id is null then  add entry
  // else educationalInfo is not null map over the education
  //
  // so my understanding its not editing the precise index of entry rather replacing the whole entries
  // but just copy the previous entries and edit only the formdata match

  // ------------------------
  // Professional State
  // ------------------------
  const [professionalInfo, setProfessionalInfo] = useState({
    id: null,
    jobTitle: "",
    company: "",
    skillDesc: "",
    yearBegin: "",
    yearEnd: "",
  });

  const [professions, setProfessions] = useState([]);
  const [editingProfId, setEditingProfId] = useState(null);


  const saveProfesisonalEntry = () => {
    console.log("editingID State", editingProfId);
    if (editingProfId === null) {
      setProfessions((prev) => [...prev, { ...professionalInfo, id: crypto.randomUUID() }]);
      console.log("SUCCESS ADD", professions);
    } else {
      setProfessions((prev) =>
        prev.map((edu) => (edu.id === editingProfId ? { ...professionalInfo, id: editingProfId } : edu))
      );
      console.log("SUCCESS EDIT", professions);
    }
    //
    //reset
    setProfessionalInfo({
      id: null,
      jobTitle: "",
      company: "",
      skillDesc: "",
      yearBegin: "",
      yearEnd: "",
    });
    console.log("PROFESSION", professions);
    setEditingProfId(null);
  };

  console.log(null);

  // ------------------------
  // Utility Actions
  // ------------------------
  const loadSampleData = () => {
    setGeneralInfo(sampleData.generalInfo);
    setEducation([sampleData.educationalInfo]);
    setProfessions([sampleData.professionalInfo]);
  };

  const clearSampleData = () => {
    setGeneralInfo({
      name: "",
      email: "",
      phoneNo: "",
      address: "",
    });
    setEducation([]);
    setProfessions([]);
  };

  // const editEntry = () => {

  // }
  // ------------------------
  // Render
  // ------------------------
  return (
    <div className="wrapper">
      <CvForm
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        onSaveGeneral={onSaveGeneral}
        educationalInfo={educationalInfo}
        setEducationalInfo={setEducationalInfo}
        onAddEducation={saveEducationEntry}
        educations={education}
        setEditingEduId={setEditingEduId}
        editingEduId={editingEduId}
        professionalInfo={professionalInfo}
        setProfessionalInfo={setProfessionalInfo}
        onAddProfession={saveProfesisonalEntry}
        professions={professions}
        setEditingProfId={setEditingProfId}
        editingProfId={editingProfId}
        onLoadSample={loadSampleData}
        onClear={clearSampleData}
      />

      <CvPreview generalInfo={generalInfo} educationalInfo={education} professionalInfo={professions} />
    </div>
  );
}

export default CvBuilder;
