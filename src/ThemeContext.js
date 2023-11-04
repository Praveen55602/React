import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

/* 
create Context returns object with 2 component 
1. provider
2. consumer
whaterver variables are passed to the provider object will be accessible by all the components that are wrapped inside the provider element. ex - 
    <ThemeContext.Provider value = "some value">
        <component1/>
        <component2/>
        <component3/>
    </ThemeContext.Provider>

    now component1, component2, component3 will have access to value
    by using 
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
          <p>This component is using the {theme} theme.</p>
          <button onClick={toggleTheme}>Toggle Theme</button>
      )}
    </ThemeContext.Consumer>

    but with this syntex the code is becoming more nested and complicated 2 work around it we'll use custom hooks and functions
*/

//children object is inbuild prop in react all the object nested inside this component will automatically be put in the children object, here we can create one more prop called themeValue so that each instance can have it's own theme Value
export default function ThemeContextProvider({ children, themeValue }) {
  const [theme, setTheme] = useState(themeValue);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
/*
this is custom hook that uses a react hook called useContext which will return the consumer object of the themeContext that way we'll be able consume the value provided by the provider without doing this -
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
          <p>This component is using the {theme} theme.</p>
          <button onClick={toggleTheme}>Toggle Theme</button>
      )}
    </ThemeContext.Consumer>

    instead we can just do this and use values as needed 
    *Note : = Remember if this component is used outside the provider it will have null values for theme and setTheme 
    const { theme, setTheme } = useTheme();
*/
