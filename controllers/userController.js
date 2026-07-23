import { asyncHandler } from "../utils/asyncHandler.js";
import {
  getAllUsersService,
  registerUserService,
  loginUserService,
  refreshTokenService,
} from "../services/userService.js";
import { logger } from "../utils/logger.js";


export const getUsers = asyncHandler(async (req, res) => {
  const users = await getAllUsersService();

  res.status(200).json({
    success: true,
    data: users,
  });
});


export const registerUser = asyncHandler(async (req, res) => {
  const user = await registerUserService(req.body);
  res.status(201).json({
    success: true,
    data: user,
  });
});


export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const { accessToken, refreshToken } = await loginUserService(
    email,
    password
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false, // true in production (HTTPS)
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({
    success: true,
    accessToken,
  });
});

export const refreshTokenHandler = asyncHandler(async (req, res) => {
  const rToken = req.cookies.refreshToken;

  if (!rToken) {
    return res.status(401).json({
      success: false,
      message: "No refresh token",
    });
  }

  const { accessToken, refreshToken } =
    await refreshTokenService(rToken);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({
    success: true,
    accessToken,
  });
});


export const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("refreshToken");

  res.json({
    success: true,
    message: "Logged out successfully",
  });
});