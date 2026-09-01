import { useState } from 'react'

const  Form = ({applyFormData}) => {

    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {name: newName, number: newPhone};
        applyFormData(newContact);
        setNewName('');
        setNewPhone('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
            </div>
            <div>
                phone: <input value={newPhone} inputMode="numeric" pattern="[0-9]*" onChange={(e) => setNewPhone(e.target.value)} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form;