package app.capgo.plugin.textinteraction;

import com.getcapacitor.Logger;

public class TextInteraction {

    public boolean toggle(boolean enabled) {
        Logger.info("TextInteraction", "toggle called on Android with enabled=" + enabled + ". This platform is not supported.");
        return false;
    }
}
