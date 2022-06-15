import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

// // Creación de un componente que no es importado, sólo funciona para este componente
// const CharactersByHero = () => { // No estoy usando este componente pero es con fines educativos
//     if ( alter_ego === characters ) return ( <></> );
//     return <p className='text-muted'>{ characters }</p>
//     // Otra forma es unsar un ternario
//     return ( alter_ego === characters ) ? <></> : <p className='text-muted'>{ characters }</p> ;
// }

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const imgPath = `/assets/${id}.jpg`;

    const charactesByHero = (<p className='text-muted'>{ characters }</p>); // Variable que regresa JSX

    return (
        <div className='card animate__animated animate__fadeIn mt-2' >
            <div className='row no-gutters'>
                <div className='col-4'>
                    <img src={imgPath} className='card-img' alt={superhero} />
                </div>

                <div className='col-8'>
                    <h5 className='card-title'> {superhero} </h5>
                    <p className='card-text'> {alter_ego} </p>
                    {(alter_ego !== characters) && charactesByHero}
                    <p className='card-text'>
                        <small className='text-muted'> {first_appearance} </small>
                    </p>
                    <Link to={`/hero/${id}`}> Mas... </Link>
                </div>
            </div>
        </div>
    )
}
