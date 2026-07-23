import { hashPassword, comparePassword } from "../utils/hash.js";
import jwt, { decode } from "jsonwebtoken";
import { ENV } from "../config/env.js";
import {
  getUsersFromDB,
  createUser,
  getUserbyEmail,
} from "../repositories/userRepo.js";


 const getAllUsersService = async () => {
  return await getUsersFromDB();
};

 const registerUserService = async (data) => {
  const { u_name,email, password,role_id } = data;

  const hashedPassword = await hashPassword(password);

  const user = await createUser(u_name, email, hashedPassword, role_id);

  return user;
};

 const loginUserService = async (email, password) => {
  const user = await getUserbyEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const payload = {
    id: user.id,
    name: user.u_name,
    email: user.email,
    role: user.role_id,
  };

  const accessToken = jwt.sign(payload, ENV.JWT_SECRET, {
    expiresIn: "5m",
  });

  const refreshToken = jwt.sign(payload, ENV.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

 const refreshTokenService = async (rToken) => {
  try {
    const decoded = jwt.verify(rToken, ENV.REFRESH_TOKEN_SECRET);

    const payload = {
     id: decoded.id,
    name: decoded.name,
    email: decoded.email,
    role: decoded.role,
    };

    const accessToken = jwt.sign(payload, ENV.JWT_SECRET, {
      expiresIn: "15m",
    });

    const newRefreshToken = jwt.sign(payload, ENV.REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
    });

    return {
      accessToken,
      refreshToken: newRefreshToken,
    };
  } catch (err) {
    throw new Error("Invalid or expired refresh token");
  }
};

export { getAllUsersService, registerUserService, loginUserService, refreshTokenService };