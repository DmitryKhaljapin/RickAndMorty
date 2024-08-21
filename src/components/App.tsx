import React from 'react';
import { CharactersList } from './CharactersList/CharactersList';
import { CharacterPage } from '../pages/CharacterPage';
import { CharactersPage } from '../pages/CharactersPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <CharactersPage />
    },
    {
        path: '/character/:id',
        element: <CharacterPage />
    }
]);

export const App = (): JSX.Element => {
    return (
        <RouterProvider router={router} />
    );
}