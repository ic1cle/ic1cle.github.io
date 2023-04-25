const upcomingEventDiv = document.getElementById('upcoming-event');
const eventDate = new Date('2023-05-15'); // Replace with the actual date of the event

if (Date.now() < eventDate.getTime()) {
  upcomingEventDiv.innerHTML = `
    <div class="event-box">
      <h2>Neste trening:</h2>
      <p>Join us for our next event on May 15th!</p>
      <a href="schedule.html" class="btn">View Schedule</a>
    </div>
  `;
}
