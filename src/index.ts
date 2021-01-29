import { getUser } from "./githubApi";

async function main() {
  const data = await getUser("tornord");
  console.log(data);
}

main();