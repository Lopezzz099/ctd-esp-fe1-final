import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { clearInputValue } from "../../features/input/inputSlice";
import React from "react";
import { fetchCharacters } from "../../features/characters/characterSlice";

/**
 * Botón utilizado para limpiar el valor de entrada y realizar una nueva búsqueda de personajes.
 *
 * @returns Un elemento JSX que representa el botón de limpieza.
 */

const BotonLimpiar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  /**
   * Maneja el evento de clic del botón para limpiar el valor de entrada y realizar una nueva búsqueda de personajes.
   */

  const handleClean = () => {
    dispatch(clearInputValue());
    dispatch(fetchCharacters({ page: 1, name: "" }));
  };

  return (
    <button className="danger" onClick={handleClean}>
      Boton Limpiar
    </button>
  );
};

export default BotonLimpiar;
