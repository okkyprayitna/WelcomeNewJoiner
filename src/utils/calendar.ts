export function getGoogleCalendarUrl(): string {
  const title = encodeURIComponent("Year-End Team Night | Rooftop Gala");
  const details = encodeURIComponent(
    "Join us for our Year-End Team Night! A celebration of our year, milestones, and camaraderie.\n\nDress Code: Midnight Navy & Gold Festive Cocktail\nVenue: Office Rooftop Terrace (Level 24)\nRSVP required."
  );
  const location = encodeURIComponent("Office Rooftop Terrace, Level 24");
  
  // Dec 12, 18:00 to 23:30 (UTC or local format: YYYYMMDDTHHmmss)
  // Let's create an ISO string in user's upcoming Dec 12
  const now = new Date();
  const year = now.getMonth() === 11 && now.getDate() > 12 ? now.getFullYear() + 1 : now.getFullYear();
  const start = `${year}1212T180000`;
  const end = `${year}1212T233000`;
  
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}

export function downloadIcsFile(): void {
  const now = new Date();
  const year = now.getMonth() === 11 && now.getDate() > 12 ? now.getFullYear() + 1 : now.getFullYear();
  const dtStart = `${year}1212T180000`;
  const dtEnd = `${year}1212T233000`;
  
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Year-End Team Night//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `SUMMARY:Year-End Team Night | Rooftop Gala`,
    `DESCRIPTION:Year-End celebration under the skyline lights. Navy & Gold dress code.`,
    `LOCATION:Office Rooftop Terrace, Level 24`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `STATUS:CONFIRMED`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'year-end-team-night.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
