import { useState, useCallback, useEffect } from 'react';
import {
  frequencies,
  transmissions,
  replyResponses,
  investigationEvents,
  randomEvents,
  gameOverMessages
} from './gameData';

const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

export const useGameState = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState('');
  const [currentFrequency, setCurrentFrequency] = useState(null);
  const [lastTransmission, setLastTransmission] = useState(null);
  const [messageLog, setMessageLog] = useState([]);
  const [turnCount, setTurnCount] = useState(0);
  const [sanity, setSanity] = useState(100);
  const [investigatedLocations, setInvestigatedLocations] = useState([]);
  const [showingUnreliableNarration, setShowingUnreliableNarration] = useState(false);

  // Random event trigger
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const eventChance = Math.random();
    if (eventChance < 0.15 && turnCount > 2) { // 15% chance after 2 turns
      const event = getRandomItem(randomEvents);
      addMessage(event.text, 'event');
      reduceSanity(5);
    }
  }, [turnCount, gameStarted, gameOver]);

  // Unreliable narration effect
  useEffect(() => {
    if (sanity < 30 && Math.random() < 0.3) {
      setShowingUnreliableNarration(true);
      setTimeout(() => setShowingUnreliableNarration(false), 3000);
    }
  }, [sanity, turnCount]);

  const addMessage = useCallback((text, type = 'normal') => {
    const timestamp = new Date().toLocaleTimeString();
    setMessageLog(prev => [...prev, { text, type, timestamp, id: Date.now() + Math.random() }]);
  }, []);

  const reduceSanity = useCallback((amount) => {
    setSanity(prev => {
      const newSanity = Math.max(0, prev - amount);
      if (newSanity === 0) {
        triggerGameOver();
      }
      return newSanity;
    });
  }, []);

  const triggerGameOver = useCallback(() => {
    setGameOver(true);
    setGameOverMessage(getRandomItem(gameOverMessages));
  }, []);

  const startGame = useCallback(() => {
    setGameStarted(true);
    addMessage('You sit down at the radio equipment. The storm howls outside.', 'intro');
    addMessage('Your shift has just begun...', 'intro');
  }, [addMessage]);

  const scanFrequency = useCallback(() => {
    if (gameOver) return;

    const freq = getRandomItem(frequencies);
    const transmission = getRandomItem(transmissions[freq.type]);

    setCurrentFrequency(freq);
    setLastTransmission({ type: freq.type, text: transmission });
    setTurnCount(prev => prev + 1);

    addMessage(`You tune to ${freq.number} FM...`, 'action');

    // Add atmospheric delay before showing transmission
    setTimeout(() => {
      addMessage(transmission, 'transmission');

      // Sanity effects based on transmission type
      if (['your_voice', 'children', 'distress'].includes(freq.type)) {
        reduceSanity(15);
      } else if (['whisper', 'emergency'].includes(freq.type)) {
        reduceSanity(10);
      } else {
        reduceSanity(5);
      }

      // Chance of game over on disturbing transmissions
      if (sanity < 20 && Math.random() < 0.2) {
        triggerGameOver();
      }
    }, 500);
  }, [gameOver, addMessage, reduceSanity, sanity, triggerGameOver]);

  const replyToTransmission = useCallback(() => {
    if (gameOver || !lastTransmission) return;

    addMessage('You press the transmit button and speak into the void...', 'action');
    setTurnCount(prev => prev + 1);

    setTimeout(() => {
      const response = getRandomItem(replyResponses[lastTransmission.type]);
      addMessage(response, 'reply');

      // Replying is risky
      reduceSanity(20);

      // Higher chance of game over when replying
      if (sanity < 40 && Math.random() < 0.3) {
        triggerGameOver();
      }
    }, 800);
  }, [gameOver, lastTransmission, addMessage, reduceSanity, sanity, triggerGameOver]);

  const investigate = useCallback(() => {
    if (gameOver) return;

    const location = getRandomItem(investigationEvents);
    const description = getRandomItem(location.descriptions);

    setInvestigatedLocations(prev => [...prev, location.location]);
    setTurnCount(prev => prev + 1);

    addMessage(`You investigate: ${location.location}`, 'action');

    setTimeout(() => {
      addMessage(description, 'investigation');
      reduceSanity(12);

      // Special game over conditions
      if (location.location === 'Basement' && investigatedLocations.filter(l => l === 'Basement').length > 2) {
        addMessage('The basement door opens. You feel an overwhelming urge to descend...', 'event');
        setTimeout(() => triggerGameOver(), 2000);
      }
    }, 600);
  }, [gameOver, addMessage, reduceSanity, investigatedLocations, triggerGameOver]);

  const restartGame = useCallback(() => {
    setGameStarted(false);
    setGameOver(false);
    setGameOverMessage('');
    setCurrentFrequency(null);
    setLastTransmission(null);
    setMessageLog([]);
    setTurnCount(0);
    setSanity(100);
    setInvestigatedLocations([]);
    setShowingUnreliableNarration(false);
  }, []);

  return {
    gameStarted,
    gameOver,
    gameOverMessage,
    currentFrequency,
    lastTransmission,
    messageLog,
    turnCount,
    sanity,
    showingUnreliableNarration,
    startGame,
    scanFrequency,
    replyToTransmission,
    investigate,
    restartGame,
  };
};
