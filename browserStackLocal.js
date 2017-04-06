import { exec } from 'child_process';
require('dotenv').config();
const cmd = `${__dirname}/bin/BrowserStackLocal --key ${process.env.BROWSERSTACK_AUTOMATE_KEY}`;

exec(cmd, (error, stdout, stderr) => {
  if (error) {
    console.error('Error starting BrowserStack Local', error);
    return;
  }
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
  return;
});

console.log('BrowserStackLocal started...');
