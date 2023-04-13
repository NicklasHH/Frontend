const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("unet.db");

db.serialize(() => {
  let sql =
    "CREATE TABLE uni (" +
    "id integer PRIMARY KEY NOT NULL, " +
    "maara text NOT NULL, " +
    "pvm text, " +
    "laatu text, " +
    "lisatiedot text )";

  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Taulu tehtiin");
  });

  sql =
    "INSERT INTO `uni` (`id`, `maara`, `pvm`, `laatu`, `lisatiedot`) " +
    " VALUES (1, '7', '2023-04-01', 'Hyvä', 'ei')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql =
    "INSERT INTO `uni` (`id`, `maara`, `pvm`, `laatu`, `lisatiedot`) " +
    " VALUES (2, '7', '2023-04-02', 'Erinomainen', 'ei')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql =
    "INSERT INTO `uni` (`id`, `maara`, `pvm`, `laatu`, `lisatiedot`) " +
    " VALUES (3, '8', '2023-04-03', 'Huono', 'ei')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql =
    "INSERT INTO `uni` (`id`, `maara`, `pvm`, `laatu`, `lisatiedot`) " +
    " VALUES (4, '9', '2023-04-04', 'Muu(lisatietoja)', 'heräsin pirteänä')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql =
    "INSERT INTO `uni` (`id`, `maara`, `pvm`, `laatu`, `lisatiedot`) " +
    " VALUES (5, '6', '2023-04-05', 'Erinomainen', 'ei')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql =
    "INSERT INTO `uni` (`id`, `maara`, `pvm`, `laatu`, `lisatiedot`) " +
    " VALUES (6, '5', '2023-04-06', 'Huono', 'ei')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql =
    "INSERT INTO `uni` (`id`, `maara`, `pvm`, `laatu`, `lisatiedot`) " +
    " VALUES (7, '8', '2023-04-07', 'Hyvä', 'ei')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  db.each("SELECT id, maara FROM uni", function (err, row) {
    if (err) {
      return console.log(err.message);
    }
    console.log("Id: " + row.id);
  });

  db.close();
});
