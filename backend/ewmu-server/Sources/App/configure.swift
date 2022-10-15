import Vapor

// configures your application
public func configure(_ app: Application) throws {
    // config max upload file size
    app.routes.defaultMaxBodySize = "25mb"
    // uncomment to serve files from /Public folder
    app.middleware.use(FileMiddleware(publicDirectory: app.directory.workingDirectory))

    // register routes
    try routes(app)
}
