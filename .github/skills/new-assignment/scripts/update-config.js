#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '../../config.json');

function usage() {
  console.log('Usage: node update-config.js <assignment-id>');
  console.log('This script should register a new assignment in config.json.');
}

function main() {
  const [assignmentId] = process.argv.slice(2);
  if (!assignmentId) {
    usage();
    process.exit(1);
  }

  if (!fs.existsSync(configPath)) {
    console.error('config.json not found:', configPath);
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  if (!Array.isArray(config.assignments)) {
    console.error('Invalid config.json: assignments must be an array.');
    process.exit(1);
  }

  const exists = config.assignments.some((item) => item.id === assignmentId);
  if (exists) {
    console.log(`Assignment ${assignmentId} is already registered.`);
    process.exit(0);
  }

  config.assignments.push({
    id: assignmentId,
    title: assignmentId,
    description: '',
    path: `assignments/${assignmentId}`,
    dueDate: ''
  });

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
  console.log(`Added assignment ${assignmentId} to config.json.`);
}

main();
