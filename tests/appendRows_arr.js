const CSV = require('../index.js');

const fja = async () => {

  const csvOpts = {
    filePath: './appended_arr.csv',
    encoding: 'utf8',
    mode: 0o664,

    fields: ['url', 'name', 'size'], // only these fields will be shown
    fieldDelimiter: ',',
    fieldWrapper: '"',
    rowDelimiter: '\n'
  };
  const csv = new CSV(csvOpts);

  await csv.createFile(); // create file if it doesn't exist already
  await csv.addHeader(); // add 1st row with url,name,size - old content is deleted


  // write rows 3x with same array
  for (let i = 1; i <= 3; i++) {
    const rows = [
      ['www.site2.com', 'Peter', 35, 'M'],
      ['www.site3.com', 'Peter3', 28],
      ['www.site2.com', 'John'],
      [{ web: 'test1.net' }, 'Ana'],
      [['test2.net'], 'Ivan'],
      [[{ web: 'test3.net' }], 'Sonja'],
    ];
    await csv.appendRows(rows);
    console.log('appended::', i);
  }


};

fja();
