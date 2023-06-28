import { useSelector } from "react-redux";
import "./paginacion.css";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { fetchCharacters } from "../../features/characters/characterSlice";
import { useState } from "react";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */

const Paginacion: React.FC = () => {
  const [num, setNum] = useState(1);
  const dispatch: AppDispatch = useDispatch();

  const loading = useSelector((state: RootState) => state.characters.loading);

  const pagination = useSelector(
    (state: RootState) => state.characters.pagination
  );

  const handleNextPage = () => {
    if (pagination.next) {
      setNum(num + 1);
      dispatch(fetchCharacters({ page: num + 1 }));
    }
  };

  const handlePrevPage = () => {
    if (pagination.prev) {
      setNum(num - 1);
      dispatch(fetchCharacters({ page: num - 1 }));
    }
  };

  return (
    <div className="paginacion">
      <button
        disabled={!pagination.prev || loading}
        onClick={handlePrevPage}
        className={"primary"}
      >
        Anterior
      </button>
      <button
        disabled={!pagination.next || loading}
        onClick={handleNextPage}
        className={"primary"}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
