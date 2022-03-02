
    import calc from './modules/calc';
    import form from './modules/form';
    import menu from './modules/menu';
    import modal from './modules/modal';
    import slider from './modules/slider';
    import tabs from './modules/tabs';
    import timer from './modules/timer';
    import openModal from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    calc();
    form('form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    slider({
        container: '.offer__slider', 
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next', 
        prevArrow: '.offer__slider-prev', 
        totalCounter: '#total', 
        currentCounter: '#current', 
        wrapper: '.offer__slider-wrapper', 
        field: '.offer__slider-inner'
    });
    timer('.timer', '2022-04-14');
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    menu();
    
});