import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  return (
    /* In React, the `<Fragment>` component is used to group multiple elements together without adding
    an extra DOM element. It is a way to return multiple elements from a component's render method
    without wrapping them in a parent element. This is useful when you don't want to introduce
    unnecessary divs or other elements into the DOM structure. */
    // <Fragment> </Fragment>
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
