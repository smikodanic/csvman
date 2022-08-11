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


  // const rows_found = await csv.findRows();
  // const rows_found = await csv.findRows({});
  // const rows_found = await csv.findRows({ url: 'example3.com' });
  // const rows_found = await csv.findRows({ url: 'example2.com', name: 'Marko \' M.' });
  // const rows_found = await csv.findRows({ name: { $eq: 'John Doe' } });
  // const rows_found = await csv.findRows({ name: { $ne: 'John Doe' } });
  // const rows_found = await csv.findRows({ name: { $regex: /John/ } });
  // const rows_found = await csv.findRows({ url: 'example4.com', name: { $regex: /John/ } });
  // const rows_found = await csv.findRows({ url: 'example3.com', name: { $in: ['Marko Doe', 'John Doe'] } });
  // const rows_found = await csv.findRows({ age: { $gt: 25 } });
  // const rows_found = await csv.findRows({ age: { $gte: 25 } });
  // const rows_found = await csv.findRows({ age: { $lt: 25 } });
  const rows_found = await csv.findRows({ age: { $lte: 25 } });



  console.log('rows in total:: ', rows_found.length);
  console.log(rows_found);
};

fja();
