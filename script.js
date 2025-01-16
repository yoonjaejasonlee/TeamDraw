document.getElementById('generate-button').addEventListener('click', function() {
    const ports = Array.from(document.querySelectorAll('#port-inputs .port textarea'));
    const participants = ports.map(port => port.value.split('\\n').filter(name => name.trim() !== ''));

    const minSize = Math.min(...participants.map(group => group.length));

    if (minSize === 0) {
        document.getElementById('result').innerHTML = '<p>Each port must have at least one participant.</p>';
        return;
    }

    const teams = [];
    for (let i = 0; i < minSize; i++) {
        const team = participants.map(group => {
            const randomIndex = Math.floor(Math.random() * group.length);
            return group.splice(randomIndex, 1)[0];
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
