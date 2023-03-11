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
    height: 30px;
    outline: 1px solid black;
    border: none;
    margin-top: 5px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

googleButton.setAttribute('title', 'Search in Google');

const googleImage = document.createElement('img');
googleImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1PJmT_THldF0n5APcmt9p10utgu6KSw4cH2fQ5Xhpw&s"
googleImage.width = 23;
googleImage.height = 23;

googleButton.appendChild(googleImage);

searchButton.parentNode.insertBefore(googleButton, searchButton.nextSibling);

googleButton.addEventListener('click', () => {
  const searchText = searchInput.value;
  const googleUrl = 'https://www.google.com/search?q=';
  window.open(googleUrl + searchText, '_blank');
});
