function mostrarPix() {
    var pixImage = document.getElementById('pixImage');
    if (pixImage.style.display === 'none' || pixImage.style.display === '') {
        pixImage.style.display = 'block';
    } else {
        pixImage.style.display = 'none';
    }
}
