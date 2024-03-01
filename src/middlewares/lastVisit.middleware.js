export const setlastVisite = (req, res, next) => {
  //1.if cookie is set,the add locals variable with lastvisit
  if (req.cookie.lastvisit) {
    res.locals.lastvisit = new Date(req.cookie.lastvisit).toLocaleString();
  }
  res.cookie("lastVisit", new Date().toISOString(), {
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });
  next();
};
