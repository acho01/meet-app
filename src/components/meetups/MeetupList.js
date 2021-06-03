import classes from './MeetupList.module.css'
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {
                props.data.map(meetup => {
                    return <MeetupItem item={meetup}/>
                })
            }
        </ul>
    )
}

export default MeetupList;