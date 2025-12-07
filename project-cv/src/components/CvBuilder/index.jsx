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
   
 console.log(generalInfo);
  return (
    <div className="wrapper">
     
      <CvForm generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}></CvForm>
      <CvPreview generalInfo={generalInfo}></CvPreview>
    </div>
  );
}

export default CvBuilder;
