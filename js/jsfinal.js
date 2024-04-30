const decreaseVolumeButton = document.getElementById('decrease-volume');
const increaseVolumeButton = document.getElementById('increase-volume');
const volumeDisplay = document.getElementById('volume-display');

let volume = 50; 

decreaseVolumeButton.addEventListener('click', () => {
    volume = Math.max(0, volume - 1); 
    updateVolumeDisplay();
});

increaseVolumeButton.addEventListener('click', () => {
    volume = Math.min(100, volume + 1); 
    updateVolumeDisplay();
});

function updateVolumeDisplay() {
    volumeDisplay.textContent = `Volume: ${volume}%`;
    console.log(`Volume set to: ${volume}`);

}