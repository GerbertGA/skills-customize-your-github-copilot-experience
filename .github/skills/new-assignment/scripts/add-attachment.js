#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function usage() {
  console.log('Usage: node add-attachment.js <assignment-id> <file-name>');
  console.log('This script should attach a file to the given assignment.');
}

function main() {
  const [assignmentId, fileName] = process.argv.slice(2);
  if (!assignmentId || !fileName) {
    usage();
    process.exit(1);
  }

  const assignmentPath = path.join(__dirname, '../../assignments', assignmentId);
  const filePath = path.join(assignmentPath, fileName);

  if (!fs.existsSync(filePath)) {
    console.error(`Attachment not found: ${filePath}`);
    process.exit(1);
  }

  console.log(`Attachment ${fileName} exists for assignment ${assignmentId}.`);
  console.log('Update config or metadata manually as needed.');
}

main();
