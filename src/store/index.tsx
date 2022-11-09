import React, { createContext, ReactNode, useReducer, useContext } from "react";
import { InitialState } from "../@types/reducer";
import {
  shoppingCartReducer,
  ShoppingCartIntialState,
} from "./reducers/shoppingCart";

interface Props {
  children: ReactNode;
}

const initialState: InitialState = {
  shoppingCart: ShoppingCartIntialState,
};

const StateContext = createContext<InitialState>(initialState);
const DispatchContext = createContext<React.Dispatch<any>>(() => null);

const globalReducer = (
  { shoppingCart }: InitialState,
  action: any
): InitialState => ({
  shoppingCart: shoppingCartReducer(shoppingCart, action),
});

const GlobalStateProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default GlobalStateProvider;
export const useGlobalState = () => useContext(StateContext);
export const useGlobalDispatch = () => useContext(DispatchContext);
