import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(TextInteractionPlugin)
public class TextInteractionPlugin: CAPPlugin, CAPBridgedPlugin {
    private let pluginVersion: String = "8.1.1"
    public let identifier = "TextInteractionPlugin"
    public let jsName = "TextInteraction"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "toggle", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "isEnabled", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getPluginVersion", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = TextInteraction()
    private var locked = false

    private static let lockedError = "TextInteraction state is locked by config (plugins.TextInteraction.locked)"

    @objc override public func load() {
        locked = getConfig().getBoolean("locked", false)
        let enabled = getConfig().getBoolean("enabled", true)
        implementation.setConfiguredEnabled(enabled)

        DispatchQueue.main.async {
            _ = self.implementation.applyConfiguredEnabled(webView: self.bridge?.webView)
        }
    }

    @objc func toggle(_ call: CAPPluginCall) {
        if locked {
            call.reject(TextInteractionPlugin.lockedError)
            return
        }

        let enabled = call.getBool("enabled") ?? false

        DispatchQueue.main.async {
            let success = self.implementation.toggle(enabled, webView: self.bridge?.webView)
            call.resolve([
                "success": success
            ])
        }
    }

    @objc func isEnabled(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            call.resolve([
                "enabled": self.implementation.isEnabled(webView: self.bridge?.webView)
            ])
        }
    }

    @objc func getPluginVersion(_ call: CAPPluginCall) {
        call.resolve(["version": self.pluginVersion])
    }

}
