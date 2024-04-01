import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector; // so using useTypedSelector instead of useSelector in our components

