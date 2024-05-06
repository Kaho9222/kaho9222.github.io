const volumeControl = document.getElementById('volume-control');
const volumeDisplay = document.getElementById('volume-display');

volumeControl.addEventListener('mousemove', (event) => {
    const volumePercentage = calculateVolume(event.clientX, event.clientY);
    updateVolumeDisplay(volumePercentage);
});

function calculateVolume(x, y) {
    const volumeControlRect = volumeControl.getBoundingClientRect();
    const volumeX = (x - volumeControlRect.left) / volumeControlRect.width;
    const volumePercentage = Math.min(100, Math.max(0, volumeX * 100));
    return volumePercentage;
}

function updateVolumeDisplay(volumePercentage) {
    volumeDisplay.textContent = `Volume: ${Math.round(volumePercentage)}%`;
}