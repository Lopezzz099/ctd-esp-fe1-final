import { useSelector } from "react-redux";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCharacters } from "../../features/characters/characterSlice";
import { Character } from "../../types/types";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
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
      {/* //   <TarjetaPersonaje />
    //   <TarjetaPersonaje />
    //   <TarjetaPersonaje /> */}
    </div>
  );
};

export default GrillaPersonajes;
