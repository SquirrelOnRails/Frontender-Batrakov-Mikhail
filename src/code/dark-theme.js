const scriptToggleDarkMode = () => {
  const button = document.getElementById("dark-mode-btn");
  const htmlElement = document.documentElement;

  const smoothTransition = () => {
    htmlElement.classList.add("transition");
    window.setTimeout(() => {
      htmlElement.classList.remove("transition");
    }, 1000);
  };

  if (button.attributes["data-theme"].value === "dark") {
    smoothTransition();
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    smoothTransition();
    htmlElement.setAttribute("data-theme", "light");
  }
};

export default scriptToggleDarkMode;
