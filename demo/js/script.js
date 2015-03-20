function ViewModel() {
    var self = this;    
    self.gender = ko.observable();
    self.dataList = ko.observableArray([]);
    // retrieve data from the server
    self.get = function(gender) {
        return $.get("http://api.randomuser.me/", {
            results: 20,
            gender: gender
        });
    };
    // modify the client side object through a mapping
    self.map = function(data) {
        // return the results object
        return data.results;
    };
    // async computed list
    self.filteredList = asyncComputed(function() {
        // if the current gender is not set
        if (!self.gender()) {
            // return the complete list
            return self.dataList();
        } else {
            // retrieve the data from the server
            return self.get(self.gender());
        }
    }, self, self.map);
}

$(function() {
    // create view model instance
    var viewModel = new ViewModel();
    ko.applyBindings(viewModel);
    // retrieve the owners from the API
    $.get("http://api.randomuser.me/", { results: 20 }).then(function(data) {
        // update the view model on page load
        viewModel.dataList(viewModel.map(data));
    });
});
