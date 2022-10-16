/* eslint-disable max-len */
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './styles/Winners.module.css';

function PodiumStep({ podium, winner }) {
  const offset = podium.length - winner.position;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        placeContent: 'center',
      }}
    >
      <motion.div
        style={{
          alignSelf: 'center',
          marginBottom: '.25rem',
          // width: width / 3,
        }}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 0.25,
            },
          },
          hidden: { opacity: 0 },
        }}
      >
        {/* Optional, if we get photos?
        <img
          src={`https://i.pravatar.cc/64?u=${winner.id}`}
          alt=""
          style={{
            width: '2.75rem',
            overflow: 'hidden',
            height: '2.75rem',
            borderRadius: 9999,
          }}
        />
        */}
        <span style={{
          color: 'white',
          alignSelf: 'flex-end',
          fontWeight: 'bold',
          fontSize: 30,
        }}
        >
          {winner.name}
        </span>

      </motion.div>

      <motion.div
        style={{
          // width: width / 3,
          placeContent: 'center',
          display: 'flex',
          borderTopLeftRadius: '.5rem',
          borderTopRightRadius: '.5rem',
          borderColor: 'rgba(255,24,93,1)',
          backgroundColor: '#e01634',
          marginBottom: -1,
          filter: `opacity(${0.1 + offset / podium.length})`,
        }}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            height: 300 * (offset / podium.length),
            opacity: 1,
            transition: {
              delay: 0.25,
              duration: 0.75,
              ease: 'backInOut',
            },
          },
          hidden: { opacity: 0, height: 0 },
        }}
      >
        <span style={{
          color: 'white',
          alignSelf: 'flex-end',
          fontWeight: 'bold',
          fontSize: 40,
          textAlign: 'center',
        }}
        >
          {/* hacky, but works */}
          {winner.position + 1}
          {['st', 'nd', 'rd'][winner.position]}
        </span>
      </motion.div>
    </div>
  );
}

function Podium({ winners }) {
  const podium = [6, 4, 2, 0, 1, 3, 5, 7]
    .reduce((podiumOrder, position) => [...podiumOrder, winners[position]], [])
    .filter(Boolean);

  // get width of screen
  // const [width, setWidth] = useState(0);
  // const ref = useRef(null);
  // useEffect(() => {
  //   setWidth(ref.current.offsetWidth);
  // }, []);

  return (
    <div
      // ref={ref}
      style={{
        display: 'grid',
        gridAutoFlow: 'column dense',
        gap: '.5rem',
        marginTop: '2rem',
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        height: 360,
      }}
    >
      {podium.map((winner) => (
        <PodiumStep podium={podium} winner={winner} />
      ))}
    </div>
  );
}

// To be filled in after the results:
const winners = [
  {
    id: '1tfjiELNrwYAJeafRYlT9RwOIiD', // id's for the photos
    name: 'Empath.ly',
  },
  {
    id: '1tfjiFoinFrbdLWlPI52dRLhNlD',
    name: 'We are Sus Drones',
  },
  {
    id: '1tfjiDIAS8f2UYgV9ynCqWi7rZD',
    name: 'SenseSight',
  },
].map((winner, position) => ({ ...winner, position }));

export default function Winners() {
  const mainRef = useRef(null);
  const [showWinners, setShowWinners] = useState(false);

  useEffect(() => {
    // check if component visbile on screen, if so, change usestate to true
    const handleScroll = () => {
      const isVisible = window.scrollY < mainRef.current.offsetTop;
      if (isVisible) {
        setShowWinners(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showWinners) {
    return <div ref={mainRef} />;
  }
  return (
    <main className={styles.main}>
      <div ref={mainRef} className={styles.container}>
        <div style={{ fontWeight: 'bold', fontSize: 40, textAlign: 'center' }}>
          OVERALL WINNERS
        </div>
        <div style={{ width: '100%' }}>
          <Podium winners={winners} />
        </div>
        <hr style={{ color: 'white' }} />
        <div>
          <div style={{ fontWeight: 'bold', fontSize: 40, textAlign: 'center' }}>
            TRACK SPECIFIC WINNERS
          </div>
          <div style={{ margin: 100 }}>
            <p>Best education hack: Clicentive </p>
            <p>Best entertainment hack: Mimetic</p>
            <p>Best lifehack hack: We Are Sus Drones</p>
            <p>Best Use of Pi SDK (Sponsored by Pi Network): We Are Sus Drones</p>
            <p>Best Use of Data (Sponsored by Hudson River Trading): NFT Laundromat</p>
            <p>Help make the Metaverse a reality! (Sponsored by Meta): Mimetic </p>
            <p>Best Educational Accessibility Hack (Sponsored by Tech Tree Root): Gorillamatics </p>
            <p>Best Use of MATLAB (Sponsored by MathWorks): Internal Combustion Engine Analyzer App  </p>
            <p>Best Use of MATLAB (Sponsored by MathWorks) (Runner up): Morpheus   </p>
            <p>Best use of Sonr Flutter SDK (Sponsored by Sonr)</p>
            <p>Best Contribution to the OSS Sonr Repository (Sponsored by Sonr)</p>
            <p>Best IOS Project (Sponsored by LocketCamera): Pompi </p>
            <p>Hack with AssemblyAI (Sponsored by AssemblyAI): Metaspeak</p>
            <p>Sustainability Prize (Sponsored by RaptorMaps): We Are Sus Drones</p>
            <p>Best Use of Echo3D (Sponsored by Echo3D): Pompi</p>
            <p>Best Use of GoogleCloud (Sponsored by GoogleCloud)</p>
            <p>Best First Time Hack: Tag</p>
            <p>Most Useless Hack: Hi, Name</p>
            <p>Most Funny Hack: Rizzer </p>
            <p>Most Creative Use of GitHub</p>
            <p>Best Domain Name from Domain.com: wearesus.tech</p>
            <p>Best Accessibility Hack sponsored by Fidelity</p>
            <p>Best Use of DeSo</p>
          </div>

        </div>
        <hr style={{ color: 'white' }} />

      </div>
    </main>
  );
}
