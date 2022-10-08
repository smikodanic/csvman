const CSV = require('../index.js');

const fja = async () => {

  const csvOpts = {
    filePath: 'find-update.csv',
    encoding: 'utf8',
    mode: 0o644,

    fields: ['url', 'name', 'age', 'obj'], // only these fields will be effective
    fieldDelimiter: ',',
    fieldWrapper: '',
    rowDelimiter: '\n'
  };
  const csv = new CSV(csvOpts);


  // const doc = { obj: '{"num": 0}' }; // fields url,name,age will be empty
  const doc = {
    url: 'roky.net',
    name: 'Roky Balboa',
    age: 77,
    obj: { num: 777 }
  };

  // const update_res = await csv.updateRows({ age: { $gt: 200 } }, doc, true);
  const update_res = await csv.updateRows({ url: 'bad.url' }, doc, true);

  console.log(update_res);
};

fja();
