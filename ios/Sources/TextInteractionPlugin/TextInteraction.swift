import Foundation

@objc public class TextInteraction: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
