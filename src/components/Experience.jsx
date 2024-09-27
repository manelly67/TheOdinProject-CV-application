import { InputTextOpt, InputDate, InputArea } from "./CustomInput";
import { deleteObject, editObject } from "./auxiliaryFunctions.js";

function Experience({
  title,
  initialColor,
  bgColor,
  isActive,
  onShow,
  jobPosition,
  setJobPosition,
  companyName,
  setCompanyName,
  dateStartJob,
  setDateStartJob,
  dateEndJob,
  setDateEndJob,
  jobDescription,
  setJobDescription,
  experienceArray,
  setExperienceArray,
  addExperience,
  inputFields,
}) {
  let activeColor = isActive ? bgColor : initialColor;

  const listItems = experienceArray.map((e) => (
    <li key={e.id} id={e.id}>
      <div>
        <p>
          <b>
            {e["experience"].jobPosition.toUpperCase() +
              " - " +
              e["experience"].companyName}
          </b>
        </p>
        <p>
          {"START: " +
            e["experience"].dateStartJob +
            " - END: " +
            e["experience"].dateEndJob}
        </p>
        <p>{e["experience"].jobDescription}</p>
      </div>
      <button
        onClick={() => deleteObject(experienceArray, e.id, setExperienceArray)}
      >
        remove
      </button>
      <button
        onClick={() =>
          editObject(
            experienceArray,
            e.id,
            setExperienceArray,
            inputFields,
            "experience"
          )
        }
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
          <FormExperience
            activeColor={activeColor}
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
            addExperience={addExperience}
            length={experienceArray.length}
            listItems={listItems}
          />
        </>
      ) : (
        <button onClick={onShow}>Edit</button>
      )}
    </section>
  );
}

function FormExperience({
  activeColor,
  jobPosition,
  setJobPosition,
  companyName,
  setCompanyName,
  dateStartJob,
  setDateStartJob,
  dateEndJob,
  setDateEndJob,
  jobDescription,
  setJobDescription,
  addExperience,
  length,
  listItems,
}) {
  return (
    <>
      <div
        className="preview"
        style={{ display: "block", backgroundColor: activeColor }}
      >
        <form id="experience" autoComplete="off" noValidate>
          <div>
            <InputTextOpt
              key="jobPosition"
              label={"Job Position: ".toUpperCase()}
              id="jobPosition"
              value={jobPosition}
              onChange={(event) => setJobPosition(event.target.value)}
            />
          </div>
          <div>
            <InputTextOpt
              key="companyName"
              label={"Company Name: ".toUpperCase()}
              id="companyName"
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
            />
          </div>
          <div>
            <InputDate
              key="dateStartJob"
              label={"start date: ".toUpperCase()}
              id="dateStartJob"
              value={dateStartJob}
              onChange={(event) => setDateStartJob(event.target.value)}
            />
          </div>
          <div>
            <InputDate
              key="dateEndJob"
              label={"end date: ".toUpperCase()}
              id="dateEndJob"
              value={dateEndJob}
              onChange={(event) => setDateEndJob(event.target.value)}
            />
          </div>
          <div>
            <InputArea
              key="jobDescription"
              label={"Job Description: ".toUpperCase()}
              id="jobDescription"
              value={jobDescription}
              onChange={(event) => {
                setJobDescription(event.target.value);
              }}
            />
          </div>
          <br></br>
        </form>
        <button onClick={addExperience}>SAVE / ADD MORE</button>
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

export { Experience };
