const searchBoxForm = document.querySelector('.b_searchboxForm');
const searchInput = document.getElementById('sb_form_q');
const searchButton = document.getElementById('sb_form_go');

searchButton.parentElement.removeAttribute('data-sbtip')
searchButton.parentNode.style = `
    display: flex;
`

const googleButton = document.createElement('button');
googleButton.textContent = '';
googleButton.style = `
    border-radius: 50%;
    width: 30px;
    border: none;
    height: 30px;
    background-color: #fff;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .05s;
`

googleButton.setAttribute('title', 'Search in Google');

const googleImage = document.createElement('img');
googleImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1PJmT_THldF0n5APcmt9p10utgu6KSw4cH2fQ5Xhpw&s"
googleImage.width = 23;
googleImage.height = 23;
googleImage.style.transition = '.05s';
googleImage.style.borderRadius = '50%';

googleButton.appendChild(googleImage);

searchButton.parentNode.insertBefore(googleButton, searchButton.nextSibling);

googleButton.addEventListener('click', () => {
  const searchText = searchInput.value;
  const googleUrl = 'https://www.google.com/search?q=';
  window.open(googleUrl + searchText, '_blank');
});

// googleButton.addEventListener('mouseenter', () => {
//   googleImage.width = 35;
//   googleImage.height = 35;

//   // margin on left side but no other margin
//   googleButton.style.margin = "0";
//   googleButton.style.height = '40px';
//   googleButton.style.width = '40px';

//   googleButton.style.boxShadow = '0 0 10px 0 rgba(0,0,0,0.2)';
// });

// googleButton.addEventListener('mouseleave', () => {
//   googleImage.width = 23;
//   googleImage.height = 23;

//   googleButton.style.margin = "0";
//   googleButton.style.marginTop = "5px";
//   googleButton.style.height = '30px';
//   googleButton.style.width = '30px';

//   googleButton.style.boxShadow = 'none';
// });
