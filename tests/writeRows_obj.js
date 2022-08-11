const CSV = require('../index.js');

const fja = async () => {

  const csvOpts = {
    filePath: './writed_obj.csv',
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
      { url: 'www.site1.com', name: 'Peter', old: 55, size: 'M' },
      { url1: 'www.site1.com', name: 'Peter', old: 55 },
      { url: 'www.site2.com', name2: 'John' },
      { url: { web: 'test1.net' }, name: 'Ana' },
      { url: ['test2.net'], name: 'Ivan' },
      { url: [{ web: 'test3.net' }], name: 'Sonja' },
    ];
    await csv.writeRows(rows);
    console.log('writed::', i);
  }

};

fja();
