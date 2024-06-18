interface Person {
    fullName: string;
    lastName: string;
    age: number;
    isAlive?: boolean;
    address: Address
}

interface Address {
    country: string;
    houseNo: number;
}

export const ObjectLiterals = () => {
    const person: Person = {
        fullName: 'Joel',
        lastName: 'Toribio Polanco',
        age: 24,
        isAlive: true,
        address: {
            country: 'Rep. Dom',
            houseNo: 204
        }
    }

    return (
        <>
            <h3>Objetos literales</h3>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>
    )
}