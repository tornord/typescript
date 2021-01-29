import axios from "axios";

export async function getUser(userId) {
  const url = `https://api.github.com/users/${userId}`;
  const { data } = await axios.get(url);
  return data;
}

