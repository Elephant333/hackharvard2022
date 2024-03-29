import React from 'react';
import styles from './styles/Faq.module.css';
import teamPic from './assets/images/teamPic.png';
import statue from './assets/images/johnHarvard.png';

function Faq() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        {/* eslint-disable max-len */}
        <div className={styles.gridDivs} />
        <div className={styles.gridDivs} id={styles.Faqs}>
          <h1 className={styles.title}>FAQS</h1>
          <p className={styles.question}>What if my question is not here?</p>
          <p className={styles.answer}>Please email us at team@hackharvard.io and we’ll get back to you ASAP!</p>
        </div>
        <div className={styles.gridDivs} id={styles.Num}>
          <p>1</p>
        </div>
        <div className={styles.gridDivs} id={styles.Header}>
          <p>TEAMS</p>
        </div>
        <div className={styles.gridDivs} />
        <div className={styles.gridDivs} id={styles.TeamsInfo}>
          <p className={styles.teamsText}>
            <p className={styles.question}>What if I don’t have a team?</p>
            <p className={styles.answer}>If you registered as an individual and do not have a team yet, don’t sweat it. There will be several events and communications channels geared towards facilitating team formation and project ideation. We will help you find people to work with!</p>
            <p className={styles.question}>How do teams work?</p>
            <p className={styles.answer}>Each team consists of a maximum of four members. You can create a team and designate teammates during registration, or you can register as an individual. All teammates must submit individual applications. Admission decisions will be all-or-none, so either all of your teammates will receive admission or none of your teammates will receive admission.</p>
            <img src={teamPic} alt="Team" className={styles.teamPic} id={styles.small} />
          </p>
          <img src={teamPic} alt="Team" className={styles.teamPic} id={styles.large} />
        </div>
        <div className={styles.gridDivs} id={styles.Num}>
          <p>2</p>
        </div>
        <div className={styles.gridDivs} id={styles.Header}>
          <p>GENERAL</p>
        </div>
        <div className={styles.gridDivs} />
        <div className={styles.gridDivs} id={styles.GeneralInfo}>
          <p className={styles.generalText}>
            <p className={styles.question}>What if I’ve never hacked before?</p>
            <p className={styles.answer}>That’s ok! In fact, you’ve found the perfect place and time to pick up new skills and concepts. There will be mentors, workshops, and tech talks to help ease you through the hackathon experience. Applications are not filtered based on experience. First time hackers are also eligible for the first-time hacker prize!</p>
            <p className={styles.question}>When is registration?</p>
            <p className={styles.answer}>Early applications will be due September 4th. Round 2 applications will be due September 28th.</p>
            <p className={styles.question}>Can I attend?</p>
            <p className={styles.answer}>As long as you are a student at any accredited college or university in the world and are 18 or older, you are invited to apply to HackHarvard!</p>
            <p className={styles.question}>Does it cost anything?</p>
            <p className={styles.answer}>Admission to HackHarvard is 100% free for all participants!</p>
            <p className={styles.question}>Can I volunteer at HackHarvard?</p>
            <p className={styles.answer}>
              Yes! If you are interested in being a mentor or a judge, please fill out this&nbsp;
              <a href="https://forms.gle/wW7DcbcXEPJ66NZ77" id={styles.form}>form</a>
              . If you have something else in mind, please reach out to team@hackharvard.io!
            </p>
            <p className={styles.question}>I am interested in sponsoring HackHarvard!</p>
            <p className={styles.answer}>Please email us at sponsors@hackharvard.io and we’ll get back to you ASAP!</p>
          </p>
        </div>
        <div className={styles.gridDivs} id={styles.Num}>
          <p>3</p>
        </div>
        <div className={styles.gridDivs} id={styles.Header}>
          <p>LOGISTICS</p>
        </div>
        <div className={styles.gridDivs} />
        <div className={styles.gridDivs} id={styles.LogisticsInfo}>
          <p className={styles.logisticsText}>
            <p className={styles.question}>Will HackHarvard be in-person this year?</p>
            <p className={styles.answer}>Yes! Although exact details may change depending on Harvard’s COVID-19 guidelines, the plan is to host a fully in-person hackathon at Harvard this year!</p>
            <p className={styles.question}>How does an in-person hackathon work?</p>
            <p className={styles.answer}>Located at Harvard’s Student Organization Center at Hilles (SOCH), HackHarvard will provide food for all meals from Friday’s dinner to Sunda’s breakfast. We will try our best to accommodate all dietary restrictions. Hackers will also be provided spaces to sleep in the SOCH.</p>
            <p className={styles.question}>How do I get to HackHarvard?</p>
            <p className={styles.answer}>If you’re traveling from outside of Massachusetts, we’ll reimburse up to $30 for your travel as long as you upload your travel receipts upon confirming your attendance and submit a project before judging at the event. Exact reimbursement amounts will be updated closer to the hackathon start date.</p>
            <img src={statue} alt="Statue" className={styles.statue} id={styles.small} />
          </p>
          <img src={statue} alt="Statue" className={styles.statue} id={styles.large} />
        </div>
        <div className={styles.gridDivs} />
        <div className={styles.gridDivs} id={styles.footer} />
        {/* eslint-enable max-len */}
      </div>
    </main>
  );
}

export default Faq;
