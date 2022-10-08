const CSV = require('../index.js');

const fja = async () => {

  const csvOpts = {
    filePath: 'remove.csv', // copy from find-update.csv ($ cp find-update.csv remove.csv)
    encoding: 'utf8',
    mode: 0o644,

    fields: ['url', 'name', 'age', 'obj'], // only these fields will be effective
    fieldDelimiter: ',',
    fieldWrapper: '',
    rowDelimiter: '\n'
  };
  const csv = new CSV(csvOpts);

  // const rows_removed = await csv.removeRows();
  // const rows_removed = await csv.removeRows({});
  // const rows_removed = await csv.removeRows({ url: 'example3.com' });
  // const rows_removed = await csv.removeRows({ url: 'example2.com', name: 'Marko \' M.' });
  // const rows_removed = await csv.removeRows({ name: { $eq: 'John Doe' } });
  // const rows_removed = await csv.removeRows({ name: { $ne: 'John Doe' } });
  // const rows_removed = await csv.removeRows({ name: { $regex: /^John/ } });
  // const rows_removed = await csv.removeRows({ url: 'example4.com', name: { $regex: /John/ } });
  // const rows_removed = await csv.removeRows({ url: 'example3.com', name: { $in: ['Marko Doe', 'John Doe'] } });
  // const rows_removed = await csv.removeRows({ age: { $gt: 25 } });
  // const rows_removed = await csv.removeRows({ age: { $gte: 25 } });
  // const rows_removed = await csv.removeRows({ age: { $lt: 25 } });
  const rows_removed = await csv.removeRows({ age: { $lte: 25 } });

  console.log('rows_removed::', rows_removed);
};

fja();
