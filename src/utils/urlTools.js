const parsePath = (pathname) => {
  const splitedPath = pathname.split("/");
  return splitedPath[splitedPath.length - 1];
};

const validatePath = (pathname) => {
  const splitedPath = pathname.split("/");
  if (splitedPath.length === 3 && splitedPath[1] === "users") {
    return true;
  }
  return false;
};

export { parsePath, validatePath };
