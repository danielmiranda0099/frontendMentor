

export const reply = () => {
    const $reply = document.createElement('span');
    
    const $icon = document.createElement('img');
    $icon.src = './assets/images/icon-reply.svg'

    const $content= document.createElement('span');
    $content.textContent = 'Reply'

    $reply.appendChild($icon);
    $reply.appendChild($content);

    return $reply;
}