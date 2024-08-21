import { makeAutoObservable } from "mobx";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_CHARACTERS, getCharacter } from "../src/services/query/characters";

interface ICharacter {
    id: number,
    name: string;
    image: string;
}

interface ICharacterExtended extends ICharacter {
    gender: string;
    species: string;
    status: string;
}

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});

class Characters {
    chatacters: ICharacter[];
    character: ICharacterExtended;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchCharacters() {
        const {data: response} = await client.query({
            query: GET_CHARACTERS
        });

        this.chatacters = response.characters.results;
    }

    async fetchCharacter(payload: number) {
       const {data: character} = await  client.query({
            query: getCharacter(payload)
        });

        this.character = character.character;
    }
}

export const characters = new Characters();