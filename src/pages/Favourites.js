import FavouritesContext from "../store/favourites-context";
import {useContext} from "react";
import MeetupList from "../components/meetups/MeetupList";

function Favourites() {

    const favouritesContext = useContext(FavouritesContext)

    let content;
    if (favouritesContext.totalFavourites === 0) {
        content = <p>You got no favourites</p>
    } else {
        content = <MeetupList data={favouritesContext.favourites}/>
    }

    return content
}

export default Favourites;