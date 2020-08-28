const theme = document.getElementById('theme-mode')
const root = document.documentElement

theme.addEventListener('click', () => {
  const options = theme.querySelectorAll('input')
  for (option of options) {
    if(option.checked && option.value === 'dark') {
      root.style.setProperty('--text-color', 'white');
      root.style.setProperty('--background-color', '#333');
    } else if(option.checked && option.value === 'light'){
      root.style.setProperty('--text-color', '#333');
      root.style.setProperty('--background-color', 'white'); 
    }
  }
})