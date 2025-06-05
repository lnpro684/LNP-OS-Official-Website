function toggleDropdown() {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }

  // Optional: Close dropdown when clicking outside
  window.addEventListener('click', function(e) {
    const menu = document.getElementById('dropdownMenu');
    const button = document.querySelector('.dropdown-button');
    if (!button.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = 'none';
    }
  });