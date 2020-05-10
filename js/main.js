const searchContainer = document.querySelector('.search-container');
const focusSearch = document.querySelectorAll('.focus-search');
const search = document.querySelector('.search');
const svgSearch = document.querySelector('#svg-search');
const listContainer = document.querySelector('.list-container');
const crossBarContainer = document.querySelector('.cross-bar-container');

const uxList = [
    {title: 'UX Designer', url: '../PlumPear/designer.html'},
    {title: 'UX Researcher', url: '#researcher'},
    {title: 'UX Writer', url: '#writer'},
    {title: 'UX Mama', url: '#mom'},
    {title: 'UX Dad', url: '#dad'},
    {title: 'UX Reader', url: '#reader'},
    {title: 'UX Worker', url: '#worker'},
    {title: 'UX Dude', url: '#dude'}];

function filteredList(e) {
    const searchText = this.value;
    console.log(searchText);
    // show the filtered drop down list
    const result = uxList.filter(item => {
        return item.title.toLowerCase().includes(searchText.toLowerCase())
    })
    // console.log(result.length);
    let htmlDropdown;
    if (!searchText == '' && result.length > 0) {
        const tempHtml = result.map(item => {
            return `
                <a href="${item.url}" class="dropdown-a">
                    <li class="dropdown-item dropdown-hl whiteBkgrnd">
                        ${item.title}
                    </li>
                </a>
            `
        }).join('');
        htmlDropdown = `<ul class="dropdownList">${tempHtml}</ul>`
        // addWhiteBkgrnd();
    } else {
        htmlDropdown = '';
    }
    listContainer.innerHTML = htmlDropdown;
    if (document.querySelector('.dropdownList')) {
        document.querySelector('.dropdownList').addEventListener('mouseleave', () => listContainer.innerHTML = '');
    }
}

function toggleBkgrndHL(e) {
    const searchText = this.querySelector('.search').value;
    if (e.type === 'mouseover' || !searchText == '') {
        focusSearch.forEach(ele => {
            ele.classList.add('whiteBkgrnd');
        })
        svgSearch.style.fill = '#000000';
    } else {
        focusSearch.forEach(ele => {
            ele.classList.remove('whiteBkgrnd');
        })
        svgSearch.style.fill = 'var(--pp-grey)';
    }
}

/*** Event listeners ***/
searchContainer.addEventListener('mouseover', toggleBkgrndHL);
searchContainer.addEventListener('mouseleave', toggleBkgrndHL);
search.addEventListener('keyup', filteredList);

/*** Research AREA ***/

function inspect(e) {
    // console.log(e);
    // console.dir(e);
    console.log(this.innerText);
    console.dir(this);
}

