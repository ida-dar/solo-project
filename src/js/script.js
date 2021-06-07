import { classNames, select } from './settings.js';
import DatePicker from './components/DatePicker.js';

{
  'use strict';

  const sidebarToggler = function(){

    const sidebarContainer = document.querySelector(select.containerOf.sidebar);

    if(window.innerWidth <= 576) {
      const menuToggler = sidebarContainer.querySelector(select.sidebar.menuToggler);
  
      menuToggler.addEventListener('click', function(event){
        event.preventDefault();
  
        sidebarContainer.classList.toggle(classNames.sidebar.active);
      });

    }
  };

  sidebarToggler();


  const navPageLinksHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    const pageLink = clickedElement.childNodes[3];
    console.log(pageLink);

    const navLinks = document.querySelectorAll(select.sidebar.listItem);
    //console.log(navLinks);

    for(let navLink of navLinks){
      navLink.classList.remove(classNames.sidebar.activeLink);
    }

    clickedElement.classList.add(classNames.sidebar.activeLink);

    const activePages = document.querySelectorAll(select.all.pages);
    console.log(activePages);

    for(let activePage of activePages){
      activePage.classList.remove(classNames.sidebar.activeLink);
    }

    const pageSelector = pageLink.getAttribute('href');
    console.log(pageSelector);

    const targetPage = document.querySelector(pageSelector);
    console.log(targetPage);

    targetPage.classList.add(classNames.sidebar.activeLink);
  };


  const showPage = function(){
    const navLinks = document.querySelectorAll(select.sidebar.listItem);

    for(let navLink of navLinks){
      navLink.addEventListener('click', navPageLinksHandler);
    }
  };

  showPage();


  const walletDropdown = function(){

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

  walletDropdown();


  const initActions = function(){
    const datePickerContainer = document.querySelector(select.widgets.datePicker.wrapper);

    // eslint-disable-next-line no-unused-vars
    const datePicker = new DatePicker(datePickerContainer);

  };

  initActions();


  const initChart = function(){

    var ctx = document.getElementById('myChart').getContext('2d');
    var delayed;
    // eslint-disable-next-line no-undef, no-unused-vars
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [
          {
            label: 'Signups',
            pointStyle: 'circle',
            data: [350, 200, 220, 370, 410, 390, 290, 270, 295, 320],
            backgroundColor: ['#56819f'],
            borderColor: ['#56819f'],
          },
          {  
            label: 'FTD',
            data: [400, 170, 310, 240, 450, 110, 200, 500, 310, 300],
            backgroundColor: ['#f58220'],
            borderColor: ['#f58220'],
          },
          {  
            label: 'Earned',
            data: [350, 200, 220, 370, 450, 110, 200, 500, 270, 290],
            backgroundColor: ['#04ae00'],
            borderColor: ['#04ae00'],
            hidden: true,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        layout: {
          padding: {
            bottom: 50,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 600,
          }
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 20,
              font:{
                size: 14,
                color: '#a6a6a6',
                lineHeight: 1.7,
              },
            },
          },
          datalabels: {
            listeners: {
              enter: function(context) {
                context.hovered = true;
                return true;
              },
              leave: function(context) {
                context.hovered = false;
                return true;
              },
              click: function(context) {
                context.backgroundColor === 'green';
              }
            }
          }
        },
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 150 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
      },
    });
  };

  initChart();

}
