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


  const doc = { obj: '{"num": 0}' };

  // const update_res = await csv.updateRows({}, doc);
  // const update_res = await csv.updateRows({ url: 'example3.com' }, doc);
  // const update_res = await csv.updateRows({ url: 'example2.com', name: 'Marko \' M.' }, doc);
  // const update_res = await csv.updateRows({ name: { $eq: 'John Doe' } }, doc);
  // const update_res = await csv.updateRows({ name: { $ne: 'John Doe' } }, doc);
  // const update_res = await csv.updateRows({ name: { $regex: /John/ } }, doc);
  // const update_res = await csv.updateRows({ url: 'example4.com', name: { $regex: /John/ } }, doc);
  // const update_res = await csv.updateRows({ url: 'example3.com', name: { $in: ['Marko Doe', 'John Doe'] } }, doc);
  // const update_res = await csv.updateRows({ age: { $gt: 25 } }, doc);
  // const update_res = await csv.updateRows({ age: { $gte: 25 } }, doc);
  // const update_res = await csv.updateRows({ age: { $lt: 25 } }, doc);
  const update_res = await csv.updateRows({ age: { $lte: 25 } }, doc);

  console.log(update_res);
};

fja();
