import { handleNewChordNodes } from "./handleNewChordNodes";
import { settingsDOMElement } from "./settingsUI";
import "./styles.css";

let earTrainerUI = document.querySelector(".earTrainerUI");

const initObserver = new MutationObserver(function (mutationList) {
  for (const mutation of mutationList) {
    if (!earTrainerUI) {
      const addedNodes = [...mutation.addedNodes];
      earTrainerUI = addedNodes.find(
        (node) => node.classList && node.classList.contains("earTrainerUI")
      );
    }
    if (earTrainerUI) {
      initObserver.disconnect();
      const mainObserver = new MutationObserver(handleNewChordNodes);
      mainObserver.observe(earTrainerUI, { childList: true, subtree: true });
      handleNewChordNodes([
        { addedNodes: earTrainerUI.querySelectorAll(".RN, .LStag") },
      ]);
      break;
    }
  }
});

initObserver.observe(document.body, { childList: true, subtree: true });

const controls = document.createElement("div");
controls.classList.add("controls");

controls.appendChild(settingsDOMElement);

const insertAfterThis = document.querySelector(".ETnext");
insertAfterThis.insertAdjacentElement("afterend", controls);
