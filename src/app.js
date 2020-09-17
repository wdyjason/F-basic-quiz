import "./style/index.scss";
import $ from "jquery";
import fetchData from "./utils/http";
import getEduItem from "./compoent/educationItem";
import { validatePath, parsePath } from "./utils/urlTools";

const BASE_URL = "http://localhost:8080/users/";

// TODO feedback：可以将渲染逻辑和获取api数据的逻辑分开
async function processUserData(pathVar) {
  const userData = await fetchData(BASE_URL + pathVar);
  const { name, age, avatar, description } = userData;
  $(".avatar-img").attr("src", avatar);
  $(".user-name").html(name);
  $(".user-age").html(age);
  $(".aboutme-area").append(`<p class="about-me-content">${description}</p>`);
  return userData;
}
async function processEduData(pathVar) {
  const eduData = await fetchData(`${BASE_URL + pathVar}/educations`);

  eduData.forEach((item) => {
    $(".edu-list").append(getEduItem(item));
  });
  return eduData;
}

const path = window.location.pathname;

if (validatePath(path)) {
  const pathVal = parsePath(path);
  processUserData(pathVal);
  processEduData(pathVal);
}

export { processUserData, processEduData };
