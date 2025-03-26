export default function Profile(){
    const a={
        "name":"Abhishek H J",
        "Age":18,
        "Education":"B.E.",
        "Skills":"Java, Python, Javascript"

    }
    return(
        <>
        <p>Name: {a.name}</p>
        <p>Age: {a.Age}</p>
        <p>Education: {a.Education}</p>
        <p>Skills:{a.Skills}</p>
        </>
    )
}