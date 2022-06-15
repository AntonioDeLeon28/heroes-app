import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'; // Es una biblioteca que nos ayuda a procesar el path y segmentarlo, primero en la consola instalno com " yarn add query-string"
import { useForm } from '../../hooks/useForm';
import { HeroScreen } from '../hero/HeroScreen';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

    const navigate = useNavigate(); // Es un hook de react router
    const location = useLocation(); // Es un hook de react router que nos brinda información como el path actual
    // console.log(location);
    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const { searchText, handleInputChange } = useForm({ searchText: q });

    const onSearchSubmit = (e) => {
        e.preventDefault();
        // if (searchText.trim().length <= 1) return;
        // navigate(``); // Esto indica una navegación al mismo lugar donde nos escontramos parados
        navigate(`?q=${searchText}`); // Agregamos un poco al path y navegamos a esa dirección
    }

    return (
        <>

            <h1> Search Screen </h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4> Searching </h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type='text'
                            placeholder='Search a hero'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button className='btn btn-outline-primary mt-1'> Search </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4> Results </h4>
                    <hr />

                    {
                        ( q === '' ) 
                        ? <div className='alert alert-primary'> Search a hero </div>
                        : ( heroes.length === 0 ) && <div className='alert alert-danger'> There're no results with <b> {q} </b> </div>
                    }

                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>

            </div>
        </>

    )
}
