#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import chalk from 'chalk'
import boxen from 'boxen'

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'cyan'
}
// Text, chalk definitions
let data = {
  'name': chalk.white.bold('Carlo Bollini /'),
  'handle': chalk.green.bold('carlobolla'),
  'work': chalk.white('Fullstack Developer'),
  'backend': chalk.white('C# .NET | NodeJS | Java | Python'),
  'frontend': chalk.white('Angular | React'),
  'database': chalk.white('SQL | MySQL | MongoDB | DynamoDB'),
  'cloud': chalk.white('Microsoft Azure | Amazon AWS'),
  'twitter': chalk.green.underline('https://twitter.com/carlobolla'),
  'github': chalk.green.underline('https://github.com/carlobolla'),
  'linkedin': chalk.green.underline('https://www.linkedin.com/in/carlo-bollini'),
  'web': chalk.green.underline('https://carlobollini.com'),
  'npx': chalk.green('npx carlobolla'),
  'labelWork': chalk.white.bold('Work: '.padStart(11, ' ')),
  'labelBackend': chalk.white.bold('Backend: '.padStart(11, ' ')),
  'labelFrontend': chalk.white.bold('Frontend: '.padStart(11, ' ')),
  'labelDatabase': chalk.white.bold('Database: '.padStart(11, ' ')),
  'labelCloud': chalk.white.bold('Cloud: '.padStart(11, ' ')),
  'labelGitHub': chalk.white.bold('GitHub: '.padStart(11, ' ')),
  'labelLinkedIn': chalk.white.bold('LinkedIn: '.padStart(11, ' ')),
  'labelWeb': chalk.white.bold('Web: '.padStart(11, ' ')),
  'labelCard': chalk.white.bold('Card: '.padStart(11, ' '))
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork} ${data.work}`
const backend = `${data.labelBackend} ${data.backend}`
const frontend = `${data.labelFrontend} ${data.frontend}`
const database = `${data.labelDatabase} ${data.database}`
const cloud = `${data.labelCloud} ${data.cloud}`
const githubing = `${data.labelGitHub} ${data.github}`
const linkedining = `${data.labelLinkedIn} ${data.linkedin}`
const webing = `${data.labelWeb} ${data.web}`
const carding = `${data.labelCard} ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = [heading, newline, working, backend, frontend, database, cloud, githubing, linkedining, webing, newline, carding]

console.log(chalk.green(boxen(output.join(newline), options)))
