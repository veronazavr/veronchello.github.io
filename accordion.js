document.addEventListener('DOMContentLoaded', function () {
    var accordionItems = document.querySelectorAll('.accordion li');

    accordionItems.forEach(function (item) {
        var title = item.querySelector('.feature-title');
        var description = item.querySelector('.feature-description');

        title.addEventListener('click', function () {
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                description.style.maxHeight = description.scrollHeight + 'px';
            } else {
                description.style.maxHeight = '0';
            }
        });
    });
});