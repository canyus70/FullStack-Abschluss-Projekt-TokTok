

export const convertDataURLToBlob = async (dataURL) => {
    const response = await fetch(dataURL);
    const blob = await response.blob();
    return blob;
};