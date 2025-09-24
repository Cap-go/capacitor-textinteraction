// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapgoCapacitorTextinteraction",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapgoCapacitorTextinteraction",
            targets: ["TextInteractionPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "TextInteractionPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/TextInteractionPlugin"),
        .testTarget(
            name: "TextInteractionPluginTests",
            dependencies: ["TextInteractionPlugin"],
            path: "ios/Tests/TextInteractionPluginTests")
    ]
)
