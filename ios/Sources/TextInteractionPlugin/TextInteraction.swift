import Foundation
import WebKit

@objc public class TextInteraction: NSObject {
    private var enabled: Bool = true

    @objc public func isEnabled(webView: WKWebView?) -> Bool {
        if let webView {
            return webView.configuration.preferences.isTextInteractionEnabled
        }
        return enabled
    }

    @objc public func setEnabled(_ enabled: Bool, webView: WKWebView?) -> Bool {
        self.enabled = enabled

        guard let webView else {
            return false
        }

        webView.configuration.preferences.isTextInteractionEnabled = enabled
        return true
    }

    @objc public func toggle(_ enabled: Bool, webView: WKWebView?) -> Bool {
        return setEnabled(enabled, webView: webView)
    }
}
