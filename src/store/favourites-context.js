import {createContext, useState} from 'react'

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    isFavourite: (meetupId) => {}
});

export function FavouritesContextProvider(props) {
    const [userFavs, setUserFavs] = useState([])

    function addFavouriteHandler(favouriteMeetup) {
        setUserFavs((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteMeetup)
        })
    }

    function removeFavouriteHandler(meetupId) {
        setUserFavs((prevUserFavourites) => {
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId)
        })
    }

    function isFavouriteHandler(meetupId) {
        return userFavs.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favourites: userFavs,
        totalFavourites: userFavs.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        isFavourite: isFavouriteHandler
    }

    console.log(`Favourites: ${userFavs.length}`)
    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext