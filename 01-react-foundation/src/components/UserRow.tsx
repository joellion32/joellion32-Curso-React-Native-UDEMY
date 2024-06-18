import { User } from "../interfaces";

interface Props {
    user: User
}

// functional component
export const UserRow = ({ user }: Props) => {
    const { avatar, first_name, last_name, email } = user;
    return (
        <tr>
            <td><img style={{ width: '50px', height: '50px', borderRadius: 50, objectFit: 'contain' }} src={avatar} alt={user.first_name} /></td>
            <td>{first_name} {last_name}</td>
            <td>{email}</td>
        </tr>
    )
}
