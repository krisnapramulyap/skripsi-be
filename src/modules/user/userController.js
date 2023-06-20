const bcryptjs = require("bcrypt");
const helperWrapper = require("../../helpers/wrapper");
const deleteFile = require("../../helpers/deleteFile");
const userModel = require("./userModel");

module.exports = {
  getUserById: async (req, res) => {
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

      return helperWrapper.response(
        res,
        200,
        `Success get data user by id`,
        result
      );
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },

  updateProfile: async (req, res) => {
    try {
      const { id } = req.params;
      const {
        displayName,
        firstName,
        lastName,
        email,
        phoneNumber,
        deliveryAddress,
        gender,
        birthDay,
      } = req.body;

      const user = await userModel.getUserById(id);
      if (user.length < 1) {
        return helperWrapper.response(
          res,
          404,
          `Get data user by id ${id} not found`,
          null
        );
      }

      const setData = {
        displayName,
        firstName,
        lastName,
        email,
        phoneNumber,
        deliveryAddress,
        gender,
        birthDay,
        updatedAt: new Date(Date()),
      };

      Object.keys(setData).forEach((property) => {
        if (!setData[property]) {
          delete setData[property];
        }
      });

      const result = await userModel.updateProfile(setData, id);

      return helperWrapper.response(res, 200, `Success update profile`, result);
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },
  updateImage: async (req, res) => {
    try {
      const { id } = req.decodeToken;

      const user = await userModel.getUserById(id);
      if (user.length < 1) {
        return helperWrapper.response(
          res,
          404,
          `User by id ${id} not found`,
          null
        );
      }

      if (user[0].image) {
        deleteFile(`public/uploads/user/${user[0].image}`);
      }

      const setData = {
        image: req.file ? req.file.filename : null,
        updatedAt: new Date(Date()),
      };

      const result = await userModel.updateProfile(setData, id);
      return helperWrapper.response(
        res,
        200,
        "Success update image user",
        result
      );
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad request : ${error.message}`,
        null
      );
    }
  },

  updatePassword: async (req, res) => {
    try {
      const { id } = req.params;
      const { newPassword, confirmPassword } = req.body;

      const user = await userModel.getUserById(id);
      if (user.length < 1) {
        return helperWrapper.response(
          res,
          404,
          `User by id ${id} not found`,
          null
        );
      }

      if (newPassword !== confirmPassword) {
        return helperWrapper.response(
          res,
          400,
          `Password does not match`,
          null
        );
      }

      const salt = await bcryptjs.genSalt(10);
      const passwordHash = await bcryptjs.hash(newPassword, salt);

      const setData = { password: passwordHash };

      const result = await userModel.updateProfile(setData, id);

      return helperWrapper.response(res, 200, `Success update password`, {
        id: result.id,
      });
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad request : ${error.message}`,
        null
      );
    }
  },
  deleteImage: async (req, res) => {
    try {
      const { id } = req.params;
      const checkId = await userModel.getUserById(id);
      if (checkId.length < 1) {
        return helperWrapper.response(
          res,
          404,
          `Data by id ${id} not found !`,
          null
        );
      }
      await userModel.updateProfile({ image: null, updatedAt: new Date() }, id);

      if (checkId[0].image) {
        deleteFile(`../../../public/uploads/promo/${checkId[0].image}`);
      }

      return helperWrapper.response(res, 200, "Success delete image", { id });
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad Request${error.message ? " (" + error.message + ")" : ""}`,
        null
      );
    }
  },
};
