import { InputTextOpt, InputDate } from "./CustomInput";
import { deleteObject, editObject } from "./auxiliaryFunctions.js";

function Education({
  title,
  initialColor,
  bgColor,
  isActive,
  onShow,
  schoolName,
  setSchoolName,
  countryOfSchool,
  setCountryOfSchool,
  titleOfStudy,
  setTitleOfStudy,
  dateOfStudy,
  setDateOfStudy,
  educationArray,
  setEducationArray,
  addStudies,
  inputFields
}) {
  let activeColor = isActive ? bgColor : initialColor;

 /*  const inputFields = [
    "titleOfStudy",
    "dateOfStudy",
    "schoolName",
    "countryOfSchool",
  ]; */
  const listItems = educationArray.map((e) => (
    <li key={e.id} id={e.id}>
      <div>
        <p>
          <b>
            {e["education"].titleOfStudy.toUpperCase() + " - " + e["education"].dateOfStudy}
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
        onClick={() => deleteObject(educationArray, e.id, setEducationArray)}
      >
        remove
      </button>
      <button
        onClick={() => editObject(educationArray, e.id, setEducationArray, inputFields, 'education')}
      >
        EDIT
      </button>
    </li>
  ));
  
  return (
    <section className="headerSection" style={{ backgroundColor: activeColor }}>
      <h2>{title}</h2>
      {isActive ? (
        <>
          <FormEducation
            activeColor={activeColor}
            schoolName={schoolName}
            setSchoolName={setSchoolName}
            countryOfSchool={countryOfSchool}
            setCountryOfSchool={setCountryOfSchool}
            titleOfStudy={titleOfStudy}
            setTitleOfStudy={setTitleOfStudy}
            dateOfStudy={dateOfStudy}
            setDateOfStudy={setDateOfStudy}
            addStudies={addStudies}
            length={educationArray.length}
            listItems={listItems}
          />
        </>
      ) : (
        <button onClick={onShow}>Edit</button>
      )}
    </section>
  );
}

function FormEducation({
  activeColor,
  schoolName,
  setSchoolName,
  countryOfSchool,
  setCountryOfSchool,
  titleOfStudy,
  setTitleOfStudy,
  dateOfStudy,
  setDateOfStudy,
  addStudies,
  length,
  listItems,
}) {
  return (
    <>
      <div
        className="preview"
        style={{ display: "block", backgroundColor: activeColor }}
      >
        <form id="education" autoComplete="off" noValidate>
          <div>
            <InputTextOpt
              key="titleOfStudy"
              label={"title Of the Study: ".toUpperCase()}
              id="titleOfStudy"
              value={titleOfStudy}
              onChange={(event) => setTitleOfStudy(event.target.value)}
            />
          </div>
          <div>
            <InputTextOpt
              key="schoolName"
              label={"university/school: ".toUpperCase()}
              id="schoolName"
              value={schoolName}
              onChange={(event) => setSchoolName(event.target.value)}
            />
          </div>
          <div>
            <InputTextOpt
              key="countryOfSchool"
              label={"School's country: ".toUpperCase()}
              id="countryOfSchool"
              value={countryOfSchool}
              onChange={(event) => setCountryOfSchool(event.target.value)}
            />
          </div>
          <div >
            <InputDate
              key="dateOfStudy"
              label={"date study end: ".toUpperCase()}
              id="dateOfStudy"
              value={dateOfStudy}
              onChange={(event) => setDateOfStudy(event.target.value)}
            />
          </div>
          <br></br>
        </form>
        <button onClick={addStudies}>SAVE / ADD MORE</button>
        <br></br>
        {length === 0 ? (
          <>{null}</>
        ) : (
          <>
            <ul>{listItems}</ul>
          </>
        )}
      </div>
    </>
  );
}



export { Education };
