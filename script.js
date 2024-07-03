document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'Evento 1',
                start: '2024-07-01',
                description: 'Descripción del Evento 1'
            },
            {
                title: 'Evento 2',
                start: '2024-07-07',
                end: '2024-07-10',
                description: 'Descripción del Evento 2'
            },
            {
                title: 'Evento 3',
                start: '2024-07-09T16:00:00',
                description: 'Descripción del Evento 3'
            }
        ],
        eventDidMount: function (info) {
            tippy(info.el, {
                content: info.event.extendedProps.description,
                placement: 'top',
                theme: 'light'
            });
        }
    });

    calendar.render();
});