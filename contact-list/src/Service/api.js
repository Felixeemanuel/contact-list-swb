import axios from 'axios';

// export const getAllContacts = () => {
//     axios.get('contacts.json')
//         .then((response) => {
//             console.log(response);
//         })
//         .catch((error) => {
//             console.log(error);
//         })

// }

const url = 'http://localhost:3001/contacts';

export const getAllContacts = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}