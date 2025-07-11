
export function cargarImg(cant_imagenes_carrusel) {
    const carruselImg = [];

    for (let i = 1; i <= cant_imagenes_carrusel; i++) {
        carruselImg.push(`/imgSlider/img${i}.webp`);
    }

    return carruselImg;
}

export function cargarImgProductos(cant_imagenes_carrusel) {
    const carruselImg = [];

    for (let i = 1; i <= cant_imagenes_carrusel; i++) {
        carruselImg.push(`/pasteleria/torta${i}.jpeg`);
    }

    return carruselImg;
}







