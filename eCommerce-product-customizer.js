let selectedColor = 'Red';
let selectedSize = 'M';
//u can add size or colors, u can simply add this code to your html or any where

function customizeProduct(color, size) {
    selectedColor = color;
    selectedSize = size;
    updatePreview();
}

function updatePreview() {
    console.log(`Selected: ${selectedColor}, Size: ${selectedSize}`);
}
