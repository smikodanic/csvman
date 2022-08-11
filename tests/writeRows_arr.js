const CSV = require('../index.js');

const fja = async () => {

  const csvOpts = {
    filePath: './writed_arr.csv',
    encoding: 'utf8',
    mode: 0o664,

    fields: ['url', 'name', 'size'], // only these fields will be shown
    fieldDelimiter: ',',
    rowDelimiter: '\n'
  };
  const csv = new CSV(csvOpts);

  await csv.createFile();
  await csv.addHeader();


  // write rows 3x with same array
  for (let i = 1; i <= 3; i++) {
    // rows is array of objects
    const rows = [
      ['www.site1.com', 'Peter', 55, 'M'],
      ['www.site2.com', 'John'],
      [{ web: 'test1.net' }, 'Ana', 22],
      [['test2.net'], 'Ivan'],
      [[{ web: 'test3.net' }], 'Sonja']
    ];
    await csv.writeRows(rows);
    console.log('writed::', i);
  }


};

fja();
