const CSV = require('../index.js');

const fja = async () => {

  const csvOpts = {
    // filePath: './read.csv',
    filePath: './appended_arr.csv',
    // filePath: './appended_obj.csv',
    // filePath: './writed_arr.csv',
    // filePath: './writed_obj.csv',
    encoding: 'utf8',
    mode: 0o644,

    fields: ['url', 'name', 'size'], // only these fields will be effective
    fieldDelimiter: ',',
    fieldWrapper: '"',
    rowDelimiter: '\n'
  };
  const csv = new CSV(csvOpts);


  const rows = await csv.readRows(false); // all types will be string
  // const rows = await csv.readRows(true); // or just csv.readRows()
  console.log('rows in total:: ', rows.length);
  console.log(JSON.stringify(rows, null, 4));
};

fja();
