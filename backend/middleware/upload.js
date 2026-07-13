// middleware/upload.js

import multer from "multer";
import path from "path";

const storage = multer.memoryStorage();

export const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const ALLOWED_EXTENSIONS = [
  ".pdf",
  ".docx",
];

export const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;

function fileFilter(req, file, cb) {
  const ext = path.extname(file.originalname).toLowerCase();

  const mimeOk = ALLOWED_MIME_TYPES.includes(file.mimetype);
  const extOk = ALLOWED_EXTENSIONS.includes(ext);

  if (!mimeOk || !extOk) {
    const err = new Error("Only PDF and DOCX files are allowed.");
    err.code = "INVALID_FILE_TYPE";
    err.statusCode = 400;

    return cb(err, false);
  }

  cb(null, true);
}

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE_BYTES,
    files: 1,
  },
});

export const uploadResume = upload.single("resume");