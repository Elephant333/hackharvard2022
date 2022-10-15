import React from 'react';
import PropTypes from 'prop-types';
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
        }}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            opacity: 1,
            transition: {
              delay: 1 + (offset + 2),
              duration: 0.75,
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
          width: '20rem',
          placeContent: 'center',
          display: 'flex',
          borderTopLeftRadius: '.5rem',
          borderTopRightRadius: '.5rem',
          borderColor: 'rgba(255,24,93,1)',
          backgroundColor: 'rgba(165,28,48,1)',
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
              delay: 1 + offset,
              duration: 2,
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

export function Podium({ winners }) {
  const podium = [6, 4, 2, 0, 1, 3, 5, 7]
    .reduce((podiumOrder, position) => [...podiumOrder, winners[position]], [])
    .filter(Boolean);

  return (
    <div
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
        <PodiumStep key={winner.id} podium={podium} winner={winner} />
      ))}
    </div>
  );
}

// To be filled in after the results:
const winners = [
  {
    id: '1tfjiELNrwYAJeafRYlT9RwOIiD', // id's for the photos
    name: 'Team Name #1',
  },
  {
    id: '1tfjiFoinFrbdLWlPI52dRLhNlD',
    name: 'Team Name #2',
  },
  {
    id: '1tfjiDIAS8f2UYgV9ynCqWi7rZD',
    name: 'Team Name #3',
  },
].map((winner, position) => ({ ...winner, position }));

export default function Winners() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div style={{ fontWeight: 'bold', fontSize: 40, textAlign: 'center' }}>
          WINNERS
        </div>
        <Podium winners={winners} />

        <hr style={{ color: 'white' }} />
      </div>
    </main>
  );
}
