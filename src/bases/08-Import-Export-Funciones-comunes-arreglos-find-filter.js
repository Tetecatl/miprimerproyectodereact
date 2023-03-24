import owners, {heroes} from '../data/heroes'

export const getHeroeById = (id)=>
{
    return heroes.find(heroe => heroe.id===id);
}

//console.log(getHeroeById(5));


export const getHeroeOwner = (letra)=>
{
    return heroes.filter((heroe) => heroe.owner === letra );
}

//console.log(getHeroeOwner('Marvel'));

//console.log(owners);