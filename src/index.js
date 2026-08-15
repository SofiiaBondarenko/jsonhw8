const bookmarkInput = document.querySelector('#bookmarkInput');
const addBookmarkBtn = document.querySelector('#addBookmarkBtn');
const bookmarksList = document.querySelector('#bookmarksList');


let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

function renderBookmarks() {
    bookmarksList.innerHTML = ''; 

    bookmarks.forEach((url, index) => {
        const li = document.createElement('li');

        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank'; 
        a.textContent = url;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete'); 
        deleteBtn.addEventListener('click', () => deleteBookmark(index));

        li.appendChild(a);
        li.appendChild(deleteBtn);
        bookmarksList.appendChild(li);
    });
}

function addBookmark() {
    const urlValue = bookmarkInput.value.trim();

    if (urlValue === '') {
        alert('Будь ласка, введіть URL-адресу!');
        return;
    }

    bookmarks.push(urlValue);

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    bookmarkInput.value = '';

    renderBookmarks();
}

function deleteBookmark(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    renderBookmarks();
}

addBookmarkBtn.addEventListener('click', addBookmark);

bookmarkInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBookmark();
    }
});

renderBookmarks();




const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const saveBtn = document.getElementById('saveBtn');

function loadFormData() {
    const savedUsername = localStorage.getItem('savedUsername');
    const savedPassword = localStorage.getItem('savedPassword');

    if (savedUsername !== null) {
        usernameInput.value = savedUsername;
    }
    if (savedPassword !== null) {
        passwordInput.value = savedPassword;
    }
}

function saveFormData() {
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    localStorage.setItem('savedUsername', usernameValue);
    localStorage.setItem('savedPassword', passwordValue);

    alert('Дані форми успішно збережено!');
}

if (saveBtn) {
    saveBtn.addEventListener('click', saveFormData);
}

loadFormData();