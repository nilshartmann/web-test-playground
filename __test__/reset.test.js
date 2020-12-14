const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../public/index.html"),
  "utf8"
);

beforeEach(() => {
  // check if jdsom can run script-elements in innerHTML
  document.documentElement.innerHTML = html.toString();
  //document.documentElement.innerHTML = "<h1>fasdfasd</h1>";
  require("../public/main.js");
});

test("Reset Button Works ", () => {
  expect(document.getElementById("clearButton")).toBeTruthy();
  expect(document.getElementById("login").value).toBeFalsy();

  document.getElementById("login").value = "moin, moin!";
  expect(document.getElementById("login").value).toBe("moin, moin!");

  document.getElementById("clearButton").click();
  expect(document.getElementById("login").value).toBeFalsy();
});
