const menu = document.getElementById('menu')
const logo = document.getElementById('logo')
const items = document.getElementById('menu_items')
const icon  = document.getElementById('menu_button_id')


icon.addEventListener('click', async () => {
    if(items.classList.contains('menu_items')){
        items.classList.replace('menu_items', 'menu_toggle')
        menu.classList.replace('menu', 'menu_toggle_complete')
       logo.classList.replace('logo', 'logo_toggle')
       icon.classList.replace('menu_mobile_img', 'menu_button_id_toggle')
        console.log('de menu_items a toggle')
    } else {
        items.classList.replace('menu_toggle', 'menu_items')
        menu.classList.replace('menu_toggle_complete', 'menu')
        logo.classList.replace('logo_toggle', 'logo')
        icon.classList.replace('menu_button_id_toggle', 'menu_mobile_img')
        console.log('de toggle a menu_items')
    }
})
