const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("ruoat.db");

db.serialize(() => {
  let sql =
    "CREATE TABLE ruoka (" +
    "id integer PRIMARY KEY NOT NULL, " +
    "nimi text NOT NULL, " +
    "pvm text, " +
    "aika text, " +
    "lisatiedot text, " +
    "tahdet text )";

  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Taulu tehtiin");
  });

  sql =
  "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
    " VALUES (1, 'Ruoka1', '01.04.2023', '12.30', 'ei', '0')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql =
  "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
    " VALUES (2, 'Ruoka2', '02.04.2023', '12.31', 'ei', '1')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql =
  "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
    " VALUES (3, 'Ruoka3', '03.04.2023', '12.32', 'ei', '2')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });
  

  sql =
  "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
    " VALUES (4, 'Ruoka4', '04.04.2023', '12.33', 'ei', '4')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql =
  "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
    " VALUES (5, 'Ruoka5', '05.04.2023', '12.34', 'ei', '5')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql =
  "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
    " VALUES (6, 'Ruoka6', '06.04.2023', '12.35', 'ei', '3')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql =
  "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
    " VALUES (7, 'Ruoka7', '07.04.2023', '12.36', 'Ruoka meni ja paljo pohjaan', '2')";
  db.run(sql, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Rivi lisättiin");
  });

  sql =
  "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
  " VALUES (8, 'Ruoka8', '08.04.2023', '12.37', 'ei', '1')";
db.run(sql, (err) => {
  if (err) {
	return console.log(err.message);
  }
  console.log("Rivi lisättiin");
});

  db.each("SELECT id, nimi FROM ruoka", function (err, row) {
    if (err) {
      return console.log(err.message);
    }
    console.log("Id: " + row.id + ", Ruoka: " + row.nimi);
  });

  db.close();
});
