const colorPicker = document.getElementById('colorPicker');
const hexInput = document.getElementById('hexInput');
const applyButton = document.getElementById('applyColor');

// Update hex input when color is picked
colorPicker.addEventListener('input', () => {
  hexInput.value = colorPicker.value;
});

// Apply color to background
applyButton.addEventListener('click', () => {
  const color = hexInput.value;
  document.body.style.backgroundColor = color;
});