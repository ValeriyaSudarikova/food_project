window.addEventListener('DOMContentLoaded', () => {

    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          menu = require('./modules/menu'),
          slider = require('./modules/slider'),
          calculator = require('./modules/calculator'),
          formData = require('./modules/form-data');

    tabs();
    modal();
    timer();
    menu();
    slider();
    calculator();
    formData();
    
});