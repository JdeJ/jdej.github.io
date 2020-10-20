(function showPresentation() {
    const startButton = document.querySelector('.start-button');
    const presentationContainer = document.querySelector('.presentation');

    if (!startButton) {
        return;
    }

    startButton.addEventListener('click', () => {
        const presentationGif = document.createElement('article');

        presentationGif.setAttribute('class', 'crt presentation-container');
        
        presentationGif.innerHTML = `
            <figure>
                <img class="bio-gif"/>
            </figure>
            <p class="footer continue">Press to continue...</p>
        `;

        const node = presentationContainer.appendChild(presentationGif);

        node.querySelector('.bio-gif').src="./images/bio.gif";

        const timeout = setTimeout(removePresentation, 17560);

        node.addEventListener('click', removePresentation);

        function removePresentation() {
            timeout && clearTimeout(timeout);
            node.removeEventListener('click', removePresentation);
            presentationContainer.removeChild(node);
        }

        function scrollToPersonalProfile() {
            
        }
    });

})();
