const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../public/index.html"),
  "utf8"
);

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});

test("Reset Button Works ", () => {
  require("../public/main.js");

  expect(document.getElementById("clearButton")).toBeTruthy();
  expect(document.getElementById("login").value).toBeFalsy();

  document.getElementById("login").value = "moin, moin!";
  expect(document.getElementById("login").value).toBe("moin, moin!");

  document.getElementById("clearButton").click();
  expect(document.getElementById("login").value).toBeFalsy();
});
