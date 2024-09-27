import { submitAllTheforms } from "./auxiliaryFunctions.js";
import emailIcon from "../assets/img/email-outline.png";
import phoneIcon from "../assets/img/phone-dial-outline.png";

function Preview({
  title,
  initialColor,
  bgColor,
  isActive,
  onShow,
  aboutMeDetails,
  aboutMeValidation,
  educationArray,
  experienceArray,
  inputFieldsEducation,
  inputFieldsExperience,
  status,
  setStatus,
}) {
  let activeColor = isActive ? bgColor : initialColor;

  const listItemsEducation = educationArray.map((element) => (
    <li key={element.id} className="cardEducation">
      <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        <div>
          <p style={{ textTransform: "uppercase" }}>
            {element.education[inputFieldsEducation[2]]}
          </p>
        </div>
        <div>
          <p>{element.education[inputFieldsEducation[3]]}</p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        <div>
          <p style={{ textTransform: "capitalize" }}>
            {element.education[inputFieldsEducation[0]]}
          </p>
        </div>
        <div>
          <p style={{ textTransform: "capitalize" }}>
            {element.education[inputFieldsEducation[1]]}
          </p>
        </div>
      </div>
    </li>
  ));

  const listItemsExperience = experienceArray.map((element) => (
    <li key={element.id} className="cardExperience">
      <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        <div>
          <p>Since: {element.experience[inputFieldsExperience[2]]}</p>
        </div>
        <div>
          <p>To: {element.experience[inputFieldsExperience[3]]}</p>
        </div>
        <div>
          <p style={{ textTransform: "uppercase" }}>
            {element.experience[inputFieldsExperience[0]]}
          </p>
        </div>
        <div>
          <p style={{ textTransform: "capitalize" }}>
            {element.experience[inputFieldsExperience[1]]}
          </p>
        </div>
      </div>

      <div>
        <p>{element.experience[inputFieldsExperience[4]]}</p>
      </div>
    </li>
  ));

  return (
    <section className="headerSection" style={{ backgroundColor: activeColor }}>
      <h2>{title}</h2>
      {isActive ? (
        <>
          <PreviewCV
            activeColor={activeColor}
            aboutMeDetails={aboutMeDetails}
            aboutMeValidation={aboutMeValidation}
            educationArray={educationArray}
            lengthEducation={educationArray.length}
            listItemsEducation={listItemsEducation}
            experienceArray={experienceArray}
            lengthExperience={experienceArray.length}
            listItemsExperience={listItemsExperience}
            status={status}
            setStatus={setStatus}
          />
        </>
      ) : (
        <button onClick={onShow}>Edit</button>
      )}
    </section>
  );
}

function PreviewCV({
  activeColor,
  aboutMeDetails,
  aboutMeValidation,
  educationArray,
  experienceArray,
  lengthEducation,
  listItemsEducation,
  lengthExperience,
  listItemsExperience,
  status,
  setStatus,
}) {
  const dataCV = {
    firstName: aboutMeDetails.firstName,
    lastName: aboutMeDetails.lastName,
    email: aboutMeDetails.email,
    phone: aboutMeDetails.phone,
    description: aboutMeDetails.description,
    education: educationArray,
    experience: experienceArray,
  };

  const emailImg = new Image();
  emailImg.src = emailIcon;
  const phoneImg = new Image();
  phoneImg.src = phoneIcon;

  return (
    <div
      className="preview"
      style={{ display: "block", backgroundColor: activeColor }}
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
            submitAllTheforms("dataCV", dataCV, aboutMeValidation, setStatus)
          }
        >
          SUBMIT CV
        </button>
        {status === "typing" ? (
          <>{null}</>
        ) : (
          <>
            <p style={{ color: "#900", fontSize: "1.5rem" }}>{status}</p>
          </>
        )}
      </div>
      <br></br>
      <h2 style={{ textAlign: "center" }}>PREVIEW</h2>
      <section className="aboutMePreview">
        <article className="cardAboutMe">
          <p>First Name: {aboutMeDetails.firstName}</p>
          <p>Last Name: {aboutMeDetails.lastName}</p>
          <p style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            <img
              src={emailImg.src}
              width="20px"
              height="auto"
              style={{ backgroundColor: "lightblue", alignItems: "center" }}
            ></img>
            {aboutMeDetails.email}
          </p>
          <p style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            <img
              src={phoneImg.src}
              width="20px"
              height="auto"
              style={{ backgroundColor: "lightblue", alignItems: "center" }}
            ></img>
            {aboutMeDetails.phone.toString()}
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
          <p>{aboutMeDetails.description}</p>
        </article>
      </section>
      <br></br>
      {lengthEducation === 0 ? (
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
              {listItemsExperience}
            </ul>
          </section>
        </>
      )}
      {lengthExperience === 0 ? (
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
              {listItemsEducation}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}

export { Preview };
