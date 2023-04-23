function luoUnet() {
  const sqlite3 = require("sqlite3").verbose();
  const db = new sqlite3.Database("unet.db");
  let laskuri = 0;

  db.serialize(() => {
    // Suorita DROP TABLE -komento
    db.run("DROP TABLE IF EXISTS uni", (err) => {
      if (err) {
        return console.log(err.message);
      }
      console.log("Vanha taulu poistettiin");
    });

    let sql =
      "CREATE TABLE uni (" +
      "id integer PRIMARY KEY NOT NULL, " +
      "maara text, " +
      "pvm text, " +
      "laatu text, " +
      "lisatiedot text )";

    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      console.log("Uusi taulu luotu");
    });

    sql =
      "INSERT INTO `uni` (`id`, `maara`, `pvm`, `laatu`, `lisatiedot`) " +
      " VALUES (1, '7', '01.04.2023', 'Hyvä', 'ei')";
    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      laskuri++;
      console.log("Rivi lisätty");
    });

    sql =
      "INSERT INTO `uni` (`id`, `maara`, `pvm`, `laatu`, `lisatiedot`) " +
      " VALUES (2, '7', '02.04.2023', 'Erinomainen', 'ei')";
    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      laskuri++;
      console.log("Rivi lisätty");
    });

    sql =
      "INSERT INTO `uni` (`id`, `maara`, `pvm`, `laatu`, `lisatiedot`) " +
      " VALUES (3, '8', '03.04.2023', 'Huono', 'ei')";
    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      laskuri++;
      console.log("Rivi lisätty");
    });

    sql =
      "INSERT INTO `uni` (`id`, `maara`, `pvm`, `laatu`, `lisatiedot`) " +
      " VALUES (4, '9', '04.04.2023', 'Muu(lisatietoja)', 'heräsin pirteänä')";
    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      laskuri++;
      console.log("Rivi lisätty");
    });

    sql =
      "INSERT INTO `uni` (`id`, `maara`, `pvm`, `laatu`, `lisatiedot`) " +
      " VALUES (5, '6', '05.04.2023', 'Erinomainen', 'ei')";
    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      laskuri++;
      console.log("Rivi lisätty");
    });

    sql =
      "INSERT INTO `uni` (`id`, `maara`, `pvm`, `laatu`, `lisatiedot`) " +
      " VALUES (6, '5', '06.04.2023', 'Huono', 'ei')";
    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      laskuri++;
      console.log("Rivi lisätty");
    });

    sql =
      "INSERT INTO `uni` (`id`, `maara`, `pvm`, `laatu`, `lisatiedot`) " +
      " VALUES (7, '8', '07.04.2023', 'Hyvä', 'ei')";
    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      laskuri++;
      console.log("Rivi lisätty");
      console.log("Yhteensä lisättiin " + laskuri + " riviä");
    });

    db.each("SELECT id, maara FROM uni", function (err, row) {
      if (err) {
        return console.log(err.message);
      }
      console.log("Id: " + row.id);
    });

    db.close();
  });
}
module.exports = luoUnet;
