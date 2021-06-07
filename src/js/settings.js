export const select = {
  containerOf: {
    sidebar: '.column .navigation',
    topbar: '.topbar',
    datePicker: '.date-picker',
    walletDropdown: '.wallet-dropdown',
  },
  sidebar: {
    menuToggler: '.logo-container',
    listItem: '.sidebar-nav li',
  },
  all: {
    links: '.link',
    formInputs: 'input, select',
    pages: '.page',
  },
  widgets: {
    amount: {
      input: 'input.amount',
      linkDecrease: 'a[href="#less"]',
      linkIncrease: 'a[href="#more"]',
    },
    datePicker: {
      wrapper: '.date-picker .input-container',
      inputStart: `input[name="dateStart"]`,
      inputEnd: `input[name="dateEnd"]`,
      clearButton: '.clear_button',
    },
    hourPicker: {
      wrapper: '.hour-picker',
      input: 'input[type="range"]',
      output: '.output',
    },
  }
};

export const classNames = {
  sidebar: {
    active: 'active',
    activeLink: 'active',
  },
  walletDropdown: {
    active: 'active',
  },

};

export const settings = {
  amountWidget: {
    defaultValue: 1,
    defaultMin: 1,
    defaultMax: 9,
  },
  cart: {
    defaultDeliveryFee: 20,
  },
  hours: {
    open: 12,
    close: 24,
  },
  datePicker: {
    minDaysInPast: 60,
    maxDaysInFuture: 14,
  },
  booking: {
    tableIdAttribute: 'data-table',
  },
  db: {
    url: '//localhost:3131',
  },
};