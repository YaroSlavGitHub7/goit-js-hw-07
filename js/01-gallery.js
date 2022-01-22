//1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.+
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox.Используй CDN сервис jsdelivr 
// и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента < img > в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе <img>, 
// и указываться в href ссылки. 

// Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию +
// пользователь будет перенаправлен на другую страницу.Запрети это поведение по умолчанию.

// видео Репеты https://www.youtube.com/watch?v=pNxBoxbnTVA&t=3623s (создание КалорсПикер)

import { galleryItems } from './gallery-items.js';
// Change code below this line

// рендер разметки
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// создание разметки
// console.log(createGalleryItemsMarkup(galleryItems));

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return /*шаблон одного элемента*/ ` 
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
        `;
    })
        .join('');
    // console.log(galleryItems);
}

// делегированиe и получение url большого изображения

galleryContainer.addEventListener('click', onGalleryContainerClick, );

function onGalleryContainerClick(evt) {
    evt.preventDefault(); /*запрет перехода по ссылке*/
    const onGalleryIimageClick = evt.target.classList.contains('gallery__image');
        if (!onGalleryIimageClick) { /*кликаем только на ребенка с классом 'gallery__image'*/
            return;
        };   
        // console.log(evt.target.dataset.source);
    // Использ  модального окна библиотеки basicLightbox
    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `)
    instance.show();
}
