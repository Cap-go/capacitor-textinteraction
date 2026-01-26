import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(TextInteractionPlugin)
public class TextInteractionPlugin: CAPPlugin, CAPBridgedPlugin {
    private let pluginVersion: String = "8.0.5"
    public let identifier = "TextInteractionPlugin"
    public let jsName = "TextInteraction"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "toggle", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getPluginVersion", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = TextInteraction()

    @objc func toggle(_ call: CAPPluginCall) {
        let enabled = call.getBool("enabled") ?? false

        DispatchQueue.main.async {
            let success = self.implementation.toggle(enabled, webView: self.bridge?.webView)
            call.resolve([
                "success": success
            ])
        }
    }

    @objc func getPluginVersion(_ call: CAPPluginCall) {
        call.resolve(["version": self.pluginVersion])
    }

}
