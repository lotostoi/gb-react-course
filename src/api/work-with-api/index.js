import http from "../http";

const listPhotosApi = http('https://picsum.photos');

export const getListPhotos = async () => {
    const { data } = await listPhotosApi('/v2/list?page=2&limit=20');
    return data;
}