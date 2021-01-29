import { expect } from "chai";
import nock from "nock";
import fs from "fs";
import { getUser } from "./githubApi";

describe("Github API", () => {
  before(() => {
    const resp = fs.readFileSync("./src/github-nock-response.json", "utf-8");
    nock("https://api.github.com").get("/users/tornord").reply(200, resp);
  });
  it("fetch", async () => {
    const res = await getUser("tornord");
    expect(res.login).to.equal("tornord");
    expect(res.name).to.equal("Tor Nordqvist");
  });
});
