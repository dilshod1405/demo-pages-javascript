const getAlbum = async() => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/albums')
        console.log(res);
        return res.data
    } catch (error) {
        console.log(error);
        return [];
    }
};

getAlbum();


const setAlbum = async () => {
    const albums = await getAlbum();

    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    albums.map((album, index) => {
        const row = document.createElement('tr');
    row.innerHTML = `
                        <td>${index+1}</td>
                        <td>${album.id}</td>
                        <td>${album.title}</td>
                       `;
    tbody.appendChild(row);
    });
}

setAlbum();