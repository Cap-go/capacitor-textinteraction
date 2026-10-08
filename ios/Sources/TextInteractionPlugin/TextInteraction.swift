import Foundation
import WebKit

@objc public class TextInteraction: NSObject {
    private var configuredEnabled: Bool = true

    @objc public func setConfiguredEnabled(_ enabled: Bool) {
        configuredEnabled = enabled
    }

    @objc public func applyConfiguredEnabled(webView: WKWebView?) -> Bool {
        guard let webView else {
            return false
        }

        return setEnabled(configuredEnabled, webView: webView)
    }

    @objc public func isEnabled(webView: WKWebView?) -> Bool {
        if let webView {
            return webView.configuration.preferences.isTextInteractionEnabled
        }
        return configuredEnabled
    }

    @objc public func setEnabled(_ enabled: Bool, webView: WKWebView?) -> Bool {
        guard let webView else {
            return false
        }

        configuredEnabled = enabled
        webView.configuration.preferences.isTextInteractionEnabled = enabled
        return true
    }

    @objc public func toggle(_ enabled: Bool, webView: WKWebView?) -> Bool {
        return setEnabled(enabled, webView: webView)
    }
}
