import { useSelector } from "react-redux";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCharacters } from "../../features/characters/characterSlice";
import { Character } from "../../types/types";

/**
 * Componente de la grilla de personajes para la página de inicio.
 *
 * @param {Object} props - Propiedades del componente GrillaPersonajes.
 * @param {boolean} [props.favs=false] - Indica si se deben mostrar solo los favoritos.
 *
 * @returns Un elemento JSX que representa la grilla de personajes.
 */
interface GrillaPersonajesProps {
  favs?: boolean;
}

const GrillaPersonajes: React.FC<GrillaPersonajesProps> = ({ favs = false }) => {

  const characters = useSelector(
    (state: RootState) => state.characters.characters
  );

  const loading = useSelector((state: RootState) => state.characters.loading);

  const error = useSelector((state: RootState) => state.characters.error);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters({ page: 1, name: "" }));
  }, [dispatch]);

  const favorites = useSelector((state: RootState) => state.favs.favs);

  return (
    <div className="grilla-personajes">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : favs ? (
        <>
          {favorites.map((character: Character) => (
            <TarjetaPersonaje key={character.id} character={character} />
          ))}
        </>
      ) : (
        <>
          {characters.map((character: Character) => (
            <TarjetaPersonaje key={character.id} character={character} />
          ))}
        </>
      )}
    </div>
  );
};

export default GrillaPersonajes;
