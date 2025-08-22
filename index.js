//เอาไว้รันฝั่ง server
const express = require("express");
const app = express();
const cors = require("cors");
// ให้สิทธิ์ frontend localhost:3000
/*
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // ถ้าใช้ cookie
  })
);*/

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // ถ้าใช้ cookie
  })
);


const memberRoutes = require("./routes/member");

app.use(express.json()); // เพื่ออ่าน JSON จาก req.body
app.use("/member", memberRoutes); // กำหนด route

//อยู่สุดท้าย
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});


