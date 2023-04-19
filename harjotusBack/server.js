const express = require("express");
const app = express();

var helmet = require("helmet");
app.use(helmet({ crossOriginResourcePolicy: false }));

app.use(express.json());
app.use(express.urlencoded({ limit: "5mb", extended: true }));

const cors = require("cors");
app.use(cors());

const sqlite3 = require("sqlite3");
const tietodb = new sqlite3.Database("tiedot.db");
const unidb = new sqlite3.Database("unet.db");
const ruokadb = new sqlite3.Database("ruoat.db");

app.listen(8080, () => {
  console.log("Node toimii localhost:8080");
});

app.get("/", (req, res, next) => {
  return res.status(200).json({ error: false, message: "Toimii" });
});

// --------TIETO
// hae tieto
app.get("/tieto", (req, res, next) => {
  tietodb.all("SELECT * FROM tieto", (error, results) => {
    if (error) throw error;
    return res.status(200).json(results);
  }); // db.all
});

// muokkaa tieto
app.put("/tieto/muokkaa", (req, res) => {
  const { enimi, snimi, email, puh } = req.body;
  tietodb.run(
    `UPDATE tieto SET enimi = ?, snimi = ?, email = ?, puh = ?`,
    [enimi, snimi, email, puh],
    (error) => {
      if (error) {
        console.log(error);
        return res.status(500).send(error);
      }
      return res.status(200).send("Tiedot päivitetty onnistuneesti.");
    }
  );
});

// --------UNI
// kaikki unet
app.get("/uni/all", (req, res, next) => {
  unidb.all("SELECT * FROM uni", (error, results) => {
    if (error) throw error;
    return res.status(200).json(results);
  }); // db.all
});

// yksi uni
app.get("/uni/one/:id", (req, res, next) => {
  let id = req.params.id;
  unidb.get("SELECT * FROM uni where id=?", [id], (error, result) => {
    if (error) throw error;
    if (typeof result == "undefined") {
      return res.status(200).json({});
    }
    return res.status(200).json(result);
  }); // db.get
});

// Viimeisin ruoka(otettu isoin ID)
app.get("/uni/uusin", (req, res, next) => {
  unidb.get(
    "SELECT * FROM uni WHERE id = (SELECT MAX(id) FROM uni)",
    (error, result) => {
      if (error) throw error;
      if (typeof result == "undefined") {
        return res.status(200).json({});
      }
      return res.status(200).json(result);
    }
  ); // db.get
});

// uusi uni
app.post("/uni/add", (req, res, next) => {
  let uni = req.body;
  uni.maara = parseInt(uni.maara);

  // Muunnetaan päivämäärä dd.mm.yyyy -muotoon
  let formattedDate = uni.pvm ? uni.pvm.split("-").reverse().join(".") : null;

  unidb.run(
    "insert into uni (maara,pvm,laatu,lisatiedot) values (?, ?, ?, ?)",
    [uni.maara, formattedDate, uni.laatu, uni.lisatiedot],
    (error, result) => {
      if (error) throw error;

      return res.status(200).json({ count: 1 });
    }
  );
});

// poista uni
app.get("/uni/delete/:id", (req, res, next) => {
  let id = req.params.id;

  unidb.run("DELETE FROM uni WHERE id = ?", [id], function (error, result) {
    if (error) throw error;
    return res.status(200).json({ count: this.changes });
  });
});

// muokkaa uni
app.put("/uni/muokkaa/:id", (req, res, next) => {
  let id = req.params.id;
  let uni = req.body;

  unidb.run(
    "UPDATE uni SET maara = ?, pvm = ?, laatu = ?, lisatiedot = ? WHERE id = ?",
    [uni.maara, uni.pvm, uni.laatu, uni.lisatiedot, id],
    (error) => {
      if (error) {
        console.log(error);
        return res.status(500).send(error);
      }
      return res.status(200).send("Uni päivitetty onnistuneesti.");
    }
  );
});

// --------RUOKA
// kaikki ruoat
app.get("/ruoka/all", (req, res, next) => {
  ruokadb.all("SELECT * FROM ruoka", (error, results) => {
    if (error) throw error;
    return res.status(200).json(results);
  }); // db.all
});

// yksi ruoka
app.get("/ruoka/one/:id", (req, res, next) => {
  let id = req.params.id;
  ruokadb.get("SELECT * FROM ruoka where id=?", [id], (error, result) => {
    if (error) throw error;
    if (typeof result == "undefined") {
      return res.status(200).json({});
    }
    return res.status(200).json(result);
  }); // db.get
});

// Viimeisin ruoka(otettu isoin ID)
app.get("/ruoka/uusin", (req, res, next) => {
  ruokadb.get(
    "SELECT * FROM ruoka WHERE id = (SELECT MAX(id) FROM ruoka)",
    (error, result) => {
      if (error) throw error;
      if (typeof result == "undefined") {
        return res.status(200).json({});
      }
      return res.status(200).json(result);
    }
  ); // db.get
});

// uusi ruoka
app.post("/ruoka/add", (req, res, next) => {
  let ruoka = req.body;

  // Tarkista, onko päivämäärä määritelty
  let formattedDate = ruoka.pvm
    ? ruoka.pvm.split("-").reverse().join(".")
    : null;

  ruokadb.run(
    "insert into ruoka (nimi,pvm,aika,lisatiedot, tahdet) values (?, ?, ?, ?, ?)",
    [ruoka.nimi, formattedDate, ruoka.aika, ruoka.lisatiedot, ruoka.tahdet],
    (error, result) => {
      if (error) throw error;

      return res.status(200).json({ count: 1 });
    }
  );
});

// poista ruoka
app.get("/ruoka/delete/:id", (req, res, next) => {
  let id = req.params.id;

  ruokadb.run("DELETE FROM ruoka WHERE id = ?", [id], function (error, result) {
    if (error) throw error;
    return res.status(200).json({ count: this.changes });
  });
});

// muokkaa ruoka
app.put("/ruoka/muokkaa/:id", (req, res, next) => {
  let id = req.params.id;
  let ruoka = req.body;

  ruokadb.run(
    "UPDATE ruoka SET nimi = ?, pvm = ?, aika = ?, lisatiedot = ?, tahdet = ? WHERE id = ?",
    [ruoka.nimi, ruoka.pvm, ruoka.aika, ruoka.lisatiedot, ruoka.tahdet, id],
    (error) => {
      if (error) {
        console.log(error);
        return res.status(500).send(error);
      }
      return res.status(200).send("Ruoka päivitetty onnistuneesti.");
    }
  );
});

// --------VIRHEILLE
app.get("*", (req, res, next) => {
  return res
    .status(404)
    .json({ error: true, message: "Ei pyydettyä palvelua" });
});
