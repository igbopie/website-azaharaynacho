var messageCounter = 1;

MessageProvider = function(){};
MessageProvider.prototype.dummyData = [];

MessageProvider.prototype.findAll = function(callback) {
  callback( null, this.dummyData )
};

MessageProvider.prototype.findById = function(id, callback) {
  var result = null;
  for(var i =0;i<this.dummyData.length;i++) {
    if( this.dummyData[i]._id == id ) {
      result = this.dummyData[i];
      break;
    }
  }
  callback(null, result);
};

MessageProvider.prototype.save = function(messages, callback) {
  var message = null;

  if( typeof(messages.length)=="undefined")
    messages = [messages];

  for( var i =0;i< messages.length;i++ ) {
    message = messages[i];
    message._id = messageCounter++;
    message.created_at = new Date();

    this.dummyData[this.dummyData.length]= message;
  }
  callback(null, messages);
};

/* Lets bootstrap with dummy data */
new MessageProvider().save([
  {text: 'Hola Azahara', from: 'Nacho'},
  {text: 'Hola Nacho', from: 'Azahara'},
  {text: 'Ohh!! funciona!', from: 'Nacho'}
], function(error, messages){});

exports.MessageProvider = MessageProvider;