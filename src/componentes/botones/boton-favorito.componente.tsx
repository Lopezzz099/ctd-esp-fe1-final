import { BotonFavoritoProps } from '../../types/types';
import './boton-favorito.css';
/**
 * Botón que indica si un elemento es favorito o no, y permite marcarlo o desmarcarlo.
 *
 * @param {BotonFavoritoProps} props - Propiedades del componente BotonFavorito.
 * @param {boolean} props.esFavorito - Indica si el elemento es favorito o no.
 * @param {() => void} props.onClick - Función que se ejecuta cuando se hace clic en el botón.
 * 
 * @returns Un elemento JSX que representa el botón de favorito.
 */


const BotonFavorito: React.FC<BotonFavoritoProps> = ({esFavorito, onClick}) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={onClick}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;