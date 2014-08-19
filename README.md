# AngularJS Emoji Filter HD 

> An AngularJS filter for replacing [emoji codes](http://www.emoji-cheat-sheet.com) with actual high-definition emoticons (Retina friendly). (heavily inspired by)

## Installation

The filter is available in a default form on [Bower](http://bower.io) (you will need Bower 0.9 or greater). Each emoji is 22x22 pixels. You can install it the usual way:

    bower install angular-emoji-filter-HD
 
 To get the filter working with your Angular app just include the stylesheet and JavaScript, and inject the `com.dbaq.emoji` module into your app as shown in the example below.

## Usage

Use it just like any Angular filter. Here's some very simple example markup:

```html
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="emoji.min.css">
        <script src="angular.min.js"></script>
        <script src="emoji.min.js"></script>
    </head>
    <body ng-app="app" ng-controller="AppCtrl">
        <ul>
            <li ng-repeat="message in messages" ng-bind-html-unsafe="message | emoji"></li>
        </ul>
    </body>
</html>
```

And the associated example Angular app:

```js
angular.module("app", ["dbaq.emoji"]).controller("AppCtrl", function ($scope) {
    $scope.messages = [
        "Animals: :dog: :cat: :snake:",
        "People: :smile: :confused: :angry:",
        "Places: :house: :school: :hotel:"
    ];
});
```

## Licensing and Attribution
The AngularJS Emoji filter HD is released under the MIT license as detailed in the LICENSE file that should be distributed with this library; the source code is [freely available](http://github.com/globaldev/angular-emoji-filter).

The filter was adapted by Didier Baquier from the work of [James Allardice](http://jamesallardice.com). The resources come from [emoji codes website](http://www.emoji-cheat-sheet.com)