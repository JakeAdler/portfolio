const React = require("react")
const AppContext = require("./src/components/AppContext");
exports.wrapRootElement = ({ element }) => {
  return (
    <AppContext.ContextProvider>
      {element}
    </AppContext.ContextProvider>
  )
}