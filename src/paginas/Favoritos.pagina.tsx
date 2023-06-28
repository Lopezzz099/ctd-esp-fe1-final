import { useDispatch } from "react-redux";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { clearFavs } from "../features/favs/favsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favs.favs);

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={() => dispatch(clearFavs())}>Eliminar Todos</button>
        </div>
        {favorites.length >= 1 ? <GrillaPersonajes favs={true}/> : <p>No seleccionaste ningun personaje como favorito</p>}
    </div>
}

export default PaginaFavoritos