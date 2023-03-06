import { numeralMap } from "./numeralMap";
//prettier-ignore
const pitchNumInA = {
  A: 0,
  'A#': 1, 'Bb': 1,
  B: 2,
  C: 3,
  'C#': 4, 'Db': 4,
  D: 5,
  'D#': 6, 'Eb': 6,
  E: 7,
  F: 8,
  'F#': 9, 'Gb': 9,
  G: 10,
  'G#': 11, 'Ab': 11,
};

const labels = {
  minor: "m",
  diminished: "dim",
  major: "",
  unknown: "",
};

const signs = {
  sharp: "#",
  flat: "b",
};

function getRootLabel(root, sign) {
  const rootLabel = Object.keys(pitchNumInA).find(
    (key) =>
      pitchNumInA[key] === pitchNumInA[root] &&
      (key.includes(sign) || key.length < 2)
  );
  return rootLabel;
}

function numeralToObj(numeral, key, sign = "#") {
  const { pitchNum, type } = numeralMap[numeral];
  const pitchNumInKey = (pitchNum + pitchNumInA[key] + 12) % 12;
  const root = Object.keys(pitchNumInA).find(
    (key) =>
      pitchNumInA[key] === pitchNumInKey &&
      (key.includes(sign) || key.length < 2)
  );
  return { root, type, typeLabel: labels[type], label: root + labels[type] };
}

function removeRepetitions(str) {
  return str
    .replace("mm", "m")
    .replace("dim°", "dim")
    .replace("mø", "ø")
    .replace("msus", "sus")
    .replace("madd", "m add");
}

export default class Chord {
  constructor(chordObj) {
    Object.assign(this, chordObj);
  }
  static fromNumeral(numeral, key, extension, signType) {
    const chord = { numeral, key, extension: extension || "" };
    Object.assign(chord, numeralToObj(numeral, key, signs[signType]));
    return new Chord(chord);
  }
  setRootSign(type) {
    if (!this.root.includes(signs[type])) {
      if (type === "sharp") this.root = getRootLabel(this.root, "#");
      else if (type === "flat") this.root = getRootLabel(this.root, "b");
      this.label = this.root + this.typeLabel;
    }
  }
  prepareToDisplay(settings) {
    if (settings.mainLabel === "numeral") {
      if (!settings.showBoth) {
        const numeral = this.numeral.includes("/")
          ? this.numeral.replace("/", "-/").split("-")
          : this.numeral;
        return {
          mainLabel: numeral,
          extension: this.extension.replace(/^([°])/i, ""),
          secondaryLabel: "",
        };
      } else {
        return {
          mainLabel: this.numeral,
          extension: "",
          secondaryLabel: removeRepetitions(this.label + this.extension),
        };
      }
    } else {
      return {
        mainLabel: this.root,
        extension: removeRepetitions(this.typeLabel + this.extension),
        secondaryLabel: this.numeral,
      };
    }
  }
}
