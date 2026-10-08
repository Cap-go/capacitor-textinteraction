import XCTest
import WebKit
@testable import TextInteractionPlugin

class TextInteractionTests: XCTestCase {
    func testIsEnabledReflectsState() {
        let implementation = TextInteraction()
        XCTAssertTrue(implementation.isEnabled(webView: nil))

        implementation.setConfiguredEnabled(false)
        XCTAssertFalse(implementation.isEnabled(webView: nil))
    }

    func testToggleEnablesTextInteraction() {
        let expectation = expectation(description: "Text interaction toggled")

        DispatchQueue.main.async {
            let implementation = TextInteraction()
            let webView = WKWebView()
            let success = implementation.toggle(true, webView: webView)

            XCTAssertTrue(success)
            XCTAssertTrue(webView.configuration.preferences.isTextInteractionEnabled)
            expectation.fulfill()
        }

        wait(for: [expectation], timeout: 1.0)
    }
}
