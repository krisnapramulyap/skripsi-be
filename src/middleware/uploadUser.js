const multer = require("multer");
const helperWrapper = require("../helpers/wrapper/index");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/uploads/user");
  },

  filename(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
  limits: { fileSize: 1024 * 1024 },
}).single("image");

const uploadFilter = (req, res, next) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      return helperWrapper.response(res, 401, err.message, null);
    }
    if (err) {
      // An unknown error occurred when uploading.
      return helperWrapper.response(res, 401, err.message, null);
    }
    next();
    // Everything went fine.
  });
};

module.exports = uploadFilter;
