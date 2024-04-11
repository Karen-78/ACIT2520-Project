const fs = require('fs');
const path = require('path');

const sessionsFolder = './sessions';

// Read the contents of the folder
fs.readdir(sessionsFolder, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  // Loop through the files
  files.forEach(file => {
    // Get the full path of each file
    const filePath = path.join(sessionsFolder, file);
    // Check if it's a file (not a directory)
    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error('Error getting file stats:', err);
        return;
      }
      if (stats.isFile()) {
        // If it's a file, log its name
        console.log('File:', file);
      }
    });
  });
});
