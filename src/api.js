const getJsonResponseFromApi = async (apiUrl) => {
    const response = await fetch(apiUrl) 
                                .then(response => response.json());
    return response;
};

const getAlbumDataPerUser = async (userId) => {
    const albumsPerUser = await getJsonResponseFromApi(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    const albumData = {
        "firstAlbumId": albumsPerUser[0].id,
        "totalAlbums": albumsPerUser.length
    }
    return albumData;
};

const getFirstImageByAlbumId = async (albumId) => {
    const imagesByAlbumId = await getJsonResponseFromApi(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    const firstImage = imagesByAlbumId[0];
    return firstImage;
};

const buildUserData = async (allUsers) => {
    const users = await Promise.all(allUsers.map(async (user) => {
        const albumData = await getAlbumDataPerUser(user.id);
        const firstAlbumImage = await getFirstImageByAlbumId(albumData.firstAlbumId);
        return {
            "company": user.company.name,
            "firstAlbumId": albumData.firstAlbumId,
            "albumImage": firstAlbumImage.thumbnailUrl,
            "albumImageAlt": firstAlbumImage.title,
            "name": user.name,
            "totalAlbums": albumData.totalAlbums,
            "website": `https://${user.website}`,
            "userId": user.id
        }
    }));
    return users;
};

export const getAllUserData = async (page) => {
    const allUsers = await getJsonResponseFromApi(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=15`
    );
    const users = await buildUserData(allUsers);
    return users;
};

export const getAllUsersByName = async (name, page) => {
    const allUsers = await getJsonResponseFromApi(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=15&name_like=${encodeURIComponent(name)}`
    );
    const users = await buildUserData(allUsers);
    return users;
}