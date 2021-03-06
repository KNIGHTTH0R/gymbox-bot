const config = require('./data/config.json');
const { getUserLoginDetails } = require('./dist/utils/login');
const { main } = require('./dist/booking');
const { log } = require('./dist/utils/logger');

const { email, password } = getUserLoginDetails(config);

const command = process.argv.indexOf('-c');

if (command === -1) {
  console.error(`
  Please provide a command to execute:
    - run: Book a class from the classes.json
    - add: Add a class to book to the classes.json (WIP)
  `);

  process.exit(1);
}

const commandValue = process.argv[command + 1];

if (commandValue === 'run') {
  log(`Run booking of classes process with email: ${email}`);
  main(email, password);
}
