
const $boxComment = document.getElementById('box-comment');

export const boxComment = (userName, avatarImg, parent='box-comment') => {
    const $boxComment = document.createElement('div');
    $boxComment.classList.add('box-comment');

    const $avatar = document.createElement('img');
    $avatar.src = './assets'+avatarImg;

    const $areaComment = document.createElement('textarea');
    
    const $button = document.createElement('button');
    $button.classList.add('button-comment')

    parent === 'box-comment' ? $button.textContent = 'SEND' : $button.textContent = 'REPLY';

    $boxComment.appendChild($avatar);
    $boxComment.appendChild($areaComment);
    $boxComment.appendChild($button);

    document.getElementById(parent).appendChild($boxComment);
}