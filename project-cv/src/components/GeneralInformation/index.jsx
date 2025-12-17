// import { useState } from "react";
import Input from "../Input";
import CvButton from "../CvButton";

function GeneralInformation({ generalInfo, setGeneralInfo }) {
  //   console.log(useState(4));
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");
  // const [address, setAddress] = useState("");

  console.log(generalInfo);
  const handleChange = (field, value) => {
    setGeneralInfo({
      ...generalInfo,
      [field]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted:", { name, email });
  };

  return (
    <div>
      <h2 className="section-title">General Information</h2>
      <div>
        <form onSubmit={handleSubmit} className="formInputContainer">
          <Input label="Name" value={generalInfo.name} onChange={(e) => handleChange("name", e.target.value)}></Input>
          <Input label="Email" value={generalInfo.email} onChange={(e) => handleChange("email", e.target.value)}></Input>
          <Input
            label="Phone Number"
            value={generalInfo.phoneNo}
            onChange={(e) => handleChange("phoneNo", e.target.value)}
          ></Input>
          <Input
            label="City and Province"
            value={generalInfo.address}
            onChange={(e) => handleChange("address", e.target.value)}
          ></Input>
        </form>

        <CvButton style="button-9" name="Add"></CvButton>
        <CvButton style="button-9 button-9-edit" name="Edit"></CvButton>
      </div>
    </div>
  );
}

export default GeneralInformation;
