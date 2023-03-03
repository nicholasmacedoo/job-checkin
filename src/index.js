import cron from 'node-cron'
import { exec } from 'node:child_process'

/** Run script to checkin in 9, 12,13,18h */
cron.schedule('0 9,12,13,18 * * 1-5', () => {
    console.log('checkin: ' + new Date().getHours() + 'h');
    exec('"C:/Program Files/Google/Chrome/Application/chrome.exe" -url "file:///C:/job-checkin.html?direct=1&macro=Jobs/Ponto"', (err, output) => {
        if(err) return console.log('error: ', err)
        
        console.log("Output: \n", output)
    })
});

/** 
 * Roadmap
 *  - In case of error, send mail or sms information
 */