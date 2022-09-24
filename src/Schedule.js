import React from 'react';
import styles from './styles/Schedule.module.css';

function Schedule() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titleText}>SCHEDULE</h1>
      <div className={styles.scheduleBox}>
        <iframe title="schedule" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRr5cGtwjRRCfqdSvUlzTrcDMpUphd7jeJz1tatUvDILcpTMlqXatvPau2LE8fwv9iZEHhMz3rmZWMw/pubhtml?gid=1813581895&amp;single=true&amp;widget=true&amp;headers=false" height="500" width="500" />
        {/* <div>
          Friday
          <div className={styles.scheduleText}>
            <p>Registration: 4:00 PM - 7:00 PM | Lobby</p>
            <p>Dinner: 5:00 PM - 7:00 PM | Lobby </p>
            <p>
              Opening Ceremony: 7:00 PM - 8:00 PM | Science Center C + Live Stream in First Floor, Hacker Room Left #104
            </p>
            <p>Late Dinner: 8:00 PM - 10:00 PM | Lobby</p>
            <p>Pi Tech Talk: 9:00 PM - 10:00 PM | Basement Cinema</p>
            <p>Pitch Pit: Find Your Team: 10:00 PM - 10:50 PM | PH Performance Hall</p>
          </div>
        </div>
        <div>
          Saturday
          <div className={styles.scheduleText}>
            <p>Breakfast: 7:00 AM - 10:00 AM | Lobby</p>
            <p>Sponsors Recruiter Fair: 10:00 AM - 12:00 PM | First Floor Lobby</p>
            <p>Icebreaker: 8:00 PM - 9:00 PM</p>
            <p>Free Time: 9:00 PM - 10:00 PM</p>
          </div>
        </div>
        <div>
          Sunday
          <div className={styles.scheduleText}>
            <p>Registration: 6:00 PM - 7:00 PM</p>
            <p>Opening Ceremony: 7:00 PM - 8:00 PM</p>
            <p>Icebreaker: 8:00 PM - 9:00 PM</p>
            <p>Free Time: 9:00 PM - 10:00 PM</p>
          </div>
        </div> */}
      </div>
    </main>
  );
}

export default Schedule;
