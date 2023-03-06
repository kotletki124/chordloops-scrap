import { settings } from "./settings";

export const settingsDOMElement = document.createElement("div");
settingsDOMElement.classList.add("labelSwitch");

const radioContainer = document.createElement("div");

function handleRadioChange(event) {
  if (settings.mainLabel !== event.target.value) {
    [settings.mainLabel, settings.secondaryLabel] = [
      settings.secondaryLabel,
      settings.mainLabel,
    ];
  }
}

// Create the first radio button
const letterRadio = document.createElement("input");
letterRadio.id = "letterRadio";
letterRadio.type = "radio";
letterRadio.name = "labelSwitch";
letterRadio.value = "letter";
letterRadio.checked = settings.mainLabel === "letter";
letterRadio.addEventListener("change", handleRadioChange);

// Create the label for the first radio button
const letterLabel = document.createElement("label");
letterLabel.htmlFor = "letterRadio";
letterLabel.appendChild(document.createTextNode("Letters"));

// Create the second radio button
const numeralRadio = document.createElement("input");
numeralRadio.id = "numeralRadio";
numeralRadio.type = "radio";
numeralRadio.name = "labelSwitch";
numeralRadio.value = "numeral";
numeralRadio.checked = settings.mainLabel === "numeral";
numeralRadio.addEventListener("change", handleRadioChange);

// Create the label for the second radio button
const numeralLabel = document.createElement("label");
numeralLabel.htmlFor = "numeralRadio";
numeralLabel.appendChild(document.createTextNode("Numerals"));

radioContainer.appendChild(letterRadio);
radioContainer.appendChild(letterLabel);
radioContainer.appendChild(numeralRadio);
radioContainer.appendChild(numeralLabel);

const secondRowContainer = document.createElement("div");
secondRowContainer.classList.add("secondRowContainer");

const checkboxContainer = document.createElement("div");
checkboxContainer.classList.add("checkboxContainer");

function handleCheckboxChange() {
  settings.showBoth = this.checked;
}

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "showBoth";
checkbox.checked = settings.showBoth;
checkbox.addEventListener("change", handleCheckboxChange);

// Create the label for the checkbox
const checkboxLabel = document.createElement("label");
checkboxLabel.htmlFor = "showBoth";
checkboxLabel.appendChild(document.createTextNode("Show both"));

// Append the checkbox and label to the DOM
checkboxContainer.appendChild(checkboxLabel);
checkboxContainer.appendChild(checkbox);

// create the select element
const signSelect = document.createElement("select");

function handleSelectChange(event) {
  settings.sign = event.target.value;
}

// create the sharp option element
const sharpOption = document.createElement("option");
sharpOption.value = "sharp";
sharpOption.textContent = "Sharp";
sharpOption.selected = settings.sign === "sharp";

// create the flat option element
const flatOption = document.createElement("option");
flatOption.value = "flat";
flatOption.textContent = "Flat";
flatOption.selected = settings.sign === "flat";

// add the option elements to the select element
signSelect.appendChild(sharpOption);
signSelect.appendChild(flatOption);
signSelect.addEventListener("change", handleSelectChange);

secondRowContainer.appendChild(signSelect);
secondRowContainer.appendChild(checkboxContainer);

settingsDOMElement.appendChild(radioContainer);
settingsDOMElement.appendChild(secondRowContainer);
