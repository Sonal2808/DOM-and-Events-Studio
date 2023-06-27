window.addEventListener('load', function(){
  let btnTakeOff= this.document.getElementById('takeoff'); 
  btnTakeOff.addEventListener('click', function(){
      let isReadyForTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
      if(isReadyForTakeOff)
      {
          let flightStatus= document.getElementById('flightStatus')
          flightStatus.innerHTML= 'Shuttle in flight.';
          let shuttleBackground = document.getElementById('shuttleBackground');
          shuttleBackground.setAttribute('style','background-color:blue');
          let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
          spaceShuttleHeight.innerHTML='10000';
      }
  });
  
  let landing= this.document.getElementById('landing');
  landing.addEventListener('click', function(){
          window.alert('The shuttle is landing. Landing gear engaged.');
          let flightStatus= document.getElementById('flightStatus')
          flightStatus.innerHTML= 'The shuttle has landed.';
          let shuttleBackground = document.getElementById('shuttleBackground');
          shuttleBackground.setAttribute('style','background-color:green');
          let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
          spaceShuttleHeight.innerHTML='0';
      
  });
  
  