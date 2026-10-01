import './capacitor-web-config.js';

import { CapacitorUpdater } from '@capgo/capacitor-updater';
import { Capacitor } from '@capacitor/core';
import { TextInteraction } from '@capgo/capacitor-textinteraction';

const enableButton = document.getElementById('enableButton');
const disableButton = document.getElementById('disableButton');
const toggleButton = document.getElementById('toggleButton');
const refreshStateButton = document.getElementById('refreshStateButton');
const statusLine = document.getElementById('statusLine');
const resultOutput = document.getElementById('resultOutput');
const configOutput = document.getElementById('configOutput');

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

const showConfigHint = () => {
  if (!configOutput) {
    return;
  }
  const pluginConfig = globalThis.CAPACITOR_CONFIG?.plugins?.TextInteraction ?? {};
  configOutput.textContent = JSON.stringify(
    {
      note: 'Native apps read plugins.TextInteraction from capacitor.config.ts. Web demo mirrors it via capacitor-web-config.js.',
      plugins: {
        TextInteraction: pluginConfig,
      },
    },
    null,
    2,
  );
};

const refreshEnabledState = async () => {
  try {
    setStatus('Reading isEnabled()...');
    const state = await TextInteraction.isEnabled();
    interactionEnabled = state.enabled;
    setStatus(`Interaction ${state.enabled ? 'enabled' : 'disabled'} (from isEnabled).`);
    setResult(state);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    setStatus(`isEnabled failed: ${message}`);
    setResult({ error: message });
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
  } finally {
    await refreshEnabledState();
  }
};

enableButton?.addEventListener('click', () => applyToggle(true));
disableButton?.addEventListener('click', () => applyToggle(false));
toggleButton?.addEventListener('click', () => applyToggle(!interactionEnabled));
refreshStateButton?.addEventListener('click', () => refreshEnabledState());

showConfigHint();
refreshEnabledState();

if (Capacitor.isNativePlatform()) {
  CapacitorUpdater.notifyAppReady().catch((error) => {
    console.error('Capgo notifyAppReady failed', error);
  });
}
