import React from 'react';
import Cocktail from './Cocktail';
import { useGlobalContext } from './Context'

const CocktailList = () => {

    const {cocktails} = useGlobalContext()

    if (cocktails.length < 1){
        return (
            <h2 className='section-title'>
                no cocktails matched your search criteria
            </h2>
        )
    }

    return (
        <section className='section'>
            <h2 className='section-title'>cocktails</h2>
            <div className='cocktails-center'>
                {cocktails.map((cocktail) => {
                    return (
                        <Cocktail key={cocktail.id} {...cocktail}/>
                    )
                })}
                
            </div>
        </section>
    );
}

export default CocktailList;
