import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Character } from "../types/types";
import { addToFavs, delateById } from "../features/favs/favsSlice";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 *
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalle /> ```
 *
 * @returns la pagina de detalle
 */

const PaginaDetalle = () => {
    // Obtener los detalles del personaje desde el estado de Redux
  const details = useSelector((state: RootState) => state.detail.detail);
  const dispatch = useDispatch();

  // Obtener datos de favoritos desde el almacenamiento local
  const storedData = localStorage.getItem("favs");

  // Estado para controlar si el personaje está marcado como favorito
  const [isFav, setIsFav] = useState<boolean>(
    storedData
      ? JSON.parse(storedData).some((fav: Character) => fav.id === details.id)
      : false
  );

  // Manejar el clic en el botón de favorito
  const handleFavClick = () => {
    if (isFav) {
      dispatch(delateById(details.id));
    } else {
      dispatch(addToFavs(details));
    }
    setIsFav(!isFav);
  };
  console.log(details)

  return (
    <div className="container">
      {Object.keys(details).length !== 0 ? (
        <>
          <h3>{details?.name}</h3>
          <div className={"detalle"}>
            <div className={"detalle-header"}>
              <img src={details?.image} alt={details?.name} />
              <div className={"detalle-header-texto"}>
                <p>{details?.name}</p>
                <p>{details?.origin?.name}</p>
                <p>{details?.gender}</p>
              </div>
              <BotonFavorito esFavorito={isFav} onClick={handleFavClick} />
            </div>
          </div>
          <h4>Lista de episodios donde apareció el personaje</h4>
          <div className={"episodios-grilla"}>
            {details?.episode?.map((epi: string, index: number) => (
              <TarjetaEpisodio episodio={epi} key={index} />
            ))}
          </div>
        </>
      ) : (
        <h3>No accediste a ningun detalle de personaje.</h3>
      )}
    </div>
  );
};

export default PaginaDetalle;
