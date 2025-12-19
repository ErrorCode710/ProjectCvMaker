// import { useState } from "react";
import Input from "../Input";
import CvButton from "../CvButton";
import { useState } from "react";

function GeneralInformation({ generalInfo, onSaveGeneral }) {
  const [draft, setDraft] = useState(generalInfo);
  console.log(draft);

  const handleChange = (field, value) => {
    setDraft({
      ...draft,
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
          <Input label="Name" value={draft.name} onChange={(e) => handleChange("name", e.target.value)}></Input>
          <Input label="Email" value={draft.email} onChange={(e) => handleChange("email", e.target.value)}></Input>
          <Input
            label="Phone Number"
            value={draft.phoneNo}
            onChange={(e) => handleChange("phoneNo", e.target.value)}
          ></Input>
          <Input
            label="City and Province"
            value={draft.address}
            onChange={(e) => handleChange("address", e.target.value)}
          ></Input>
        </form>

        <CvButton style="button-9" name="Save" onClick={() => onSaveGeneral(draft)}></CvButton>
      </div>
    </div>
  );
}

export default GeneralInformation;
