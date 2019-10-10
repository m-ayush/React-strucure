import { fetch } from "./Fetch";

function login(user) {
  console.log("calling user=>", user);
  return fetch("user/login", user);
}

export const UserService = {
  login
};
