import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})




export class HomePage {
 
  




  calendar = { // calendar defines the type of calendar to show on our sreen and we chose month type  and read the current date 
    mode: 'month', // we select the mode
    currentDate: new Date(), // read the current date and time 
  };




  selectedDate = new Date(); // we read the date selected on our calender 


  eventSource = []; // we creat an empty array that will contain the collection of events 

  //we aim to store our data in our database  by taking snap shot of the data our events that comes from addNewEvent() 
  constructor(private db: AngularFirestore,) { // access to the DataBase
    
    
    //
    this.db.collection(`events`).snapshotChanges().subscribe(colSnap => {
      this.eventSource = [];
      colSnap.forEach(snap => {
        let event:any = snap.payload.doc.data(); 
        event.id = snap.payload.doc;
        event.startTime = event.startTime.toDate();
        event.endTime = event.endTime.toDate();
        console.log(event);   // print on our console the entire data of the event 
        this.eventSource.push(event); // synchronise the eventsource with events stored in firebase
      });
    });
  }




// addNewEvent aims to add a new event on the selected date
  addNewEvent() {
    // set a time frame 
    let start = this.selectedDate;
    let end = this.selectedDate;
    end.setMinutes(end.getMinutes() + 60);

    let event = {
      title: 'Event #' + start.getMinutes(),
      startTime: start,
      endTime: end,
      allDay: false,
    };

    this.db.collection(`events`).add(event); // add the event to the collection "events" of the database 
  }






  //onViewTitleChanged :  we print on our console the month that we are actually on
  onViewTitleChanged(title) {
    console.log(title);
  }


  //onEventSelected : in case we select an event on the calendar we print in our console the  acctual event
  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }


// onTimeSelected : in case we select a  date on the calendar we print in our console the  time 
  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.selectedDate = ev.selectedTime;
  }


  //onCurrentDateChanged : in case we select a  date on the calendar we print in our console the  date
  onCurrentDateChanged(event: Date) {
    console.log('current date change: ' + event);
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

}