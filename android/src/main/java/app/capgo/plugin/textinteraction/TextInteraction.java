package app.capgo.plugin.textinteraction;

import com.getcapacitor.Logger;

public class TextInteraction {

    private boolean enabled = true;

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public boolean toggle(boolean enabled) {
        this.enabled = enabled;
        Logger.info("TextInteraction", "toggle called on Android with enabled=" + enabled + ". This platform is not supported.");
        return false;
    }
}
