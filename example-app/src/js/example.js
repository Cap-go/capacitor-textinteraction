import { TextInteraction } from '@capgo/capacitor-textinteraction';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    TextInteraction.echo({ value: inputValue })
}
