export interface BotonFavoritoProps {
    esFavorito: boolean;
    onClick: () => void;
}


export interface Character {
    id: number;
    name: string;
    origin: string;
    gender: string;
    image: string;
    episode: Array<string>;
}

export interface PaginationInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface CharactersState {
    characters: Character[];
    pagination: PaginationInfo;
    loading: boolean;
    error: string | null;
}