import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { clearInputValue } from "../../features/input/inputSlice";
import React from "react";
import { fetchCharacters } from "../../features/characters/characterSlice";

const BotonLimpiar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleClean = () => {
    dispatch(clearInputValue());
    dispatch(fetchCharacters({ page: 1, name: "" }));
  };

  return (
    <button className="danger" onClick={handleClean}>Boton Limpiar</button >
  )
}

export default BotonLimpiar