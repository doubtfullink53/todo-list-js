// Import our custom CSS
import '../scss/styles.scss';

// Import all bootstrap
import * as bootstrap from 'bootstrap'

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })
