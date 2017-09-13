# AngularJS Emoji Filter HD
<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/nnq4YKjaFeDVYQrFbBYw4qNV/dbaq/angular-emoji-filter-hd'>  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/nnq4YKjaFeDVYQrFbBYw4qNV/dbaq/angular-emoji-filter-hd.svg' /></a>

An AngularJS filter for replacing [emoji codes](http://www.emoji-cheat-sheet.com) with actual **high-definition** emoticons (**Retina** friendly). (heavily inspired by [Angular-Emoji-Filter](https://github.com/globaldev/angular-emoji-filter))

Installation
--
This module is available via NPM or bower, install it with this command:

Via bower

```bash
bower install angular-emoji-filter-hd
```

Via NPM

```bash
npm install angular-emoji-filter-hd
```

Demo
--
See this [plunker](http://embed.plnkr.co/iw3XxsD2tHPdWysd1rUm/)

Usage
--
- Add dbaq.emoji as a dependency
- Add ngSanitize as a dependency (belongs to AngularJS)
- Apply the filter within ng-bind-html: ```<div ng-bind-html="message | emoji"></div>```
- Optionally add aliases in config blocks via ``` emojiConfigProvider.addAlias("smile", ":)"); ```

Example
--

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
        <li ng-bind-html="message | emoji"></li>
        <li ng-bind-html="messageWithAliases | emoji"></li>
      </ul>
    </body>
</html>
```

```js
angular.module("app", ["dbaq.emoji", "ngSanitize"])
  .config(function(emojiConfigProvider) {
    emojiConfigProvider.addAlias("smile", ":)");
    emojiConfigProvider.addAlias("heart", "<3");
    emojiConfigProvider.addAlias("ok_hand", "+1");
  })
  .controller("AppCtrl", function ($scope) {
      $scope.message = "Animals: :dog: :cat: :snake: People: :smile: :confused: :angry: Places: :house: :school: :hotel: :poop:";
      $scope.messageWithAliases = "Emoji with aliases: :) <3 +1";
  });});
```


License
--
The AngularJS Emoji filter HD is released under the MIT license as detailed in the LICENSE file that should be distributed with this library; the source code is [freely available](http://github.com/globaldev/angular-emoji-filter).

The filter was adapted by Didier Baquier from the work of [James Allardice](http://jamesallardice.com). The resources come from [emoji codes website](http://www.emoji-cheat-sheet.com)
