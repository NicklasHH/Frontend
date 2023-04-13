const express = require("express");
const app = express();

var helmet = require("helmet");
app.use(helmet({ crossOriginResourcePolicy: false }));

app.use(express.json());
app.use(express.urlencoded({ limit: "5mb", extended: true }));

const cors = require("cors");
app.use(cors());

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("tiedot.db");
const unidb = new sqlite3.Database("unet.db");
const ruokadb = new sqlite3.Database("ruoat.db");

app.listen(8080, () => {
  console.log("Node toimii localhost:8080");
});

app.get("/", (req, res, next) => {
  return res.status(200).json({ error: false, message: "Toimii" });
});

// --------TIETO
app.get("/tieto/all", (req, res, next) => {
  db.all("SELECT * FROM tieto", (error, results) => {
    if (error) throw error;
    return res.status(200).json(results);
  }); // db.all
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

// uusi uni
app.post("/uni/add", (req, res, next) => {
  let uni = req.body;

  unidb.run(
    "insert into uni (maara,pvm,laatu,lisatiedot) values (?, ?, ?, ?)",
    [uni.maara, uni.pvm, uni.laatu, uni.lisatiedot],
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

// uusi ruoka
app.post("/ruoka/add", (req, res, next) => {
  let ruoka = req.body;

  ruokadb.run(
    "insert into uni (nimi,pvm,aika,lisatiedot, tahdet) values (?, ?, ?, ?, ?)",
    [ruoka.nimi, ruoka.pvm, ruoka.aika, ruoka.lisatiedot, ruoka.tahdet],
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

// --------VIRHEILLE
app.get("*", (req, res, next) => {
  return res
    .status(404)
    .json({ error: true, message: "Ei pyydettyä palvelua" });
});
