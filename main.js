document.addEventListener('DOMContentLoaded', () => {
    const el4 = document.getElementById('element-4');
    const el5 = document.querySelector('#element-5');


    elementClickEvent(el4);
    elementClickEvent(el5);

    const buttons = {
        chooseImage: document.getElementById('choose-image'),
        zoomIn: document.getElementById('zoom-in'),
        zoomOut: document.getElementById('zoom-out'),
        delete: document.getElementById('delete')
    };

    const displayedImage = document.getElementById('displayed-image');
    const container = document.querySelector(".image-container");

    buttons.chooseImage.addEventListener('click', () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    displayedImage.src = e.target.result;
                    container.style.display = 'flex';
                    displayedImage.style.width = '300px';
                    displayedImage.style.height = 'auto';
                };
                reader.readAsDataURL(file);
            }
        });

        fileInput.click();
    });

    buttons.zoomIn.addEventListener('click', () => {
        if (container.style.display === 'flex') {
            const currentWidth = parseInt(displayedImage.style.width);
            displayedImage.style.width = `${currentWidth + 20}px`;
        }
    });

    buttons.zoomOut.addEventListener('click', () => {
        if (container.style.display === 'flex') {
            const currentWidth = parseInt(displayedImage.style.width);
            if (currentWidth > 40) {
                displayedImage.style.width = `${currentWidth - 20}px`;
            }
        }
    });

    buttons.delete.addEventListener('click', () => {
        displayedImage.src = '';
        container.style.display = 'none';
    });


    function elementClickEvent(element) {
        element.addEventListener('click', () => {
            element.style.backgroundColor = `${getRandomColor()}`;
            element.style.color = `${getRandomColor()}`;
        });
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

})