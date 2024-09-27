function deleteObject(arg1, arg2, arg3) {
  // arg1 is the array with the items
  // arg2 is the id the item to be removed
  // arg3 is the set function for the useState()

  if (confirm("Are you sure you want to delete this?") === true) {
    let newArray = [...arg1];
    newArray = newArray.filter((e) => e.id !== arg2);
    arg3(newArray);
  }
}

function editObject(arg1, arg2, arg3, arg4, arg5) {
  // arg1 is the array with the items
  // arg2 is the id the item to be edited
  // arg3 is the set function for the useState()
  // arg4 is the array with the fields names to be edited
  // arg5 can be education or experience

  let newArray = [...arg1];
  let element = newArray.filter((e) => e.id === arg2);

  const ul = document.getElementById(arg2);
  const ulDiv = document.createElement("form");
  ulDiv.classList.add("editList");

  arg4.forEach((field) => {
    const input = document.createElement("input");
    input.setAttribute("id", `field${field}`);

    if (field.slice(0, 4) === "date") {
      input.setAttribute("type", "month");
    }
    input.setAttribute("value", element[0][arg5][field]);

    ulDiv.appendChild(input);
  });

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.textContent = "save changes";
  button.classList.add("saveChanges");

  ulDiv.addEventListener("submit", function (event) {
    event.preventDefault();
    arg4.forEach((field) => {
      element[0][arg5][field] = document.getElementById(`field${field}`).value;
    });
    newArray.map((e) => {
      if (e.id === arg2) {
        e = element;
      }
    });
    arg3(newArray);
    ulDiv.remove();
  });

  ul.appendChild(ulDiv);
  ulDiv.appendChild(button);
}

function inlineValidMissing(arg1, arg2, arg3, arg4) {
  const input = document.createElement("input");
  input.setAttribute("type", arg1);
  if (arg2 === "required") {
    input.setAttribute("required", "");
  }
  input.setAttribute("value", arg3);
  arg4(input.validity.valueMissing);
}

function inlineValid(arg1, arg2, arg3) {
  const input = document.createElement("input");
  input.setAttribute("type", arg1);
  input.setAttribute("value", arg2);
  arg3(input.validity.valid);
}

function phoneValidation(arg1, arg2) {
  let numbersValidation = false;
  let lengthValidation = false;
  let finalValidation = false;

  let numbers = /[0-9]{5}/g;

  if (arg1 !== "" && arg1.match(numbers)) {
    numbersValidation = true;
  } else {
    numbersValidation = false;
  }

  if (arg1.length === 10) {
    lengthValidation = true;
  } else {
    lengthValidation = false;
  }

  switch (numbersValidation) {
    case false:
      break;
    default:
      switch (lengthValidation) {
        case false:
          break;
        default:
          finalValidation = true;
      }
  }

  arg2(finalValidation);
}

function sendDataToLocal(arg1, arg2) {
  /* arg1 is the name of the key - arg2 is the array with the data */

  let key = arg1;
  let dataToSend = arg2;

  console.log(key);
  console.log(dataToSend);

  localStorage.setItem(key, JSON.stringify(dataToSend));
}

function submitAllTheforms(arg1, arg2, arg3, arg4) {
  // arg1 is the keyname to send the data
  // arg2 is the consolidate data
  // arg3 is the final validation
  // arg4 is the setStatus useState()

  if (arg3 === true) {
    sendDataToLocal(arg1, arg2);
    arg4("Sending...");
    setTimeout(() => {
      arg4("Sent");
    }, 1000);
    setTimeout(() => {
      arg4("typing");
    }, 3000);
  } else {
    arg4("Invalid Data - Fix and try again");
    setTimeout(() => {
      arg4("typing");
    }, 1000);
  }
}

export {
  deleteObject,
  editObject,
  sendDataToLocal,
  submitAllTheforms,
  inlineValidMissing,
  inlineValid,
  phoneValidation,
};
