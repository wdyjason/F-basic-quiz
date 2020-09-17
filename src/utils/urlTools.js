const parsePath = (pathname) => {
  const splitedPath = pathname.split("/");
  return splitedPath[splitedPath.length - 1];
};

const validatePath = (pathname) => {
  const splitedPath = pathname.split("/");
  // TODO feedback：可以直接return if里面的条件
  if (splitedPath.length === 3 && splitedPath[1] === "users") {
    return true;
  }
  return false;
};

export { parsePath, validatePath };
