const jsonString = "invalid json";

try {
  JSON.parse(jsonString);
} catch (error) {
  console.log("Invalid JSON!");
} finally {
  console.log("Parsing attempt done.");
}