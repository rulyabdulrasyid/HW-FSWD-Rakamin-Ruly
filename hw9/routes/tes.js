// Lemparan dari movies.js dan users.js

const express = require("express");
const router = express.Router();
const moviesRouter = require("./movies.js");
const usersRouter = require("./users.js");
const pool = require("../queries.js");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const secretKey = "RAHASIA";
const { authentication } = require("../middlewares/auth.js");

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  const findUser = `SELECT * FROM users WHERE email=$1`;
  pool.query(findUser, [email], (err, result) => {
    if (err) next(err);
    if (result.rows.length === 0) {
      next({ name: "ErrorNotFound" });
    } else {
      const data = result.rows[0];
      const comparePassword = bcrypt.compareSync(password, data.password);
      if (comparePassword) {
        // Pass Betul
        const accessToken = jwt.sign(
          {
            id: data.id,
            email: data.email,
            gender: data.gender,
            role: data.role,
          },
          secretKey
        );
        res.status(200).json({
          id: data.id,
          email: data.email,
          gender: data.gender,
          role: data.role,
          accessToken: accessToken,
        });
      } else {
        // Pass Salah
        next({ name: "WrongPassword" });
      }
    }
  });
});

router.post("/register", (req, res, next) => {
  const { id, email, gender, password, role } = req.body;
  const hash = bcrypt.hashSync(password, salt);
  const insertUser = `INSERT INTO users (id, email, gender, password, role) VALUES ($1, $2, $3, $4, $5)`;
  pool.query(insertUser, [id, email, gender, hash, role], (err, result) => {
    if (err) next(err);
    res.status(201).json({ message: "User Registered" });
  });
});

router.use(authentication);
router.use("/", moviesRouter);
router.use("/", usersRouter);

module.exports = router;
