const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const lines = fs
    .readFileSync(path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const stGroups = {};
  const dbFields = lines[0].split(',');
  const stNames = dbFields.slice(0, dbFields.length - 1);

  for (const line of lines.slice(1)) {
    const stRecord = line.split(',');
    const stValues = stRecord.slice(0, stRecord.length - 1);
    const field = stRecord[stRecord.length - 1];
    if (!Object.keys(stGroups).includes(field)) {
      stGroups[field] = [];
    }
    const stEntries = stNames
      .map((propName, idx) => [propName, stValues[idx]]);
    stGroups[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object
    .values(stGroups)
    .reduce((prev, cur) => (prev || []).length + cur.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(stGroups)) {
    const Names = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${Names}`);
  }
};

module.exports = countStudents;
