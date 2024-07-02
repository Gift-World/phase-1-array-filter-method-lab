// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}
findMatching(drivers, "Bobby");
function fuzzyMatch(drivers, matching) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(matching.toLowerCase())
  );
}
console.log(fuzzyMatch(drivers, "S"));
function matchName(drivers, name) {
  return drivers.filter(
    (driver) => driver.name.toLowerCase() === name.toLowerCase()
  );
}
