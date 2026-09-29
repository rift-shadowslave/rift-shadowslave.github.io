const fs = require('fs');
const oldData = fs.readFileSync('old_data.js', 'utf8');
const currentData = fs.readFileSync('data.js', 'utf8');
const invStartIdx = oldData.indexOf('    inventoryItems: {');
const blockToExtract = oldData.substring(invStartIdx, oldData.lastIndexOf('};'));
const insertionIdx = currentData.lastIndexOf('};');
if (invStartIdx > 0 && insertionIdx > 0) {
    const newData = currentData.substring(0, insertionIdx) + '    ,\n' + blockToExtract + '};\n\nif (typeof module !== "undefined") module.exports = RIFT_DATA;\n';
    fs.writeFileSync('data.js', newData);
    console.log('Successfully injected inventoryItems and worldLocations into data.js');
}
