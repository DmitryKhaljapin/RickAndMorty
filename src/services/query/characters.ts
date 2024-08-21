import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
    query {
        characters(page: 1) {
            results {
                id,
                name,
                image
            }
        }
    }
`;

export const getCharacter = function(id: number) {
    return gql`
       query {
           character(id: ${id}) {
                   id,
               name,
                   image,
                   gender,
                   species,
                   status,
           }
       }
   `
}