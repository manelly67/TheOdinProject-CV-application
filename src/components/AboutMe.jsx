import { InputText, InputMail, InputTextOpt, InputArea } from "./CustomInput";
import {
  inlineValidMissing,
  inlineValid,
  phoneValidation,
} from "./auxiliaryFunctions.js";

function AboutMe({
  title,
  initialColor,
  bgColor,
  isActive,
  onShow,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  description,
  setDescription,
  firstNameMissing,
  setFirstNameMissing,
  lastNameMissing,
  setLastNameMissing,
  emailMissing,
  setEmailMissing,
  emailValidity,
  setEmailValidity,
  phoneValidity,
  setPhoneValidity,
}) {
  let activeColor = isActive ? bgColor : initialColor;

  return (
    <section className="headerSection" style={{ backgroundColor: activeColor }}>
      <h2>{title}</h2>
      {isActive ? (
        <>
          <FormAboutMe
            activeColor={activeColor}
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
        </>
      ) : (
        <button onClick={onShow}>Edit</button>
      )}
    </section>
  );
}

function FormAboutMe({
  activeColor,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  description,
  setDescription,
  firstNameMissing,
  setFirstNameMissing,
  lastNameMissing,
  setLastNameMissing,
  emailMissing,
  setEmailMissing,
  emailValidity,
  setEmailValidity,
  phoneValidity,
  setPhoneValidity,
}) {
  return (
    <>
      <div
        className="preview"
        style={{ display: "block", backgroundColor: activeColor }}
      >
        <form id="about-me" autoComplete="off" noValidate>
          <div>
            <InputText
              key="firstName"
              label="First Name: "
              id="firstName"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
                inlineValidMissing(
                  "text",
                  "required",
                  event.target.value,
                  setFirstNameMissing
                );
              }}
            />
            {firstNameMissing === true ? (
              <>
                <p>required field</p>
              </>
            ) : (
              <>{null}</>
            )}
          </div>
          <div>
            <InputText
              key="lastName"
              label="Last Name: "
              id="lastName"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
                inlineValidMissing(
                  "text",
                  "required",
                  event.target.value,
                  setLastNameMissing
                );
              }}
            />
            {lastNameMissing === true ? (
              <>
                <p>required field</p>
              </>
            ) : (
              <>{null}</>
            )}
          </div>
          <div>
            <InputMail
              key="email"
              label="Email Address: "
              id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                inlineValidMissing(
                  "email",
                  "required",
                  event.target.value,
                  setEmailMissing
                );
                inlineValid("email", event.target.value, setEmailValidity);
              }}
            />
            <div>
              {emailMissing === true ? (
                <>
                  <p>required field</p>
                </>
              ) : (
                <>{null}</>
              )}
              {emailValidity === false ? (
                <>
                  <p>enter a valid email</p>
                </>
              ) : (
                <>{null}</>
              )}
            </div>
          </div>
          <div>
            <InputTextOpt
              key="phone"
              label="Phone Number: "
              id="phone"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
                phoneValidation(event.target.value, setPhoneValidity);
              }}
            />
            {phoneValidity === false ? (
              <>
                <p>phone must be a ten digit number</p>
              </>
            ) : (
              <>{null}</>
            )}
          </div>
          <div>
            <InputArea
              key="description"
              label={"Describe Yourself: "}
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export { AboutMe };
