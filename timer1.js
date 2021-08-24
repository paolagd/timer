//read command and unliminted chars are alarms 
const readArguments = () => {
  return process.argv.splice(2);
}

const timer = () => {
  let alarms = readArguments();
  //no numbers are provided:should end immediately
  if (alarms.length === 0) {
    console.log("No numbers were provided. Exiting...");
    process.exit();
  }

  let alarmsToBeSet = alarms.filter((element) => {
    if (element > 0 && !isNaN(element)) {
      return element;
    }
  })

  setAlarms(alarmsToBeSet)
}

const setAlarms = (alarmsToBeSet) => {
  for (const alarm of alarmsToBeSet) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write('alarm!\n' );
    }, alarm * 1000);
  }
}

timer();

