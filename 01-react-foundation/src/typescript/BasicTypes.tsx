export const BasicTypes = () => {
    const name: string = 'Joel';
    const age: number = 24;
    const isActive: boolean = true;
    const powers: string[] = ['React', 'React Native', 'Angular', 'Laravel', 'Ionic'];

    return (
        <div>
            <h3>BasicTypes</h3>
            {name} {age} {isActive ? 'true' : 'false'}
            {powers.join(', ')}
        </div>
    )
}