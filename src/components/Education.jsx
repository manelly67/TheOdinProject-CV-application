import { InputTextOpt, InputDate } from "./CustomInput";
import { deleteObject, editObject } from "./auxiliaryFunctions.js";

function Education(props) {
  let activeColor = props.isActive ? props.bgColor : props.initialColor;

  const listItems = props.educationArray.map((e) => (
    <li key={e.id} id={e.id}>
      <div>
        <p>
          <b>
            {e["education"].titleOfStudy.toUpperCase() +
              " - " +
              e["education"].dateOfStudy}
          </b>
        </p>
        <p>
          {" " +
            e["education"].schoolName.toUpperCase() +
            " / " +
            e["education"].countryOfSchool}
        </p>
      </div>
      <button
        onClick={() =>
          deleteObject(props.educationArray, e.id, props.setEducationArray)
        }
      >
        remove
      </button>
      <button
        onClick={() =>
          editObject(
            props.educationArray,
            e.id,
            props.setEducationArray,
            props.inputFields,
            "education"
          )
        }
      >
        EDIT
      </button>
    </li>
  ));

  return (
    <section className="headerSection" style={{ backgroundColor: activeColor }}>
      <h2>{props.title}</h2>
      {props.isActive ? (
        <>
          <FormEducation
            activeColor={activeColor}
            schoolName={props.schoolName}
            setSchoolName={props.setSchoolName}
            countryOfSchool={props.countryOfSchool}
            setCountryOfSchool={props.setCountryOfSchool}
            titleOfStudy={props.titleOfStudy}
            setTitleOfStudy={props.setTitleOfStudy}
            dateOfStudy={props.dateOfStudy}
            setDateOfStudy={props.setDateOfStudy}
            addStudies={props.addStudies}
            length={props.educationArray.length}
            listItems={listItems}
          />
        </>
      ) : (
        <button onClick={props.onShow}>Edit</button>
      )}
    </section>
  );
}

function FormEducation(props) {
  return (
    <>
      <div
        className="preview"
        style={{ display: "block", backgroundColor: props.activeColor }}
      >
        <form id="education" autoComplete="off" noValidate>
          <div>
            <InputTextOpt
              key="titleOfStudy"
              label={"title Of the Study: ".toUpperCase()}
              id="titleOfStudy"
              value={props.titleOfStudy}
              onChange={(event) => props.setTitleOfStudy(event.target.value)}
            />
          </div>
          <div>
            <InputTextOpt
              key="schoolName"
              label={"university/school: ".toUpperCase()}
              id="schoolName"
              value={props.schoolName}
              onChange={(event) => props.setSchoolName(event.target.value)}
            />
          </div>
          <div>
            <InputTextOpt
              key="countryOfSchool"
              label={"School's country: ".toUpperCase()}
              id="countryOfSchool"
              value={props.countryOfSchool}
              onChange={(event) => props.setCountryOfSchool(event.target.value)}
            />
          </div>
          <div>
            <InputDate
              key="dateOfStudy"
              label={"date study end: ".toUpperCase()}
              id="dateOfStudy"
              value={props.dateOfStudy}
              onChange={(event) => props.setDateOfStudy(event.target.value)}
            />
          </div>
          <br></br>
        </form>
        <button onClick={props.addStudies}>SAVE / ADD MORE</button>
        <br></br>
        {props.length === 0 ? (
          <>{null}</>
        ) : (
          <>
            <ul>{props.listItems}</ul>
          </>
        )}
      </div>
    </>
  );
}

export { Education };
