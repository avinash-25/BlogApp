export const errorMiddleware = (err, req, res, next) => {
  res.json({
    key: "error middleware called",
  });
};
