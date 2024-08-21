import React from 'react';
import { Card } from '../Card/Card';
import { useEffect } from 'react'
import { characters } from '../../../store/characters';
import { CharacterPhoto } from '../CharacterPhoto/CharacterPhoto';
import { observer } from 'mobx-react-lite';
import { Wrapper } from '../Wrapper/Wrapper';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CharactersList = observer((): JSX.Element => {
    useEffect(() => {
        characters.fetchCharacters();
    }, [])

    return (
        <List>
            {characters.chatacters && characters.chatacters.map(character => <li key={character.image}>
                <Link to={`/character/${character.id}`}>
                    <Card>
                        <Wrapper>
                            <CharacterPhoto src={character.image}/>
                            <p>{character.name}</p>
                        </Wrapper>
                    </Card>
                </Link>
            </li>)}
        </List>
    )
});