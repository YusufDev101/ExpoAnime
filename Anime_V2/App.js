import React, { useState, useEffect } from "react";

import Mappings from "./app/layout/mappings";

// NavigationContainer.
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <NavigationContainer>
      <Mappings />
    </NavigationContainer>
  );
};

export default App;
