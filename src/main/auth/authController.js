require("dotenv").config();
const authModel = require("./authRepository");
const helperWrapper = require("../../helpers/wrapper");
const sendMailForgot = require("../../helpers/mail");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const userModel = require("../user/userRepository");

const generateKey = () => {
  const res = Math.floor(100000 + Math.random() * 900000);
  return res;
};

const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendMail = require("../../helpers/email");

module.exports = {
  register: async (req, res) => {
    try {
      const { email, password, phoneNumber } = req.body;
      const checkUser = await authModel.getUserByEmail(email);
      if (email.length < 1 ) {
        return helperWrapper.response(
          res,
          400,
          "Email tidak boleh kosong",
          null
        );
      }
      if (password.length < 1) {
        return helperWrapper.response(
          res,
          400,
          "Password tidak boleh kosong",
          null
        );
      }
      if (phoneNumber.length < 1) {
        return helperWrapper.response(
          res,
          400,
          "No Telphone tidak boleh kosong",
          null
        );
      }
      if (checkUser.length > 0) {
        return helperWrapper.response(res, 409, "Email sudah terdaftar", null);
      }
      if (password.length < 8) {
        return helperWrapper.response(
          res,
          400,
          "Password harus lebih dari 7 karakter"
        );
      }
      // PROSES ENCRYPT PASSWORD
      const hashPassword = await bcryptjs.hash(password, 10);
      const setData = {
        id: uuidv4(),
        email,
        password: hashPassword,
        phoneNumber,
        role: "user",
        status: "active",
      };

      const result = await authModel.register(setData);

      return helperWrapper.response(
        res,
        200,
        "Success register user",
        result
      );
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad Request, ${error.message}`,
        null
      );
    }
  },
  verifyUser: async (req, res) => {
    try {
      const { id } = req.params;

      const result = await userModel.getUserById(id);
      if (result.length < 1) {
        return helperWrapper.response(
          res,
          404,
          `User by id ${id} not found`,
          null
        );
      }

      await authModel.verifyUser("active", id);
      return helperWrapper.response(res, 200, "Email verification success");
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad Request, ${error.message}`,
        null
      );
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const checkUser = await authModel.getUserByEmail(email);
      if (email.length < 1 ) {
        return helperWrapper.response(
          res,
          400,
          "Email tidak boleh kosong",
          null
        );
      }
      if (password.length < 1) {
        return helperWrapper.response(
          res,
          400,
          "Password tidak boleh kosong",
          null
        );
      }
      if (checkUser.length < 1) {
        return helperWrapper.response(
          res,
          404,
          "Email tidak terdaftar",
          null
        );
      }

      if (checkUser[0].status !== "active") {
        return helperWrapper.response(
          res,
          400,
          `Please verify email first`,
          null
        );
      }

      const matchPassword = await bcryptjs.compare(
        password,
        checkUser[0].password
      );
      if (!matchPassword) {
        return helperWrapper.response(res, 400, "Password salah", null);
      }
      const payload = checkUser[0];
      delete payload.password;
      const token = jwt.sign({ ...payload }, process.env.SECRET_KEY, {
        expiresIn: "3h",
      });
      return helperWrapper.response(res, 200, "Success login", {
        id: payload.id,
        token,
      });
    } catch (error) {
      return helperWrapper.response(res, 400, `Bad Request ${error.message}`);
    }
  },
  forgotPassword: async (req, res) => {
    try {
      const { email, linkRedirect } = req.body;
      const keysChangePassword = generateKey();

      // CHECK USER BY EMAIL
      const checkUser = await authModel.getDataConditions({ email });
      if (checkUser.length < 1) {
        return helperWrapper.response(
          res,
          400,
          "Email / Account not registed",
          null
        );
      }
      // ======

      await authModel.updateDataUser(
        { keysChangePassword, updatedAt: new Date() },
        checkUser[0].id
      );

      const setSendEmail = {
        to: email,
        subject: `Reset Password !`,
        template: "email-forgot-password",
        data: {
          name: checkUser[0].firstName || "my friend",
          buttonUrl: `${linkRedirect}/auth/forgot-password/${keysChangePassword}`,
        },
      };

      await sendMailForgot(setSendEmail);

      return helperWrapper.response(
        res,
        200,
        "Process success, please check your email !",
        email
      );
    } catch (err) {
      return helperWrapper.response(
        res,
        400,
        `Bad request (${err.message})`,
        null
      );
    }
  },

  resetPassword: async (req, res) => {
    try {
      const { keysChangePassword, newPassword, confirmPassword } = req.body;

      const checkUser = await authModel.getDataConditions({
        keysChangePassword,
      });
      if (checkUser.length < 1) {
        return helperWrapper.response(
          res,
          400,
          "Your keys is not valid, please repeat step forgot password",
          null
        );
      }

      const { id, minuteDiff } = checkUser[0];
      if (minuteDiff < -5) {
        await authModel.updateDataUser(
          { keysChangePassword: null, updatedAt: new Date() },
          id
        );
        return helperWrapper.response(
          res,
          400,
          "Your keys is expired, please repeat step forgot password",
          null
        );
      }

      if (newPassword.length < 6) {
        return helperWrapper.response(
          res,
          400,
          "Password must be more than 6 character"
        );
      }

      if (newPassword !== confirmPassword) {
        return helperWrapper.response(res, 400, "Password not same", null);
      }

      const salt = bcrypt.genSaltSync(10);
      const encryptPassword = bcrypt.hashSync(newPassword, salt);

      await authModel.updateDataUser(
        {
          keysChangePassword: null,
          password: encryptPassword,
          updatedAt: new Date(),
        },
        id
      );

      return helperWrapper.response(res, 200, "Success change password", {
        id,
      });
    } catch (err) {
      return helperWrapper.response(
        res,
        400,
        `Bad request (${err.message})`,
        null
      );
    }
  },

  logout: async (req, res) => {
    try {
      let token = req.headers.authorization;
      token = token.split(" ")[1];
      return helperWrapper.response(res, 200, "Success logout", null);
    } catch (err) {
      return helperWrapper.response(
        res,
        400,
        `Bad Request (${err.message})`,
        null
      );
    }
  },
};
