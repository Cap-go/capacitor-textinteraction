import { TextInteraction } from '@capgo/capacitor-textinteraction';

const enableButton = document.getElementById('enableButton');
const disableButton = document.getElementById('disableButton');
const toggleButton = document.getElementById('toggleButton');
const statusLine = document.getElementById('statusLine');
const resultOutput = document.getElementById('resultOutput');

let interactionEnabled = true;

const setStatus = (message) => {
  if (statusLine) {
    statusLine.textContent = `Status: ${message}`;
  }
};

const setResult = (data) => {
  if (resultOutput) {
    resultOutput.textContent = JSON.stringify(data, null, 2);
  }
};

const applyToggle = async (enabled) => {
  try {
    setStatus(`Toggling interaction (${enabled ? 'enable' : 'disable'})...`);
    const result = await TextInteraction.toggle({ enabled });
    interactionEnabled = enabled;
    setStatus(`Interaction ${enabled ? 'enabled' : 'disabled'}. Success: ${result.success}`);
    setResult(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    setStatus(`Toggle failed: ${message}`);
    setResult({ error: message });
  }
};

enableButton?.addEventListener('click', () => applyToggle(true));
disableButton?.addEventListener('click', () => applyToggle(false));
toggleButton?.addEventListener('click', () => applyToggle(!interactionEnabled));
