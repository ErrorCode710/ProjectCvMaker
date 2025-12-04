import { useState } from "react";
import Input from "./Input";

function GeneralInformation() {
  //   console.log(useState(4));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { name, email });
  };

  return (
    <div>
      <h2>General Information</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <Input label="Name" value={name} onChange={(e) => setName(e.target.value)}></Input>
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
          <Input label="Phone Number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}></Input>
          <Input label="City and Province" value={address} onChange={(e) => setAddress(e.target.value)}></Input>
        </form>
      </div>
    </div>
  );
}

export default GeneralInformation;
