# csvman
> Nodejs library which helps with CSV file management.

The library acts as a lightwight database wih CSV files.


## Installation
```bash
$ npm install --save csvman
```


## Example

```js
/*** NodeJS script ***/
const CSV = require('csvman');

const fja = async () => {

  const csvOpts = {
    filePath: './appended_arr.csv',
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
```



## API

#### constructor(opts) :void
```js
const CSV = require('csvman);

const opts = {
  filePath: './input.csv',
  encoding: 'utf8',
  mode: '0664',
  fields: ['url', 'name'], // define active CSV fields
  fieldDelimiter: ',',
  fieldWrapper: '"',
  rowDelimiter: '\n'
}
const csv = new CSV(opts);
```


#### async createFile() :void
Create CSV file defined in opts.filePath if it does not exist. If the file exists, it is NOT MODIFIED.

#### async addHeader() :void
Add fields into the CSV Header. Only if the file is empty.

#### async writeRows(rows:array) :void
Write multiple CSV rows.
CAUTION: Old content will be overwritten when this method is used.

#### async appendRows(rows:array) :void
Append multiple CSV rows. New content will be added to the old content.

#### async readRows(convertType: boolean) :array
Read CSV rows and convert it into the array of objects.
If *convertType* is rue then fields will convert the type automatically, for example string '5' will become number 5. The default is true.

#### async updateRows(query:object, doc:object) :{count:number, rows_updated: object[]}
Find CSV row by query and update it with doc.
The query is inspired by MongoDB queries so it can use.
```
$eq, $ne, $gt, $gte, $lt, $lte, $regex, $in, $exists

For example: {name: {$regex: /john/i}}
```

#### async findRows(query) :object[]
Find CSV row by the query.

#### async extractFields() :array
Get fields array from the first (header) row.



### License
The software licensed under [AGPL-3](LICENSE).
