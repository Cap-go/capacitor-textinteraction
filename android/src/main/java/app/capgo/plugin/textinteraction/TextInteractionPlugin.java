package app.capgo.plugin.textinteraction;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "TextInteraction")
public class TextInteractionPlugin extends Plugin {

    private final String pluginVersion = "8.1.0";

    private static final String LOCKED_ERROR = "TextInteraction state is locked by config (plugins.TextInteraction.locked)";

    private TextInteraction implementation = new TextInteraction();

    private boolean locked = false;

    @Override
    public void load() {
        boolean enabled = getConfig().getBoolean("enabled", true);
        locked = getConfig().getBoolean("locked", false);
        implementation.setEnabled(enabled);
    }

    @PluginMethod
    public void toggle(PluginCall call) {
        if (locked) {
            call.reject(LOCKED_ERROR);
            return;
        }

        boolean enabled = call.getBoolean("enabled", false);

        JSObject ret = new JSObject();
        ret.put("success", implementation.toggle(enabled));
        call.resolve(ret);
    }

    @PluginMethod
    public void isEnabled(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("enabled", implementation.isEnabled());
        call.resolve(ret);
    }

    @PluginMethod
    public void getPluginVersion(final PluginCall call) {
        try {
            final JSObject ret = new JSObject();
            ret.put("version", this.pluginVersion);
            call.resolve(ret);
        } catch (final Exception e) {
            call.reject("Could not get plugin version", e);
        }
    }
}
