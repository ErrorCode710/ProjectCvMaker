function GeneralInformationPreview({name = "test",email,phoneNo,address}){
console.log(name)
    
return (
  <div>
    <h1>{name}</h1>
    <h2>{email}</h2>
    <h2>{phoneNo}</h2>
    <h2>{address}</h2>
    <h2>hi</h2>
  </div>
);

}

export default GeneralInformationPreview