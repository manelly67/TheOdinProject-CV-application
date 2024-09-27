import { useState } from "react";
import "./styles/App.css";
import { AboutMe } from "./components/AboutMe";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Preview } from "./components/Preview";

function App() {
  // simulate to keep the data of the user
  let dataSaved = JSON.parse(localStorage.getItem("dataCV"));
  console.log(dataSaved);
  const initialColor = "#ffffff";
  const [activeIndex, setActiveIndex] = useState(0);
  const [status, setStatus] = useState("typing");

  // aboutMe section
  const [firstName, setFirstName] = useState(
    dataSaved === null ? "" : dataSaved.firstName
  );
  const [lastName, setLastName] = useState(
    dataSaved === null ? "" : dataSaved.lastName
  );
  const [email, setEmail] = useState(dataSaved === null ? "" : dataSaved.email);
  const [phone, setPhone] = useState(dataSaved === null ? "" : dataSaved.phone);
  const [description, setDescription] = useState(
    dataSaved === null ? "" : dataSaved.description
  );
  const [firstNameMissing, setFirstNameMissing] = useState(
    dataSaved === null ? true : dataSaved.firstName === "" ? true : false
  );
  const [lastNameMissing, setLastNameMissing] = useState(
    dataSaved === null ? true : dataSaved.firstName === "" ? true : false
  );
  const [emailMissing, setEmailMissing] = useState(
    dataSaved === null ? true : dataSaved.firstName === "" ? true : false
  );
  const [emailValidity, setEmailValidity] = useState(
    dataSaved === null ? null : true
  );
  const [phoneValidity, setPhoneValidity] = useState(
    dataSaved === null ? null : true
  );
  let aboutMeDetails = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    description: description,
  };
  let aboutMeValidation =
    firstNameMissing === false &&
    lastNameMissing === false &&
    emailMissing === false &&
    emailValidity === true &&
    phoneValidity === true
      ? true
      : false;

  // education section
  const [schoolName, setSchoolName] = useState("");
  const [countryOfSchool, setCountryOfSchool] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");
  const [educationArray, setEducationArray] = useState(
    dataSaved === null ? [] : dataSaved.education
  );
  let educationDetails = {
    schoolName: schoolName,
    countryOfSchool: countryOfSchool,
    titleOfStudy: titleOfStudy,
    dateOfStudy: dateOfStudy,
  };
  const inputFieldsEducation = [
    "titleOfStudy",
    "dateOfStudy",
    "schoolName",
    "countryOfSchool",
  ];

  function addEduc(educationArray, educationDetails) {
    if (
      countryOfSchool !== "" &&
      titleOfStudy !== "" &&
      schoolName !== "" &&
      dateOfStudy !== ""
    ) {
      let newArray = [...educationArray];
      newArray.push({ id: crypto.randomUUID(), education: educationDetails });
      setEducationArray(newArray);
      setCountryOfSchool("");
      setTitleOfStudy("");
      setSchoolName("");
      setDateOfStudy("");
    }
  }

  // experience section
  const [jobPosition, setJobPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [dateStartJob, setDateStartJob] = useState("");
  const [dateEndJob, setDateEndJob] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [experienceArray, setExperienceArray] = useState(
    dataSaved === null ? [] : dataSaved.experience
  );
  let experienceDetails = {
    jobPosition: jobPosition,
    companyName: companyName,
    dateStartJob: dateStartJob,
    dateEndJob: dateEndJob,
    jobDescription: jobDescription,
  };
  const inputFieldsExperience = [
    "jobPosition",
    "companyName",
    "dateStartJob",
    "dateEndJob",
    "jobDescription",
  ];

  function addExper(experienceArray, experienceDetails) {
    if (jobPosition !== "" && companyName !== "" && dateStartJob !== "") {
      let newArray = [...experienceArray];
      newArray.push({ id: crypto.randomUUID(), experience: experienceDetails });
      setExperienceArray(newArray);
      setJobPosition("");
      setCompanyName("");
      setDateStartJob("");
      setDateEndJob("");
      setJobDescription("");
    }
  }

  return (
    <>
      <div>
        <h1>CV Application</h1>
        <section>
          <AboutMe
            title="About Me"
            initialColor={initialColor}
            bgColor="#f1f3d4"
            isActive={activeIndex === 0}
            onShow={() => setActiveIndex(0)}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            description={description}
            setDescription={setDescription}
            firstNameMissing={firstNameMissing}
            setFirstNameMissing={setFirstNameMissing}
            lastNameMissing={lastNameMissing}
            setLastNameMissing={setLastNameMissing}
            emailMissing={emailMissing}
            setEmailMissing={setEmailMissing}
            emailValidity={emailValidity}
            setEmailValidity={setEmailValidity}
            phoneValidity={phoneValidity}
            setPhoneValidity={setPhoneValidity}
          />
        </section>
        <section>
          <Education
            title="Education And Skills"
            initialColor={initialColor}
            bgColor="#fbf8ef"
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(1)}
            schoolName={schoolName}
            setSchoolName={setSchoolName}
            countryOfSchool={countryOfSchool}
            setCountryOfSchool={setCountryOfSchool}
            titleOfStudy={titleOfStudy}
            setTitleOfStudy={setTitleOfStudy}
            dateOfStudy={dateOfStudy}
            setDateOfStudy={setDateOfStudy}
            educationArray={educationArray}
            setEducationArray={setEducationArray}
            addStudies={() => addEduc(educationArray, educationDetails)}
            inputFields={inputFieldsEducation}
          />
        </section>
        <section>
          <Experience
            title="Practical Experience"
            initialColor={initialColor}
            bgColor="#f1f3d4"
            isActive={activeIndex === 2}
            onShow={() => setActiveIndex(2)}
            jobPosition={jobPosition}
            setJobPosition={setJobPosition}
            companyName={companyName}
            setCompanyName={setCompanyName}
            dateStartJob={dateStartJob}
            setDateStartJob={setDateStartJob}
            dateEndJob={dateEndJob}
            setDateEndJob={setDateEndJob}
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
            experienceArray={experienceArray}
            setExperienceArray={setExperienceArray}
            addExperience={() => addExper(experienceArray, experienceDetails)}
            inputFields={inputFieldsExperience}
          />
        </section>
        <section>
          <Preview
            title="Preview Profile"
            initialColor={initialColor}
            bgColor="#fbf8ef"
            isActive={activeIndex === 3}
            onShow={() => setActiveIndex(3)}
            aboutMeDetails={aboutMeDetails}
            aboutMeValidation={aboutMeValidation}
            educationArray={educationArray}
            inputFieldsEducation={inputFieldsEducation}
            experienceArray={experienceArray}
            inputFieldsExperience={inputFieldsExperience}
            status={status}
            setStatus={setStatus}
          />
        </section>
      </div>
    </>
  );
}

export default App;
