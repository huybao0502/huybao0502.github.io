
  $(document).ready(function() {

    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
    defaultView: 'agendaWeek',
    height: 650,
          eventClick: function(calEvent, jsEvent, view) {

    alert('Event: ' + calEvent.title);

    // change the border color just for fun
    $(this).css('border-color', 'red');

  },
      defaultDate: $('#calendar').fullCalendar('today'),
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Business Operations - 3012',
          start: '08:00:00',
          end: '11:45:00',
        dow: [5]
    
        },
        {
          title: 'Business Operations - 3001',
          start: '2018-10-09T08:00:00',
          end: '2018-10-09T11:45:00'
        },
        {
          title: 'Business Process Management',
          start: '2018-10-09T12:00:00',
          end: '2018-10-09T15:45:00'
        },
        {
          title: 'Innovation and project work - 3002',
          start: '08:00:00',
          end: '10:00:00', 
            dow: [1]
        },
        {
          title:  'Innovation and project C work 3002',
          start: '2018-10-11T10:00:00',
          end: '2018-10-11T11:45:00',
  
        },
        {
          title: 'CloudServer Technologies - 5003',
          start: '12:00:00',
          end: '16:00:00',
            dow: [2],
            backgroundColor: 'navy',
            textColor:'white'  
        },
        {
          title: 'Beginners Finnish 2 3002',
          start: '10:00:00',
          end: '11:45:00',
            dow: [2]
        },
        {
          title: 'Innovation and project work B',
          start: '2018-10-10T12:00:00',
          end: '2018-10-10T13:45:00'
        },
        {
          title: 'ICT and buisness English',
          start: '2018-10-10T14:00:00',
          end: '2018-10-10T16:45:00'
        },
        {
          title: 'User Experience',
          start: '08:00:00',
          end: '11:45:00',
            dow: [3],
          backgroundColor:'yellow'

        },
        {
          title: 'Programming A 3002',
          start: '2018-10-08T08:00:00',
          end: '2018-10-08T09:00:00',
        backgroundColor:'green',
            textColor:'white'

        },
        {
          title: 'Programming B 3001',
          start: '2018-10-08T09:00:00',
          end: '2018-10-08T10:45:00',
          backgroundColor:'green',
            textColor:'white'     
        

        },
        {
          title: 'Programming - 5002',
          start: '10:00:00',
          end: '11:45:00',
        backgroundColor:'green',
            dow: [4],
        textColor:'white'     

        },
        
        {
          title: 'User Experience',
          start: '2018-10-08T12:00:00',
          end: '2018-10-08T14:45:00',
        backgroundColor:'yellow'

        },
        {
          title: 'Beginners Finnish ',
          start: '2018-10-08T16:00:00',
          end: '2018-10-08T17:45:00',
    
          
        }
      ]
    });

  });