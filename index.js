// Code your solution in this file.
function lowerCaseDrivers(array) {
  const new_array = []
  array.map(function(driver) {new_array.push(driver.toLowerCase())})
  return new_array
};

function nameToAttributes(array) {
  return array.map(function(driver) {
    const driverFirstName = driver.split(' ')[0];
    const driverLastName = driver.split(' ')[1];
    return { firstName: driverFirstName, lastName: driverLastName};
  })
};

function attributesToPhrase(array) {
  return array.map(function(driver) {
    return `${driver['name']} is from ${driver['hometown']}`
  })
}
