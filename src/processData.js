import $ from "jquery";
import fetchData from "./utils/http";

const REQUEST_USER_URL = "http://localhost:8080/users/1";

async function processUserData() {
  const userData = await fetchData(REQUEST_USER_URL);
  const { name, age, avatar, description } = userData;
  $(".avatar-img").attr("src", avatar);
  $(".user-name").html(name);
  $(".user-age").html(age);
  $(".aboutme-area").append(`<p>${description}</p>`);
  return userData;
}

export default processUserData;
