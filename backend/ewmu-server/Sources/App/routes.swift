import Vapor

func routes(_ app: Application) throws {
    app.get { req async in
        "It works!"
    }

    app.get("hello") { req async -> String in
        "Hello, world!"
    }
    
    app.post("upload") {req -> EventLoopFuture<String> in
        struct Input: Content {
            var file: File
            var name: String
        }
        let input = try req.content.decode(Input.self)
    
        
        let formatter = DateFormatter()
        formatter.dateFormat = "y-m-d-HH-MM-SS"
        let prefix = formatter.string(from: .init())
        let fileName = prefix + "_" + input.name + "_" + input.file.filename
        print(fileName)
        let path = app.directory.workingDirectory + fileName
        
        print(path)
        return req.application.fileio.openFile(path: path,
                                               mode: .write,
                                               flags: .allowFileCreation(posixMode: 0x744),
                                               eventLoop: req.eventLoop)
            .flatMap { handle in
                req.application.fileio.write(fileHandle: handle, buffer: input.file.data, eventLoop: req.eventLoop)
                    .flatMapThrowing { _ in
                        try handle.close()
                        let finalReturnString = (
                            "filepath: " + String(fileName))
                        return app.directory.workingDirectory + finalReturnString;
                    }
            }
    }
}
