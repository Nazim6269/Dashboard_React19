import { createContext, use, useState } from "react";

//=========get theme function=================//
const getTheme = (): "light" | "dark" => {
  const theme = localStorage.getItem("theme") as "light" | "dark" | null;

  if (!theme) {
    localStorage.setItem("theme", "dark");
    return "dark";
  }

  return theme;
};

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};
//============context==================//
const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">(getTheme());

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => use(ThemeContext);

export default ThemeProvider;
