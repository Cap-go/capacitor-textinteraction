package app.capgo.plugin.textinteraction;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "TextInteraction")
public class TextInteractionPlugin extends Plugin {

    private TextInteraction implementation = new TextInteraction();

    @PluginMethod
    public void toggle(PluginCall call) {
        boolean enabled = call.getBoolean("enabled", false);

        JSObject ret = new JSObject();
        ret.put("success", implementation.toggle(enabled));
        call.resolve(ret);
    }
}
