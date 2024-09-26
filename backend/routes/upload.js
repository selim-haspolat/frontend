import express from "express";
import multer from "multer";
import fs from "fs";

const router = express.Router();

// Eğer uploads klasörü yoksa oluştur
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("photo"), (req, res) => {
  console.log("Bir istek alındı");
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const filePath = `/uploads/${req.file.filename}`; // Yüklenen fotoğrafın yolu

  return res.status(200).json({ message: "File uploaded successfully", filePath });
});

export default router;
