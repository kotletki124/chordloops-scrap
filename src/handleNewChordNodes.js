import Chord from "./Chord";
import {
  settings,
  checkIfSubscribed,
  subscribeToSettingsChange,
  unsubscribeFromSettingsChange,
} from "./settings";

function groupByParent(nodes) {
  const groups = new Map();

  nodes.forEach((node) => {
    const parent = node.parentNode;
    const group = groups.get(parent) || [];
    group.push(node);
    groups.set(parent, group);
  });

  return [...groups].map(([_, nodes]) => nodes);
}

function initNode(chord, node = document.createElement("div")) {
  if (!node.classList.contains("labelContainer"))
    node.classList.add("labelContainer");
  if (!node.dataset.script_chord)
    node.dataset.script_chord = JSON.stringify(chord);

  const updateNode = (node, newSettings = settings) => {
    chord.setRootSign(newSettings.sign);
    const { mainLabel, extension, secondaryLabel } =
      chord.prepareToDisplay(newSettings);
    const mainLabelHTML = Array.isArray(mainLabel)
      ? `
        <span class="RN modified">${mainLabel[0]}</span>
        <span class="Ext">${extension}</span>
        <span class="RN modified">${mainLabel[1]}</span>
      `
      : `
        <span class="RN modified">${mainLabel}</span>
        <span class="Ext">${extension}</span>
      `;
    node.innerHTML = `
    ${mainLabelHTML}
    <span class="LStag modified ${newSettings.showBoth ? "" : "hidden"}">
        ${secondaryLabel}
    </span>
    `.replace(/\s+/g, " ");
  };

  updateNode(node);
  subscribeToSettingsChange(node, updateNode);
  return node;
}

function replaceNodes(uninitializedNodes) {
  const numeral = uninitializedNodes
    .filter((node) => node.classList.contains("RN"))
    .map((node) => node.textContent)
    .join("");
  const extSpan = uninitializedNodes.find((node) =>
    node.classList.contains("LStag")
  );
  const extension = extSpan && extSpan.textContent;
  const key = loopFile[currentLoopIndex].key;
  const chord = Chord.fromNumeral(numeral, key, extension, settings.sign);

  const newNode = initNode(chord);
  uninitializedNodes[0].replaceWith(newNode);
  uninitializedNodes.slice(1).forEach((node) => node.remove());
}

function getNodesAndTheirDescendants(nodeList, selector = "*") {
  return [...nodeList]
    .filter((node) => node instanceof Element)
    .flatMap((node) => [node, ...node.querySelectorAll(selector)]);
}

export function handleNewChordNodes(mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
      const adddedNodes = getNodesAndTheirDescendants(mutation.addedNodes);

      const nodesToResubscribe = adddedNodes.filter(
        (node) =>
          node.classList.contains("labelContainer") && !checkIfSubscribed(node)
      );
      nodesToResubscribe.forEach((node) => {
        const chord = new Chord(JSON.parse(node.dataset.script_chord));
        initNode(chord, node);
      });

      const uninitializedNodes = adddedNodes.filter(
        (node) =>
          !node.classList.contains("modified") &&
          (node.classList.contains("RN") || node.classList.contains("LStag"))
      );
      groupByParent(uninitializedNodes).forEach((nodeGroup) => {
        replaceNodes(nodeGroup);
      });
    }
    if (mutation.removedNodes && mutation.removedNodes.length > 0) {
      const removedNodes = getNodesAndTheirDescendants(
        mutation.removedNodes,
        ".labelContainer"
      );

      removedNodes.forEach((node) => unsubscribeFromSettingsChange(node));
    }
  }
}
