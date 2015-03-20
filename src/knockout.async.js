function asyncComputed(evaluator, owner, mappingFn) {
    var result = ko.observable(),
        currentDeferred;
    result.inProgress = ko.observable(false); // Track whether we're waiting for a result

    ko.computed(function() {
        // Abort any in-flight evaluation to ensure we only notify with the latest value
        if (currentDeferred) {
            currentDeferred.reject();
        }

        var evaluatorResult = evaluator.call(owner);
        // Cope with both asynchronous and synchronous values
        if (evaluatorResult && (typeof evaluatorResult.done === "function")) { // Async
            result.inProgress(true);
            currentDeferred = $.Deferred().done(function(data) {
                result.inProgress(false);
                if (mappingFn) {
                    result(mappingFn(data));
                } else {
                    result(data);
                }
            });
            evaluatorResult.done(currentDeferred.resolve);
        } else {
            result(evaluatorResult);
        }
    });

    return result;
}
