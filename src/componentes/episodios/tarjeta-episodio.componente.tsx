import { useEffect, useState } from "react";
import "./tarjeta-episodio.css";

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 *
 * @param {string} episodio - URL del episodio.
 *
 * @returns Un elemento JSX que representa la tarjeta de episodio.
 */

const TarjetaEpisodio: React.FC<{ episodio: string }> = ({ episodio }) => {
  const [cap, setCap] = useState<any>({});

  useEffect(() => {
    /**
     * Obtiene los datos del episodio.
     */
    const getData = async () => {
      const res = await fetch(episodio);
      const data = await res.json();
      setCap(data);
    };

    getData();
  }, [episodio]);

  return (
    <div className="tarjeta-episodio">
      <h4>{cap?.name}</h4>
      <div>
        <span>{cap?.episode}</span>
        <span>Lanzado el: {cap?.air_date}</span>
      </div>
    </div>
  );
};

export default TarjetaEpisodio;
