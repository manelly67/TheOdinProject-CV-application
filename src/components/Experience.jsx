import { InputTextOpt, InputDate, InputArea } from "./CustomInput";
import { deleteObject, editObject } from "./auxiliaryFunctions.js";

function Experience(props) {
  let activeColor = props.isActive ? props.bgColor : props.initialColor;

  const listItems = props.experienceArray.map((e) => (
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
        onClick={() =>
          deleteObject(props.experienceArray, e.id, props.setExperienceArray)
        }
      >
        remove
      </button>
      <button
        onClick={() =>
          editObject(
            props.experienceArray,
            e.id,
            props.setExperienceArray,
            props.inputFields,
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
      <h2>{props.title}</h2>
      {props.isActive ? (
        <>
          <FormExperience
            activeColor={activeColor}
            jobPosition={props.jobPosition}
            setJobPosition={props.setJobPosition}
            companyName={props.companyName}
            setCompanyName={props.setCompanyName}
            dateStartJob={props.dateStartJob}
            setDateStartJob={props.setDateStartJob}
            dateEndJob={props.dateEndJob}
            setDateEndJob={props.setDateEndJob}
            jobDescription={props.jobDescription}
            setJobDescription={props.setJobDescription}
            experienceArray={props.experienceArray}
            setExperienceArray={props.setExperienceArray}
            addExperience={props.addExperience}
            length={props.experienceArray.length}
            listItems={listItems}
          />
        </>
      ) : (
        <button onClick={props.onShow}>Edit</button>
      )}
    </section>
  );
}

function FormExperience(props) {
  return (
    <>
      <div
        className="preview"
        style={{ display: "block", backgroundColor: props.activeColor }}
      >
        <form id="experience" autoComplete="off" noValidate>
          <div>
            <InputTextOpt
              key="jobPosition"
              label={"Job Position: ".toUpperCase()}
              id="jobPosition"
              value={props.jobPosition}
              onChange={(event) => props.setJobPosition(event.target.value)}
            />
          </div>
          <div>
            <InputTextOpt
              key="companyName"
              label={"Company Name: ".toUpperCase()}
              id="companyName"
              value={props.companyName}
              onChange={(event) => props.setCompanyName(event.target.value)}
            />
          </div>
          <div>
            <InputDate
              key="dateStartJob"
              label={"start date: ".toUpperCase()}
              id="dateStartJob"
              value={props.dateStartJob}
              onChange={(event) => props.setDateStartJob(event.target.value)}
            />
          </div>
          <div>
            <InputDate
              key="dateEndJob"
              label={"end date: ".toUpperCase()}
              id="dateEndJob"
              value={props.dateEndJob}
              onChange={(event) => props.setDateEndJob(event.target.value)}
            />
          </div>
          <div>
            <InputArea
              key="jobDescription"
              label={"Job Description: ".toUpperCase()}
              id="jobDescription"
              value={props.jobDescription}
              onChange={(event) => {
                props.setJobDescription(event.target.value);
              }}
            />
          </div>
          <br></br>
        </form>
        <button onClick={props.addExperience}>SAVE / ADD MORE</button>
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

export { Experience };
