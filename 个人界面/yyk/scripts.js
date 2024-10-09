document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image'); // 选择所有具有类名image的<img>元素
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            alert('你点击了图片!');
        });
    });
});