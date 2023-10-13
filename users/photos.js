const getPhotos = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=200')
        console.log(res);
        return res.data
    } catch (error) {
        console.log(error);
        return [];
    }
};

getPhotos();

const setPhotos = async () => {
    const photo = await getPhotos();

    const photo_div = document.getElementById('photo-group');
    photo_div.innerHTML ='';
    photo.map((info, index) => {
        const col = document.createElement('div')
        col.className ='col'
        col.innerHTML = `
        <div class="card" style="width: 18rem; height: 100%">
            <img src="${info.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${info.title}</p>
            </div>
        </div>`;
        photo_div.appendChild(col);
    });
};

setPhotos();