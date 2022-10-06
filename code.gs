function myFunction() {
   var threads = GmailApp.search("newer_than:1h");
   for (var i = 0; i < threads.length; i++) {
      var messages = threads[i].getMessages();
      for (var j = 0; j < messages.length; j++) {
        var message = messages[j];
        var body = message.getRawContent();
        if (body.indexOf("...") > -1) {
          var label = GmailApp.getUserLabelByName("...");
          threads[i].addLabel(label);
        }
      }
   }
}
