import { useDispatch } from "react-redux";
import { Character } from "../../types/types";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import { addToFavs, delateById } from "../../features/favs/favsSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToDetail } from "../../features/detail/detailSlice";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * @param {Object} props - Propiedades del componente TarjetaPersonaje.
 * @param {Character} props.character - Datos del personaje a mostrar.
 *
 * @returns un JSX element
 */
const TarjetaPersonaje: React.FC<{ character: Character }> = ({
  character,
}) => {
  const dispatch = useDispatch();
  const storedData = localStorage.getItem("favs");

  /**
   * Estado local para controlar si el personaje es favorito o no.
   * @type {boolean}
   */
  const [isFav, setIsFav] = useState<boolean>(
    storedData
      ? JSON.parse(storedData).some((fav: Character) => fav.id === character.id)
      : false
  );

  const navigate = useNavigate();

  /**
   * Manejador de eventos para agregar o eliminar el personaje de los favoritos.
   */
  const handleFavClick = () => {
    if (isFav) {
      dispatch(delateById(character.id));
    } else {
      dispatch(addToFavs(character));
    }
    setIsFav(!isFav);
  };

  /**
   * Manejador de eventos para redireccionar al detalle del personaje.
   */
  const handleDetailClick = () => {
    dispatch(addToDetail(character));
    navigate("/detalle");
  };

  return (
    <div className="tarjeta-personaje">
      <img
        src={character.image}
        alt={character.name}
        onClick={handleDetailClick}
        style={{ cursor: "pointer" }}
      />
      <div className="tarjeta-personaje-body">
        <span>{character.name}</span>
        <BotonFavorito esFavorito={isFav} onClick={handleFavClick} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
