const Person = (props) => {
    return (
        <ul>
        <p>Learn some information about this person</p>
        <h3>Name: {props.name}</h3>
        <h3>Age: {props.age>18 ?  "please go vote" : "you must be 18"}</h3>
        </ul>
    )
}
