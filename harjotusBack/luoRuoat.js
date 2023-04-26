function luoRuoat() {
  const sqlite3 = require("sqlite3").verbose();
  const db = new sqlite3.Database("ruoat.db");
  let laskuri = 0;

  db.serialize(() => {
    // Suorita DROP TABLE -komento
    db.run("DROP TABLE IF EXISTS ruoka", (err) => {
      if (err) {
        return console.log(err.message);
      }
      console.log("Vanha taulu poistettiin");
    });

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
      console.log("Uusi taulu luotu");
    });

    sql =
      "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
      " VALUES (1, 'Makkara ja perunamuusi', '01.04.2023', '12.30', 'ei', '5')";
    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      laskuri++;
      console.log("Rivi lisätty");
    });

    sql =
      "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
      " VALUES (2, 'Kana ceasar salaatti', '02.04.2023', '12.31', 'ei', '4')";
    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      laskuri++;
      console.log("Rivi lisätty");
    });

    sql =
      "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
      " VALUES (3, 'Risotto kanalla', '03.04.2023', '12.32', 'ei', '4')";
    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      laskuri++;
      console.log("Rivi lisätty");
    });

    sql =
      "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
      " VALUES (4, 'Makaronilaatikko', '04.04.2023', '12.33', 'Cheddarilla', '4')";
    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      laskuri++;
      console.log("Rivi lisätty");
    });

    sql =
      "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
      " VALUES (5, 'Makkaraperunat', '05.04.2023', '12.34', 'ei', '5')";
    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      laskuri++;
      console.log("Rivi lisätty");
    });

    sql =
      "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
      " VALUES (6, 'Kanapasta', '06.04.2023', '12.35', 'Aurajuustolla', '3')";
    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      laskuri++;
      console.log("Rivi lisätty");
    });

    sql =
      "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
      " VALUES (7, 'Kalakeitto', '07.04.2023', '12.36', 'Meni ja palo pohjaan ni hain makkaraperunat', '0')";
    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      laskuri++;
      console.log("Rivi lisätty");
    });

    sql =
      "INSERT INTO `ruoka` (`id`, `nimi`, `pvm`, `aika`, `lisatiedot`, `tahdet` ) " +
      " VALUES (8, 'Makkaraperunat', '08.04.2023', '14.36', 'ei', '5')";
    db.run(sql, (err) => {
      if (err) {
        return console.log(err.message);
      }
      laskuri++;
      console.log("Rivi lisätty");
      console.log("Yhteensä lisättiin " + laskuri + " riviä");
    });

    db.each("SELECT id, nimi FROM ruoka", function (err, row) {
      if (err) {
        return console.log(err.message);
      }
      console.log("Id: " + row.id + ", Ruoka: " + row.nimi);
    });

    db.close();
  });
}

module.exports = luoRuoat;
