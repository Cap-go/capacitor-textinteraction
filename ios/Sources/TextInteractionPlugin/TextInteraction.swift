import Foundation
import WebKit

@objc public class TextInteraction: NSObject {
    @objc public func toggle(_ enabled: Bool, webView: WKWebView?) -> Bool {
        guard #available(iOS 14.5, *) else {
            return false
        }

        guard let webView else {
            return false
        }

        // Ensure text interaction matches the requested state.
        webView.configuration.preferences.isTextInteractionEnabled = enabled
        return true
    }
}
