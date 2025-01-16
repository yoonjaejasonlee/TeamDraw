const names = document.querySelectorAll('.name');
const dropzones = document.querySelectorAll('.dropzone');

names.forEach(name => {
    name.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.textContent);
    });
});

dropzones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.style.backgroundColor = '#dff9fb';
    });

    zone.addEventListener('dragleave', (e) => {
        zone.style.backgroundColor = '#ecf0f1';
    });

    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.style.backgroundColor = '#ecf0f1';
        const droppedName = e.dataTransfer.getData('text/plain');
        const nameDiv = document.querySelector(`.name:contains("${droppedName}")`);
        if (nameDiv) {
            zone.appendChild(nameDiv.cloneNode(true));
            nameDiv.remove();
        }
    });
});
