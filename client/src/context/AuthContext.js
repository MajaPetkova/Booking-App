import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user") || null),
  loading: false,
  error: null,
};
export const AuthContext = createContext(INITIAL_STATE);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
    }
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
    }
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
    } 
    case "LOGOUT":
    return {
      user: null,
      loading: true,
      error: null,
  }
    default:
      return INITIAL_STATE;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);


  useEffect(()=>{
   localStorage.setItem("user", JSON.stringify(state.user) )
  }, [state.user])

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
