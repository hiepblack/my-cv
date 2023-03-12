import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers["x-oauth-token"];
  console.log(token);
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "ko lay duoc token" });
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err){
    return  res
      .status(403)
      .json({ success: false, message: "loi khong xac thuc duoc token" });
    }
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Ban k đủ quyền truy cập trang" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res,() => {
    if (req.user.role === "admin") {
      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "Ban k đủ quyền truy cập trang admin",
      });
    }
  });
};
