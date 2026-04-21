import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// 🔍 Debug: check env value
console.log("DB NAME:", process.env.MYSQLDATABASE);

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,

  ssl: {
    rejectUnauthorized: false,
  },

  connectTimeout: 20000,
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB Error:", err);
  } else {
    console.log("✅ MySQL Connected Successfully");

    // 🔥 Force DB select (fix for "No database selected")
    db.query("USE railway", (err) => {
      if (err) {
        console.log("❌ USE DB Error:", err);
      } else {
        console.log("✅ Database selected");
      }
    });
  }
});

export default db;