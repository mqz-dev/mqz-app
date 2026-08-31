const dynamicRoutes = (routes) => {
  return Object.keys(routes).map((filepath) => {
    const path = filepath
      .split("/")
      .pop()
      .replace(/\.jsx?$/, "");

    return {
      path,
      title: path.replaceAll("-", " "),
    };
  });
};

const themeLinks = import.meta.glob("../templates/*.jsx");

export const themes = dynamicRoutes(themeLinks);
