import { heroes } from "../data/heroes"


export const getHeroesByPublishser = ( publisher ) => {

    const validPublishers = [ 'DC Comics', 'Marvel Comics' ];

    if ( !validPublishers.includes( publisher ) ) { throw new Error ( `${ publisher } isn't a valid publisher` ) }

    return heroes.filter( hero => hero.publisher === publisher );

}

