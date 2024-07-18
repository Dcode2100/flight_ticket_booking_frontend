// write a funcction to get the current time in milliseconds

function getTime() {
  return new Date().getTime();
}

// write a function to get the current time in seconds

function getTimeInSeconds() {
  return getTime() / 1000;
}

// write a function to get the current time in minutes

function getTimeInMinutes() {
  return getTime() / 60000;
}

// write a function to get the current time in hours

function getTimeInHours() {
  return getTime() / 3600000;
}

function getEverything() {
  return {
    arrayofTime: [
      getTime(),
      getTimeInSeconds(),
      getTimeInMinutes(),
      getTimeInHours(),
    ],
  };
}

console.log(getEverything());
