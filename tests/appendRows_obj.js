const CSV = require('../index.js');

const fja = async () => {

  const csvOpts = {
    filePath: './appended_obj.csv',
    encoding: 'utf8',
    mode: 0o664,

    fields: ['url', 'name', 'size'], // only these fields will be shown
    fieldDelimiter: ',',
    rowDelimiter: '\n'
  };
  const csv = new CSV(csvOpts);

  await csv.createFile(); // create file if it doesn't exist already
  await csv.addHeader(); // add 1st row with url,name,size - old content is deleted


  // write rows 3x with same array
  for (let i = 1; i <= 3; i++) {
    const rows = [
      { url: 'www.site2.com', name: 'Peter', old: 35, size: 'M' },
      { url1: 'www.site3.com', name: 'Peter3', old: 28 },
      { url: 'www.site2.com', name2: 'John' },
      { url: { web: 'test1.net' }, name: 'Ana' },
      { url: ['test2.net'], name: 'Ivan' },
      { url: [{ web: 'test3.net' }], name: 'Sonja' },
    ];
    await csv.appendRows(rows);
    console.log('appended::', i);
  }


};

fja();
