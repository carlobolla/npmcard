#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
// Text + chalk definitions
let data = {
  'name': chalk.white('Carlo Bollini /'),
  'handle': chalk.cyan('carlobolla'),
  'work': chalk.white('Student Full-stack Developer'),
  'skills': chalk.white('Python, C++, Java, PHP'),
  'learning': chalk.white('NodeJS, Go'),
  'twitter': chalk.cyan('https://twitter.com/carlobolla'),
  'github': chalk.cyan('https://github.com/carlobolla'),
  'linkedin': chalk.cyan('https://www.linkedin.com/in/carlo-bollini'),
  'web': chalk.cyan('https://carlobolla.xyz'),
  'npx': chalk.white('npx carlobolla'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelSkills': chalk.white.bold('    Skills:'),
  'labelLearning': chalk.white.bold('  Learning:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const skills = `${data.labelSkills}  ${data.skills}`
const learning = `${data.labelLearning}  ${data.learning}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + skills + newline + learning + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))