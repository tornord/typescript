import axios from "axios";

async function main() {
  const user = "tornord";
  const url = `https://api.github.com/users/${user}`;
  const { data } = await axios.get(url);
  console.log(data);
}

main();