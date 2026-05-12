const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = 'src/assets';

fs.readdirSync(directory).forEach(file => {
  const filePath = path.join(directory, file);
  if (fs.lstatSync(filePath).isFile() && /\.(jpe?g|png)$/i.test(file)) {
    const outputFileName = file.replace(/\.(jpe?g|png)$/i, '.webp');
    const outputPath = path.join(directory, outputFileName);
    
    sharp(filePath)
      .webp({ quality: 75 })
      .toFile(outputPath)
      .then(() => {
        console.log(`Converted ${file} to ${outputFileName}`);
        // Optionally delete the original
        // fs.unlinkSync(filePath);
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  }
});
