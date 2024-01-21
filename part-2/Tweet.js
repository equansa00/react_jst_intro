const Tweet = (props) => {
    return (
        <div className="tweet">
            <h2>{props.username}</h2>
            <h2>{props.name}</h2>
            <h2>{props.date}</h2>
            <h2>{props.message}</h2>
        </div>
    )
}