// these codes is used to appear input block!
let searchBtn = document.querySelector('.searchBtn')
let nav = document.querySelector('nav')
let toggleDiv = document.querySelector('.toggle-div')
let closeBtn = document.querySelector('.fa-times')

searchBtn.addEventListener('click', () => {
    nav.style.display = 'none'
    toggleDiv.style.display = 'block'
    toggleDiv.style.opacity = '1'
});

closeBtn.addEventListener('click', () => {
    nav.style.display = 'block'
    toggleDiv.style.display = 'none'
})


// these codes is used to appear dropdown blocks!
let homeLink = document.querySelector('.home');
let dropdownBlock = document.querySelector('.dropdown-block')

function dropdown() {
    dropdownBlock.style.display = 'block'
    pageDropdown.style.display = 'none'
    blogDropdown.style.display = 'none'
}

function closeDropdown() {
    dropdownBlock.style.display = 'none'
}
homeLink.addEventListener('mouseover', dropdown)
dropdownBlock.addEventListener('mouseover', dropdown)
dropdownBlock.addEventListener('mouseleave', closeDropdown)


let pageLink = document.querySelector('.page');
let pageDropdown = document.querySelector('.pages-dropdown')

function dropdown1() {
    pageDropdown.style.display = 'block'
    dropdownBlock.style.display = 'none'
    blogDropdown.style.display = 'none'
}

function closeDropdown1() {
    pageDropdown.style.display = 'none'
}
pageLink.addEventListener('mouseover', dropdown1)
pageDropdown.addEventListener('mouseover', dropdown1)
pageDropdown.addEventListener('mouseleave', closeDropdown1)


let blogLink = document.querySelector('.blog');
let blogDropdown = document.querySelector('.blog-dropdown')

function dropdown2() {
    pageDropdown.style.display = 'none'
    dropdownBlock.style.display = 'none'
    blogDropdown.style.display = 'block'
}

function closeDropdown2() {
    blogDropdown.style.display = 'none'
}
blogLink.addEventListener('mouseover', dropdown2)
blogDropdown.addEventListener('mouseleave', closeDropdown2)
blogDropdown.addEventListener('mouseover', dropdown2)