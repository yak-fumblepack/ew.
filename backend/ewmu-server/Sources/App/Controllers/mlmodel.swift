import CoreML

public func determineSkinCondition() {
    do {
        let config = MLModelConfiguration()
        let model = try SkinConditionClassifier(configuration: config)
        
    } catch {
        
    }
}
