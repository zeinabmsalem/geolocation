/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
	
	
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		//alert("On Device Ready");
        //app.receivedEvent('deviceready');
		app.getcurrentlatlong();
		//alert("end Device Ready");
    },
    // Update DOM on a Received Event
	
	
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
		
        console.log('Received Event: ' + id);
    },
	
	getcurrentlatlong: function(){
		//alert("geolocation");
          //alert("onSuccess called");
          var lat=position.coords.latitude;
          var longi=position.coords.longitude;
		  var myLatLng = new google.maps.LatLng(lat, longi);
		  //var myLatLng={lat: 30.1, lng: 31.4};
          //alert("latitude is: "+ lat+ " longitude is: "+ longi);
		  map = new google.maps.Map(document.getElementById('map'), {center: myLatLng, zoom: 14});
     
		if (navigator.geolocation){              
        	//alert("navigator.geolocation is supported");
            navigator.geolocation.watchPosition(app.onSuccess, app.onError, { enableHighAccuracy:true });
        }
		else{
            alert("navigator.geolocation not supported");
        }
     },

     onSuccess: function (position) {   // enable ur gps, it takes sometime to call till now wait   
          //alert("onSuccess called");
          var lat=position.coords.latitude;
          var longi=position.coords.longitude;
		  var myLatLng = new google.maps.LatLng(lat, longi);
		  //var myLatLng={lat: 30.1, lng: 31.4};
          //alert("latitude is: "+ lat+ " longitude is: "+ longi);
		  //map = new google.maps.Map(document.getElementById('map'), {center: myLatLng, zoom: 14});
     
     /*i can write it like that to add marker to map*/
			marker1=new google.maps.Marker({position:myLatLng, map:map, draggable: true, animation: google.maps.Animation.DROP});
         
      },
             
      onError: function(error){
                alert("Getting the error"+error.code + "\nerror mesg :" +error.message);
      },
          
 
    initMap: function() {
		
        myLatLng={lat: 30.1, lng: 31.4};
        mylang2={lat: 30.5, lng: 31.8};
        
     map = new google.maps.Map(document.getElementById('map'), 
     {center: myLatLng, zoom: 8});
     
     /*i can write it like that to add marker to map*/
     marker1=new google.maps.Marker({position:myLatLng, map:map, draggable: true, animation: google.maps.Animation.DROP});
     marker2=new google.maps.Marker({position:mylang2, map:map, draggable: true, title:'hello cairo'});
   
    },
};
