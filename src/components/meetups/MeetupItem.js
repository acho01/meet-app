import classes from './MeetupItem.module.css'
import Card from "../ui/Card";
import {useContext} from "react";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
    let favouritesContext = useContext(FavouritesContext);

    const itemIsFavourite = favouritesContext.isFavourite(props.item.id)

    function toggleFavouriteStatusHandler() {
        if (itemIsFavourite) {
            favouritesContext.removeFavourite(props.item.id)
        } else {
            favouritesContext.addFavourite({
                id: props.item.id,
                title: props.item.title,
                image: props.item.image,
                address: props.item.address,
                description: props.item.description
            })
        }
    }

    return (
        <li className={classes.item} key={props.item.id}>
            <Card>
                <div className={classes.image}>
                    <img src={props.item.image} alt={props.item.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.item.title}</h3>
                    <address>{props.item.address}</address>
                    <p>{props.item.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? 'Remove From Favourites' : 'To Favourites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;