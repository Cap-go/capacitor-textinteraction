package app.capgo.plugin.textinteraction;

import com.getcapacitor.Logger;

public class TextInteraction {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
