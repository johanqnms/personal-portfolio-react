const text = "Welcome to JEST";
const countries = ["EE UU", "Colombia", "Spain", "Japan"];
const reserveString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};
const reserveStringPromise = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};
test("Testing Project React JS", () => {
  expect(text).toMatch(/Welcome/);
});

test("Testing Array Elements", () => {
  expect(countries).toContain("Spain");
});
test("Testing Is Greater than", () => {
  expect(20).toBeGreaterThan(5);
});
test("Checking Boolean", () => {
  expect(true).toBeTruthy();
});
test("Testing Callback Function", () => {
  reserveString("React JS", (str) => {
    expect(str).toBe("SJ tcaeR");
  });
});
test("Testing Promise Function", () => {
  return reserveStringPromise("JEST").then((string) => {
    expect(string).toBe("TSEJ");
  });
});
test("Testing Async Await", async () => {
  const string = await reserveStringPromise("Fullstack");
  expect(string).toBe("kcatslluF");
});

afterAll(() => console.log("All tests have been executed"));
