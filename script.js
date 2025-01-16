document.getElementById('generate-button').addEventListener('click', function() {
    const ports = document.querySelectorAll('.dropzone');
    const participants = Array.from(ports).map(port => {
        return Array.from(port.children).map(child => child.textContent);
    });

    const minSize = Math.min(...participants.map(port => port.length));

    if (minSize === 0) {
        alert('각 포트에 최소 한 명 이상 배치해야 합니다.');
        return;
    }

    const teams = [];
    for (let i = 0; i < minSize; i++) {
        const team = participants.map(port => {
            const randomIndex = Math.floor(Math.random() * port.length);
            return port.splice(randomIndex, 1)[0];
        });
        teams.push(team);
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    teams.forEach((team, index) => {
        const teamDiv = document.createElement('div');
        teamDiv.classList.add('team');
        teamDiv.textContent = `Team ${index + 1}: ${team.join(', ')}`;
        resultDiv.appendChild(teamDiv);
    });
});
