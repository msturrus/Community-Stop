var tracker = new Tracker()

tracker.initialize("LT6rP7aPqBhSnqK3DKbHMQ2GH")

tracker.time( function( time ) {
  alert( time );
});

tracker.vehicles( { 'routes': '55' },
  function( vehicles ) {
    if ( vehicles.error == true ) {
      alert( vehicles.message );
    } else {
      $.each( vehicles, function( index, vehicle ) {
        alert( vehicle.number );
      });
    }
  }
);
