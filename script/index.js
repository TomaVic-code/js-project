const buttonEditProfile = document.querySelector('.profile__edit-btn');
const profileModalWindow = document.querySelector('.popup_profile-edit');
const closeEditProfile = profileModalWindow.querySelector('.popup__close-btn');
const profileName = document.querySelector('.profile__name');
const ocupation = document.querySelector('.profile__ocupation');
const nameInput = document.querySelector('.popup__name-input');
const ocupationInput = document.querySelector('.popup__ocupation-input');
const profileFormElement = document.querySelector('.popup__form_profile');
// cards
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const cardModalWindow = document.querySelector('.popup_card-edit');
const closeEditCard = cardModalWindow.querySelector('.popup__close-btn');
const buttonEditCard = document.querySelector('.profile__add-button');
const cardsContainer = document.querySelector('.elements__items');
const formCard = document.querySelector('.popup__form_cards');
const cardTitleInput = document.querySelector('.popup__place-input');
const cardImageInput = document.querySelector('.popup__image-input');
const cardFormElement = document.querySelector('.popup__form_cards');
const imageModalWindow = document.querySelector('.popup_card-image');
const closeImage = imageModalWindow.querySelector('.popup__close-btn');
const oppenedImage = imageModalWindow.querySelector('.popup__image');
const caption = imageModalWindow.querySelector('.popup__caption');
const cardTemplate = document.querySelector('.elements__template').content;

function createCard(item) {
    const cardElement = cardTemplate.cloneNode(true);
    const likeButton = cardElement.querySelector('.elements__like'); 
    const deleteButton = cardElement.querySelector('.elements__delete');
    const cardImage = cardElement.querySelector('.elements__image');
    const imageName = cardElement.querySelector('.elements__title');
    
    likeButton.addEventListener('click', (evt) => {
        evt.target.classList.toggle('elements__like_active');
    })
    deleteButton.addEventListener('click', (evt) => {
        evt.target.closest('.elements__item').remove();
    })
    cardImage.addEventListener('click', (evt) => {
        toggleModalWindow(imageModalWindow);
        oppenedImage.src = evt.target.src;
        caption.textContent = imageName.textContent;
    })
    
    imageName.textContent = item.name;
    cardImage.src = item.link;
    return(cardElement);
}

initialCards.forEach((item) => {
    cardsContainer.append(createCard(item));
})

function toggleModalWindow (modalWindow) {
    modalWindow.classList.toggle('popup__opened');
}

function openEditProfileModal() {
    if (!profileModalWindow.classList.contains('popup__opened')) {
        nameInput.value = profileName.textContent;
        ocupationInput.value = ocupation.textContent;
    }
    toggleModalWindow(profileModalWindow);
}

function openEditCardModal() {
    cardTitleInput.value = '';
    cardImageInput.value = '';
    toggleModalWindow(cardModalWindow);
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    ocupation.textContent = ocupationInput.value;
    toggleModalWindow(profileModalWindow);
}

function cardSubmitHandler(evt) {
    evt.preventDefault();
    cardsContainer.prepend(createCard({
        name: cardTitleInput.value,
        link: cardImageInput.value
    }));
    toggleModalWindow(cardModalWindow);
}

profileFormElement.addEventListener('submit', formSubmitHandler);
cardFormElement.addEventListener('submit', cardSubmitHandler);
buttonEditProfile.addEventListener('click', () => {
    openEditProfileModal();
});
buttonEditCard.addEventListener('click', () => {
    openEditCardModal()
});
closeEditProfile.addEventListener('click', () => {
    toggleModalWindow(profileModalWindow);
});
closeEditCard.addEventListener('click', () => {
    toggleModalWindow(cardModalWindow);
});
closeImage.addEventListener('click', () => {
    toggleModalWindow(imageModalWindow);
})