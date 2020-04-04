import {createSiteMenuTemplate} from "./components/site-menu-template";
import {createFilterTemplate} from "./components/filter-template";
import {createBoardTemplate} from "./components/board-template";
import {createTaskEditTemplate} from "./components/task-edit-template";
import {createTaskTemplate} from "./components/task-template";
import {createLoadMoreButtonTemplate} from "./components/load-more-buton-template";

const TASK_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createBoardTemplate());

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(taskListElement, createTaskEditTemplate());

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate());
}

render(boardElement, createLoadMoreButtonTemplate());
