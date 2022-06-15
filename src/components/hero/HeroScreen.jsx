import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const { heroeId } = useParams(); // Hook de React Router que regresa un arreglo con los parametros del path

    const navigate = useNavigate();

    // const hero = getHeroById(heroeId);
    const hero = useMemo( () => getHeroById(heroeId),[heroeId]); 

    if( !hero ) { return <Navigate to='/' /> } // Navigate es un componente ya creado por React Router 

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () => {
        navigate( -1 ); // Navega al historial anterior, puede haber un problema saque al usurio de nuestra aplicación pero para fines educativos esta bien
    }

    const imagePath = `/assets/${hero.id}.jpg`;

    return (
        <div className='row mt-5 animate__animated animate__fadeInLeft'>
            <div className='col-4'>
                <img src={ imagePath } alt={ hero.superhero } className='img-thumbnail'/>
            </div>
            <div className='col-8'>
                <h3>{ superhero }</h3>
                <ul className='list-group'>
                    <li className='list-group-item'> <b>Alter ego:</b> { alter_ego } </li>
                    <li className='list-group-item'> <b>Publisher:</b> { publisher } </li>
                    <li className='list-group-item'> <b>First Appearance:</b> { first_appearance } </li>
                </ul>

                <h5 className='mt-3'>Characters</h5>
                <p> { characters } </p>

                <button className='btn btn-outline-info' onClick={ handleReturn }> Return </button>

            </div>
        </div>
    )
}
