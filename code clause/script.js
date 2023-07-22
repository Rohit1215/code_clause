const editor = document.getElementById('editor');
const fontSizeInput = document.getElementById('font-size');
const textColorInput = document.getElementById('text-color');
const backgroundColorInput = document.getElementById('background-color');

function updateEditorStyle() {
  editor.style.fontSize = `${fontSizeInput.value}px`;
  editor.style.color = textColorInput.value;
  editor.style.backgroundColor = backgroundColorInput.value;
}

fontSizeInput.addEventListener('change', updateEditorStyle);
textColorInput.addEventListener('change', updateEditorStyle);
backgroundColorInput.addEventListener('change', updateEditorStyle);

function toggleBold() {
  editor.style.fontWeight = editor.style.fontWeight === 'bold' ? 'normal' : 'bold';
}

function toggleItalic() {
  editor.style.fontStyle = editor.style.fontStyle === 'italic' ? 'normal' : 'italic';
}
