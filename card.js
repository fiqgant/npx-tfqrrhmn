#!/usr/bin/env node

"use strict";

const fs = require("fs");
const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:fiqgant@gmail.com");
          console.log("\nDone, see you soon at inbox.\n");
        },
      },
      {
        name: `Visit my ${chalk.blue.bold("Website")}?`,
        value: () => {
          open("https://fiqlab.dev");
          console.log("\n See you at fiqlab \n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Bye bye. Have a nice day.\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.blue("             Taufiqurrahman"),
  handle: chalk.white("@fiqgant"),
  work: `${chalk.white(" A Geek maybe?")} ${chalk
    .hex("#2b82b2")
    .bold("https://fiqlab.dev")}`,
  github: chalk.gray("https://github.com/") + chalk.white("fiqgant"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("fiqgant"),
  instagram: chalk.gray("https://instagram.com/") + chalk.cyan("tfqrrhmn"),
  web: chalk.cyan("https://fiqlab.dev"),
  npx: chalk.blue("npx") + " " + chalk.white("tfqrrhmn"),

  labelWork: chalk.white.bold("       Bio:"),
  labelInstagram: chalk.white.bold("  Instagram:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelProject: chalk.white.bold("    Project:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    "",
    `${data.labelWork}  ${data.work}`,
    "",
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelInstagram}  ${data.instagram}`,
    `${data.labelWeb}  ${data.web}`,
    "",
    `${data.labelCard}  ${data.npx}`,
    "",
    `${chalk.italic("I am currently looking for new opportunities,")}`,
    `${chalk.italic("my inbox is always open. Whether you have a")}`,
    `${chalk.italic("question or just want to say hi, I will try ")}`,
    `${chalk.italic("my best to get back to you!")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "blue",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
