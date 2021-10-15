import { Track } from "./track";

export interface Album {
    name: string;
    releaseDate: string;
    converImage: string;
    tracks: Track[]
}
