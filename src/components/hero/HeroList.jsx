import React, { useMemo } from 'react'
import { getHeroesByPublishser } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';


export const HeroList = ({ publisher }) => {

  const heroes = useMemo( () => getHeroesByPublishser(publisher),[publisher]); 

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
          heroes.map(hero => (
            <HeroCard  key={hero.id} { ...hero } />
          ))
        }
    </div>
  )
}

