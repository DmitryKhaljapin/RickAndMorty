import React, { useEffect } from 'react';
import { Card } from '../Card/Card';
import { CharacterPhoto } from '../CharacterPhoto/CharacterPhoto';
import { Wrapper } from '../Wrapper/Wrapper';
import { characters } from '../../../store/characters';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

export const CharacterInfo = observer((): JSX.Element => {

    const params = useParams<{id: string}>();

    useEffect(() => {
        characters.fetchCharacter(+params.id)
    }, [])

    return (
        <Card>
            {characters.character && <Wrapper style={{flexDirection: 'column'}}>
                    <p>{characters.character.name}</p>
                    <CharacterPhoto src={characters.character.image}/>
                    <p>{characters.character.status}</p>
                    <p>{characters.character.species}</p>
                    <p>{characters.character.gender}</p>
                </Wrapper>}
        </Card>
    );
})
