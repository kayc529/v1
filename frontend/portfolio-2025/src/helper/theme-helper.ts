export function applyTheme(theme: "light" | "dark") {
  const html = document.documentElement;
  if (theme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}

export function getTheme() {
  const theme = localStorage.getItem("theme");
  return theme === "light" ? "light" : "dark";
}

export function toggleTheme(): "light" | "dark" {
  const currentTheme = getTheme();
  const newTheme = currentTheme === "light" ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  return newTheme;
}
