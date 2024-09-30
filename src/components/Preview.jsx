import { submitAllTheforms } from "./auxiliaryFunctions.js";
import emailIcon from "../assets/img/email-outline.png";
import phoneIcon from "../assets/img/phone-dial-outline.png";

function Preview(props) {
  let activeColor = props.isActive ? props.bgColor : props.initialColor;

  const listItemsEducation = props.educationArray.map((element) => (
    <li key={element.id} className="cardEducation">
      <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        <div>
          <p style={{ textTransform: "uppercase" }}>
            {element.education[props.inputFieldsEducation[0]]}
          </p>
        </div>
        <div>
          <p>{element.education[props.inputFieldsEducation[1]]}</p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        <div>
          <p style={{ textTransform: "capitalize" }}>
            {element.education[props.inputFieldsEducation[2]]}
          </p>
        </div>
        <div>
          <p style={{ textTransform: "capitalize" }}>
            {element.education[props.inputFieldsEducation[3]]}
          </p>
        </div>
      </div>
    </li>
  ));

  const listItemsExperience = props.experienceArray.map((element) => (
    <li key={element.id} className="cardExperience">
      <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        <div>
          <p>{element.experience[props.inputFieldsExperience[2]]} /</p>
        </div>
        <div>
          <p>{element.experience[props.inputFieldsExperience[3]]}</p>
        </div>
        <div>
          <p style={{ textTransform: "uppercase" }}>
            {element.experience[props.inputFieldsExperience[0]]}
          </p>
        </div>
        <div>
          <p style={{ textTransform: "capitalize" }}>
            {element.experience[props.inputFieldsExperience[1]]}
          </p>
        </div>
      </div>

      <div>
        <p>{element.experience[props.inputFieldsExperience[4]]}</p>
      </div>
    </li>
  ));

  return (
    <section className="headerSection" style={{ backgroundColor: activeColor }}>
      <h2>{props.title}</h2>
      {props.isActive ? (
        <>
          <PreviewCV
            activeColor={activeColor}
            aboutMeDetails={props.aboutMeDetails}
            aboutMeValidation={props.aboutMeValidation}
            educationArray={props.educationArray}
            lengthEducation={props.educationArray.length}
            listItemsEducation={listItemsEducation}
            experienceArray={props.experienceArray}
            lengthExperience={props.experienceArray.length}
            listItemsExperience={listItemsExperience}
            status={props.status}
            setStatus={props.setStatus}
          />
        </>
      ) : (
        <button onClick={props.onShow}>Edit</button>
      )}
    </section>
  );
}

function PreviewCV(props) {
  const dataCV = {
    firstName: props.aboutMeDetails.firstName,
    lastName: props.aboutMeDetails.lastName,
    email: props.aboutMeDetails.email,
    phone: props.aboutMeDetails.phone,
    description: props.aboutMeDetails.description,
    education: props.educationArray,
    experience: props.experienceArray,
  };

  const emailImg = new Image();
  emailImg.src = emailIcon;
  const phoneImg = new Image();
  phoneImg.src = phoneIcon;

  return (
    <div
      className="preview"
      style={{ display: "block", backgroundColor: props.activeColor }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <button
          onClick={() =>
            submitAllTheforms(
              "dataCV",
              dataCV,
              props.aboutMeValidation,
              props.setStatus
            )
          }
        >
          SUBMIT CV
        </button>
        {props.status === "typing" ? (
          <>{null}</>
        ) : (
          <>
            <p style={{ color: "#900", fontSize: "1.5rem" }}>{props.status}</p>
          </>
        )}
      </div>
      <br></br>
      <h2 style={{ textAlign: "center" }}>PREVIEW</h2>
      <section className="aboutMePreview">
        <article className="cardAboutMe">
          <p>First Name: {props.aboutMeDetails.firstName}</p>
          <p>Last Name: {props.aboutMeDetails.lastName}</p>
          <p style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            <img
              src={emailImg.src}
              width="20px"
              height="auto"
              style={{ backgroundColor: "lightblue", alignItems: "center" }}
            ></img>
            {props.aboutMeDetails.email}
          </p>
          <p style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            <img
              src={phoneImg.src}
              width="20px"
              height="auto"
              style={{ backgroundColor: "lightblue", alignItems: "center" }}
            ></img>
            {props.aboutMeDetails.phone.toString()}
          </p>
        </article>
        <article className="cardAboutMe">
          <h3
            style={{
              color: "lightblue",
              fontSize: "1.2rem",
              fontWeight: "700",
            }}
          >
            Profile
          </h3>
          <p>{props.aboutMeDetails.description}</p>
        </article>
      </section>
      <br></br>
      {props.lengthEducation === 0 ? (
        <>{null}</>
      ) : (
        <>
          <section className="eduPreview">
            <h3
              style={{
                color: "lightblue",
                fontSize: "1.2rem",
                fontWeight: "700",
              }}
            >
              Experience
            </h3>
            <ul
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              {props.listItemsExperience}
            </ul>
          </section>
        </>
      )}
      {props.lengthExperience === 0 ? (
        <>{null}</>
      ) : (
        <>
          <section className="eduPreview">
            <h3
              style={{
                color: "lightblue",
                fontSize: "1.2rem",
                fontWeight: "700",
              }}
            >
              Education
            </h3>
            <ul
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              {props.listItemsEducation}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}

export { Preview };
