

export const avatarUser = (username, pathImg, createdAt) => {
    const $avatarUser = document.createElement('div');
    $avatarUser.classList.add('avatar-user')

    const $img = document.createElement('img');
    $img.src = './assets'+pathImg;

    const $username = document.createElement('span');
    $username.textContent = username;

    const $createdAt = document.createElement('p');
    $createdAt.textContent = createdAt;

    $avatarUser.appendChild($img);
    $avatarUser.appendChild($username);
    $avatarUser.appendChild($createdAt);

    return $avatarUser;
}