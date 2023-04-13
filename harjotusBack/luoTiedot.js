const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("tiedot.db");

db.serialize(() => {
  let sql =
    "CREATE TABLE tieto (" +
    "tunnus text NOT NULL, " +
    "enimi text NOT NULL, " +
    "snimi text NOT NULL, " +
    "email text NOT NULL, " +
    "puh text )";

  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Taulu luotiin");
  });

  sql =
    "INSERT INTO `tieto` (`tunnus`, `enimi`, `snimi`, `email`, 'puh') " +
    " VALUES ('abc', 'etunimi1', 'sukunimi', 'etunimi.sukunimi@email.com', '0400-123123')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  db.each("SELECT tunnus FROM tieto", function (err, row) {
    if (err) {
      return console.log(err.message);
    }
    console.log("Tunnus: " + row.tunnus);
  });

  db.close();
});
