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
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch: AppDispatch = useDispatch();

  const loading = useSelector((state: RootState) => state.characters.loading);
  const pagination = useSelector((state: RootState) => state.characters.pagination);
  const error = useSelector((state: RootState) => state.characters.error);
  const hasError = Boolean(error);
  const name = useSelector((state: RootState) => state.input.value);

  const handleNextPage = () => {
    if (pagination.next) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      dispatch(fetchCharacters({ page: nextPage, name: name }));
    }
  };

  const handlePrevPage = () => {
    if (pagination.prev) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      dispatch(fetchCharacters({ page: prevPage, name: name }));
    }
  };

  return (
    <div className="paginacion">
      <button
        disabled={ !pagination.prev || loading || hasError }
        onClick={ handlePrevPage }
        className={ "primary" }
      >
        Anterior
      </button>
      <button
        disabled={ !pagination.next || loading || hasError }
        onClick={ handleNextPage }
        className={ "primary" }
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
