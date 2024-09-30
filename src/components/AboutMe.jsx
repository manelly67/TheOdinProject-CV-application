import { InputText, InputMail, InputTextOpt, InputArea } from "./CustomInput";
import {
  inlineValidMissing,
  inlineValid,
  phoneValidation,
} from "./auxiliaryFunctions.js";

function AboutMe(props) {
  let activeColor = props.isActive ? props.bgColor : props.initialColor;

  return (
    <section className="headerSection" style={{ backgroundColor: activeColor }}>
      <h2>{props.title}</h2>
      {props.isActive ? (
        <>
          <FormAboutMe
            activeColor={activeColor}
            firstName={props.firstName}
            setFirstName={props.setFirstName}
            lastName={props.lastName}
            setLastName={props.setLastName}
            email={props.email}
            setEmail={props.setEmail}
            phone={props.phone}
            setPhone={props.setPhone}
            description={props.description}
            setDescription={props.setDescription}
            firstNameMissing={props.firstNameMissing}
            setFirstNameMissing={props.setFirstNameMissing}
            lastNameMissing={props.lastNameMissing}
            setLastNameMissing={props.setLastNameMissing}
            emailMissing={props.emailMissing}
            setEmailMissing={props.setEmailMissing}
            emailValidity={props.emailValidity}
            setEmailValidity={props.setEmailValidity}
            phoneValidity={props.phoneValidity}
            setPhoneValidity={props.setPhoneValidity}
          />
        </>
      ) : (
        <button onClick={props.onShow}>Edit</button>
      )}
    </section>
  );
}

function FormAboutMe(props) {
  return (
    <>
      <div
        className="preview"
        style={{ display: "block", backgroundColor: props.activeColor }}
      >
        <form id="about-me" autoComplete="off" noValidate>
          <div>
            <InputText
              key="firstName"
              label="First Name: "
              id="firstName"
              value={props.firstName}
              onChange={(event) => {
                props.setFirstName(event.target.value);
                inlineValidMissing(
                  "text",
                  "required",
                  event.target.value,
                  props.setFirstNameMissing
                );
              }}
            />
            {props.firstNameMissing === true ? (
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
              value={props.lastName}
              onChange={(event) => {
                props.setLastName(event.target.value);
                inlineValidMissing(
                  "text",
                  "required",
                  event.target.value,
                  props.setLastNameMissing
                );
              }}
            />
            {props.lastNameMissing === true ? (
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
              value={props.email}
              onChange={(event) => {
                props.setEmail(event.target.value);
                inlineValidMissing(
                  "email",
                  "required",
                  event.target.value,
                  props.setEmailMissing
                );
                inlineValid(
                  "email",
                  event.target.value,
                  props.setEmailValidity
                );
              }}
            />
            <div>
              {props.emailMissing === true ? (
                <>
                  <p>required field</p>
                </>
              ) : (
                <>{null}</>
              )}
              {props.emailValidity === false ? (
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
              value={props.phone}
              onChange={(event) => {
                props.setPhone(event.target.value);
                phoneValidation(event.target.value, props.setPhoneValidity);
              }}
            />
            {props.phoneValidity === false ? (
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
              value={props.description}
              onChange={(event) => props.setDescription(event.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export { AboutMe };
