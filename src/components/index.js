import { getNode } from "../utils/getNode";
import { quizData, elementsArray, glossesArray } from "./jsondata";
import "../../style.scss";

const shuffleArray = (arr) => [...arr.sort(() => Math.random() - 0.5)];

const getFullQuiz = ({ element, gloss, example }) => {
  const titleHtml = /* html */ `<h2>Element: ${element}</h2>
  <h3>Example: ${example}</h3>
    `;

  const glosses = shuffleArray(glossesArray)
    .filter((ele) => ele !== gloss)
    .slice(0, 4);

  const correctOption = `<li id-correct="true">${gloss}</li>`;

  const incorrectOption = glosses.reduce((acc, crnt) => {
    return [`<li id-correct="false">${crnt}</li>\n`, ...acc];
  }, []);

  return `${titleHtml} <ol>${shuffleArray([
    ...incorrectOption,
    correctOption,
  ]).join("")}</ol>`;
};

const getRootContainer = (dataList, quizNum) => {
  const containerHTML = /* html */ `
    <div class = "root-container">
      <h1>Gloss-Quiz${quizNum + 1}</h1>
      <section class="text-contents" >

      ${getFullQuiz(dataList[idx])}
      </section>
    </div>
  `;
  getNode("#root").insertAdjacentHTML("afterbegin", containerHTML);
};

const showAndHide = (element, time) => {
  element.classList.remove("hide");
  setTimeout(() => {
    element.classList.add("hide");
  }, time);
};

const shuffledData = shuffleArray(quizData);
let idx = 0;
const incorrectQuizIdxSet = new Set();

getRootContainer(shuffledData, idx);

getNode("#root").addEventListener("click", (e) => {
  if (e.target.tagName !== "LI") return;

  if (e.target.getAttribute("id-correct") === "true") {
    idx += 1;

    if (idx === 10 /* shuffledData.length */) {
      getNode(".root-container").remove();

      if (incorrectQuizIdxSet.size === 0) {
        getNode("#root").insertAdjacentHTML(
          "afterbegin",
          '<h1 class="cong">Congratulations!!!!!</h1>'
        );
        return;
      } else {
        getNode("#root").insertAdjacentHTML(
          "afterbegin",
          showIncorrectList(incorrectQuizIdxSet)
        );
        return;
      }
    }

    getNode(".root-container").remove();
    getRootContainer(shuffledData, idx);
    showAndHide(getNode(".O"), 1500);
  } else {
    showAndHide(getNode(".X"), 500);
    incorrectQuizIdxSet.add(idx);
  }
  console.log(showIncorrectList(incorrectQuizIdxSet));
});

const showIncorrectList = (incorrectSet) => {
  let result = "<h1>Incorrect Words List!</h1>";

  incorrectSet.forEach((ele) => {
    result += `<li><p>element: ${shuffledData[ele].element}</p> <p>gloss: ${shuffledData[ele].gloss}</p> <p>examples: ${shuffledData[ele].example}</p></li>`;
  });

  const pageHTML = /* html */ `<ol>
    ${result}
  </ol>`;

  return pageHTML;
};
