let buttonEdit = document.querySelector('.profile__edit-btn');
let closeEdit = document.querySelector('.popup__close-btn');
let popup = document.querySelector('.popup');
let name = document.querySelector('.profile__name');
let ocupation = document.querySelector('.profile__ocupation');
let saveChanges = document.querySelector('.popup__save-btn');
let nameInput = document.querySelector('.popup__name-input');
let ocupationInput = document.querySelector('.popup__ocupation-input');
let formElement = document.querySelector('.popup__form');

function popupFields() {
    if (popup.classList.contains('popup__opened')) {
        nameInput.value = name.textContent;
        ocupationInput.value = ocupation.textContent;
    }
}

buttonEdit.addEventListener('click', function(){
    popup.classList.add('popup__opened');
    popupFields();
})

closeEdit.addEventListener('click', function(){
    popup.classList.remove('popup__opened');
})

function formSubmitHandler(evt){
    evt.preventDefault();
    name.textContent = nameInput.value;
    ocupation.textContent = ocupationInput.value;
    popup.classList.remove('popup__opened');
}

formElement.addEventListener('submit', formSubmitHandler);

// function togglePopup() {
//     popup.classList.toggle('popup__opened');
//     if (popup.classList.contains('popup__opened')) {
//         nameInput.value = name.textContent;
//         ocupationInput.value = ocupation.textContent;
//     }
// }

// function formSubmitHandler(evt) {
//     evt.preventDefault();
//     name.textContent = nameInput.value;
//     ocupation.textContent = ocupationInput.value;
//     togglePopup();
// }

// formElement.addEventListener('submit', formSubmitHandler);
// closeEdit.addEventListener('click', togglePopup);
// buttonEdit.addEventListener('click', togglePopup);