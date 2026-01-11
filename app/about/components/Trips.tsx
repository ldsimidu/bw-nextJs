//"use client";
// Usado para sair do server component e utilizar states

const Trips = async () => {
    const data = await fetch("http://jsonplaceholder.typicode.com/posts", {
        next:{
            revalidate: 0
        }
    }).then((res) => res.json())
    return (
        <div>
            {data.map((i: any) => (
                <p key={i.id}>{i.title}</p>
            ))}
        </div>
    )
}

export default Trips