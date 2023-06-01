var canvas = null;
var ctx = null;

function init() {
  if (!checkBrowserSupport()) return;
  setTimeout(() => {
    canvas = document.getElementsByTagName('canvas')[0];
    console.log(canvas);
    ctx = canvas.getContext('2d');

    // Call the updateBackgroundColor function initially
    updateBackgroundColor();

  }, 1000);

  // Check gamepad connection status initially
  checkGamepadConnection();

  // Add an event listener for gamepad connection changes
  window.addEventListener('gamepadconnected', checkGamepadConnection);
  window.addEventListener('gamepaddisconnected', checkGamepadConnection);
}

function checkGamepadConnection() {
  const gamepads = navigator.getGamepads();
  const isConnected = !!gamepads[0]; // Check if the first gamepad is connected

  if (isConnected) {
    // Gamepad connected, remove text
    const textElement = document.getElementById('gamepadText');
    if (textElement) {

      // Fade out the text
      textElement.style.color = 'green';
      textElement.style.borderColor = 'green';

      setTimeout(() => {
        textElement.style.top = '-100px';
        setTimeout(() => {
          textElement.style.opacity = 0;
          setTimeout(() => {
            textElement.remove();
          }, 1000);
        }, 1000);
      }, 1000);
    }
  } else {
    // Gamepad not connected, show text
    const gamepadText = document.createElement('p');
    gamepadText.id = 'gamepadText';
    gamepadText.textContent = 'Gamepad not connected, For the best experience, please connect a gamepad.';
    document.body.appendChild(gamepadText);
  }
}

// Get the dominant color from the canvas image
function getDominantColor() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  const colorCounts = {};

  for (let i = 0; i < imageData.length; i += 4) {
    const r = imageData[i];
    const g = imageData[i + 1];
    const b = imageData[i + 2];
    const rgb = `${r},${g},${b}`;

    if (colorCounts[rgb]) {
      colorCounts[rgb] += 1;
    } else {
      colorCounts[rgb] = 1;
    }
  }

  const dominantColor = Object.keys(colorCounts).reduce((a, b) => {
    return colorCounts[a] > colorCounts[b] ? a : b;
  });

  return dominantColor;
}

// Update the background color based on the canvas's dominant color
function updateBackgroundColor() {
  const dominantColor = getDominantColor();
  document.getElementById('ambience').style.backgroundColor = `rgb(${dominantColor})`;
  requestAnimationFrame(updateBackgroundColor);
}

function checkBrowserSupport() {
  if (!('GamepadEvent' in window)) {
    // No gamepad support
    const gamepadText = document.createElement('p');
    gamepadText.id = 'gamepadText';
    gamepadText.textContent = 'Your browser does not support gamepads, For the best experience, please use a different browser. I recommend Google Chrome or Chromium based browsers.';
    document.body.appendChild(gamepadText);
    return false;
  }
  return true;
}

document.addEventListener('DOMContentLoaded', init);