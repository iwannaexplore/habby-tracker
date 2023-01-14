import React, {useState} from "react";


const authorizationContext = React.createContext({
});

export const authorizationContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
  }

  const logout = () => {
  }


  return (
    <authorizationContext.Provider value={true}>
      {props.children}
    </authorizationContext.Provider>
  );
};

export default authorizationContext;
