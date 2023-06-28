import { useDispatch } from "react-redux";
import "./filtros.css";
import { AppDispatch, RootState } from "../../store/store";
import { fetchCharacters } from "../../features/characters/characterSlice";
import { setInputValue } from "../../features/input/inputSlice";
import { useSelector } from "react-redux";

const Filtros: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const inputValue = useSelector((state: RootState) => state.input.value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
    dispatch(fetchCharacters({ page: 1, name: event.target.value }));
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Filtros;
