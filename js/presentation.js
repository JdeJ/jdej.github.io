(function showPresentation() {
    const startButton = document.querySelector('.start-button');
    const presentationContainer = document.querySelector('#presentation');

    if (!startButton) {
        return;
    }

    startButton.addEventListener('click', () => {
        const presentationGif = document.createElement('article');

        presentationGif.setAttribute('class', 'presentation-container');
        
        presentationGif.innerHTML = `
            <figure>
                <img class="bio-gif"/>
            </figure>
        `;

        const node = presentationContainer.appendChild(presentationGif);

        node.querySelector('.bio-gif').src="./images/bio.gif";

        setTimeout(() => {
            presentationContainer.removeChild(node);
        }, 17560);
    });

})();
