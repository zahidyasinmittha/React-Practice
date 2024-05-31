import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/Theme";
import Themebtn from "./Components/Themebtn";
import Card from "./Components/Card";

function App() {
  const [theme, settheme] = useState("light")

const toggleTheme = () => {
    settheme((prevTheme) => prevTheme === "light" ? "dark" : "light")
}

useEffect(() => {
   let classlist = document.querySelector('html').classList;
    classlist.remove("light", "dark")
    classlist.add(theme)
}, [theme])

  return (
    <ThemeProvider value={{theme, toggleTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
