const React = require("react")
const ThemeContext = require("./src/components/ThemeContext");
exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeContext.ThemeProvider>
      {element}
    </ThemeContext.ThemeProvider>
  )
}