import { classNames, select } from './settings.js';
import DatePicker from './components/DatePicker.js';

{
  'use strict';

  const elementsToggler = function(){

    // Sidebar toggler for mobile
    if(window.innerWidth <= 576) {
      const sidebarContainer = document.querySelector(select.containerOf.sidebar);
      const menuToggler = sidebarContainer.querySelector(select.sidebar.menuToggler);
  
      menuToggler.addEventListener('click', function(event){
        event.preventDefault();
  
        sidebarContainer.classList.toggle(classNames.sidebar.active);
      });

    }


    // Wallet dropdown toggler
    const allWalletDropdown = document.querySelectorAll(select.containerOf.walletDropdown);

    for(let walletDropdown of allWalletDropdown){

      walletDropdown.addEventListener('click', function(){
        walletDropdown.classList.toggle(classNames.walletDropdown.active);
      });

      // if(window.innerWidth <= 576) {
      //   walletDropdown.addEventListener('click', function(){
      //     walletDropdown.classList.toggle(classNames.walletDropdown.active);
      //   });
      // }
      // else {
      //   walletDropdown.addEventListener('click', function(){
      //     walletDropdown.classList.toggle(classNames.walletDropdown.active);
      //   });
      // }
    }
  };

  elementsToggler();


  const initActions = function(){
    const datePickerContainer = document.querySelector(select.widgets.datePicker.wrapper);

    // eslint-disable-next-line no-unused-vars
    const datePicker = new DatePicker(datePickerContainer);

  };

  initActions();

}
