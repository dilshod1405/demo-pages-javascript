const getUsers = async () => {
   try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(res);
    return res.data

   } catch (error) {
    return [];
   }
    
}

const setUsers = async () => {
    const users = await getUsers();

    const tbody = document.querySelector('tbody');
tbody.innerHTML = '';
users.map((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
                        <td>${index+1}</td>
                        <td><strong>${user.name}</strong></td>
                        <td>${user.username}</td>
                        <td><a target="_blank" href="https://${user.email}" style="text-decoration: none;">${user.email}</a></td>
                        <td><a target="_blank" href="https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}" style="text-decoration: none;">${user.address.city}</a></td>
                        <td>${user.phone}</td>
                        <td>${user.company.name}</td>
                        <td>
                            <button class="btn me-2"><i class="fas fa-edit" data-bs-target="#editModal" data-bs-toggle="modal"></i></button>
                            <button class="btn me-2"><i class="fas fa-trash" onclick="deleteUsers(${user.id})"></i></button>
                        </td>`;
    tbody.appendChild(row)
})
};

setUsers();


const deleteUsers = async (id) => {
    try {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        console.log(res);
        alert('Successfully deleted !')
        setUsers();
       } catch (error) {
        return [];
       }
};


const fullname = document.getElementById('name')
const email = document.getElementById('email')
const web = document.getElementById('web')
const myModal = document.getElementById('exampleModal')

const addUsers = async () => {
    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', {
            name: fullname.value,
            email: email.value + "@gmail.com",
            web: web.value
            
        });
        console.log(res);
        alert('User successfully added !');
        setUsers();
        myModal.hide();
    } catch (error) {
        console.log(error)
    }
};


