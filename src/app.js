import "./style/index.scss";
import $ from "jquery";
import fetchData from "./utils/http";
import getEduItem from "./compoent/educationItem";

const REQUEST_USER_URL = "http://localhost:8080/users/1";

const REQUEST_EDU_URL = "http://localhost:8080/users/1/educations";

async function processUserData() {
  const userData = await fetchData(REQUEST_USER_URL);
  const { name, age, avatar, description } = userData;
  $(".avatar-img").attr("src", avatar);
  $(".user-name").html(name);
  $(".user-age").html(age);
  $(".aboutme-area").append(`<p class="about-me-content">${description}</p>`);
  return userData;
}
async function processEduData() {
  const eduData = await fetchData(REQUEST_EDU_URL);

  eduData.forEach((item) => {
    $(".edu-list").append(getEduItem(item));
  });
}
processUserData();
processEduData();

export default processUserData;
