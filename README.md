# knockout.async.js

###Description

A simple JavaScript function that allows for asynchronous computed observables in KnockoutJS.

The work is inspired by the following github wiki and I cannot take credit for it; however it took a lot of research until I came across this wiki and hopefully I can spare someone the same pain
 - https://github.com/knockout/knockout/wiki/Asynchronous-Dependent-Observables

When working with KnockoutJS computed observables, you might have noticed that computed observables are required to return a value synchronously.

The below example works perfectly:
```
var self = this;
self.firstName = ko.observable();
self.lastName = ko.observable();
self.myComputed = ko.computed(function(){
	return self.firstName + ' ' + self.lastName;
});
```

However if we include an AJAX request in the middle, you will realize that it stops working and returns undefined:
```
var self = this;
self.filter = ko.observable();
self.myComputed = ko.computed(function(){
	$.get('/people/', { filter: self.filter() }).done(function(response){
		return response;
	});	
});
```

The reason is that the computed variable executes synchronously and expects the function to return a value. As this is not returned immediately, *myComputed* is set to undefined.

The solution proposed by Steve Sanderson works by creating a wrapper function that captures the output and transfers it into an observable. This way, you simply need to bind to the observable, rather than the computed.

The original code was also modified slightly to allow us to pass a mapping function that is called on the data once it is returned from the server.

Any comments, corrections and suggestions are welcome.

### Demo

http://www.incredible-web.com/demo/knockout.async/

### Usage

```
self.myComputed = asyncComputed(function() {		
		$.get('/people/', { filter: self.filter() }).done(function(response){
			return response;
		});
	}, self);
```

### Reporting issues and contributing
Please feel free to contribute or report any issues.

### Additional material

- https://github.com/knockout/knockout/wiki/Asynchronous-Dependent-Observables
- https://smellegantcode.wordpress.com/2012/12/10/asynchronous-computed-observables-in-knockout-js/

### License

Licensed MIT
Copyright (c) 2015 [Incredible Web](http://www.incredible-web.com)