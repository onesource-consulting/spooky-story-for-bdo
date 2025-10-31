import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameState } from './useGameState';
import { gameIntro } from './gameData';

function App() {
  const {
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
  } = useGameState();

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageLog]);

  const getSanityColor = () => {
    if (sanity > 70) return 'text-radio-green';
    if (sanity > 40) return 'text-radio-amber';
    return 'text-radio-red';
  };

  const getSanityText = () => {
    if (sanity > 80) return 'STABLE';
    if (sanity > 60) return 'UNEASY';
    if (sanity > 40) return 'DISTURBED';
    if (sanity > 20) return 'BREAKING';
    return 'CRITICAL';
  };

  const getMessageTypeClass = (type) => {
    switch (type) {
      case 'transmission':
        return 'text-radio-amber animate-pulse';
      case 'reply':
        return 'text-radio-red';
      case 'investigation':
        return 'text-blue-400';
      case 'event':
        return 'text-purple-400 font-bold';
      case 'action':
        return 'text-gray-500 italic';
      case 'intro':
        return 'text-radio-green';
      default:
        return 'text-radio-green';
    }
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 scanline crt-effect">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-2xl w-full"
        >
          <pre className="text-radio-green text-sm md:text-base mb-8 whitespace-pre-wrap text-shadow-glow">
            {gameIntro}
          </pre>
          <motion.button
            whileHover={{ scale: 1.05, textShadow: '0 0 20px currentColor' }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="w-full bg-black border-2 border-radio-green text-radio-green py-4 px-8 text-xl font-bold hover:bg-radio-green hover:bg-opacity-10 transition-all text-shadow-glow"
          >
            [BEGIN SHIFT]
          </motion.button>
        </motion.div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 crt-effect">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-2xl w-full text-center"
        >
          <motion.h1
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl md:text-6xl text-radio-red mb-8 text-shadow-glow"
          >
            SIGNAL LOST
          </motion.h1>
          <p className="text-radio-green text-xl mb-4 text-shadow-glow">{gameOverMessage}</p>
          <p className="text-gray-500 mb-8">You lasted {turnCount} turns</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={restartGame}
            className="bg-black border-2 border-radio-green text-radio-green py-3 px-8 text-lg hover:bg-radio-green hover:bg-opacity-10 transition-all"
          >
            [TRY AGAIN]
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-radio-green p-4 scanline crt-effect">
      {/* Unreliable Narration Overlay */}
      <AnimatePresence>
        {showingUnreliableNarration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
          >
            <motion.p
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1.2, 1.2, 0.8],
              }}
              transition={{ duration: 3 }}
              className="text-6xl text-radio-red text-shadow-glow"
            >
              {['ARE YOU SURE?', 'IS THIS REAL?', 'WERE YOU ALWAYS ALONE?', 'CHECK AGAIN'][
                Math.floor(Math.random() * 4)
              ]}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6 border-2 border-radio-green p-4 bg-black bg-opacity-50 radio-static"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-shadow-glow mb-2">
                ECHOES IN THE STATIC
              </h1>
              <p className="text-sm text-gray-500">REMOTE OUTPOST #12 // NIGHT SHIFT</p>
            </div>
            <div className="flex gap-4 md:gap-8">
              <div>
                <p className="text-xs text-gray-500">TURN</p>
                <p className="text-2xl font-bold text-shadow-glow">{turnCount}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">MENTAL STATE</p>
                <p className={`text-2xl font-bold text-shadow-glow ${getSanityColor()}`}>
                  {getSanityText()}
                </p>
              </div>
              {currentFrequency && (
                <div>
                  <p className="text-xs text-gray-500">FREQUENCY</p>
                  <p className="text-2xl font-bold text-radio-amber text-shadow-glow">
                    {currentFrequency.number}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sanity bar */}
          <div className="mt-4 h-2 bg-gray-900 border border-radio-green">
            <motion.div
              animate={{ width: `${sanity}%` }}
              className={`h-full ${getSanityColor()} bg-current`}
              style={{ boxShadow: '0 0 10px currentColor' }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Message Log */}
          <div className="lg:col-span-2 border-2 border-radio-green p-4 bg-black bg-opacity-50 h-[500px] overflow-y-auto radio-static">
            <div className="space-y-2">
              <AnimatePresence>
                {messageLog.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="mb-3"
                  >
                    <span className="text-xs text-gray-600">[{message.timestamp}] </span>
                    <span className={getMessageTypeClass(message.type)}>
                      {message.text}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(57, 255, 20, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              onClick={scanFrequency}
              className="w-full border-2 border-radio-green text-radio-green py-6 px-4 bg-black hover:bg-radio-green hover:bg-opacity-10 transition-all text-shadow-glow"
            >
              <span className="text-2xl font-bold">⚡</span>
              <br />
              SCAN FREQUENCY
              <br />
              <span className="text-xs text-gray-500">Listen to the void</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(255, 7, 58, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              onClick={replyToTransmission}
              disabled={!lastTransmission}
              className={`w-full border-2 py-6 px-4 bg-black transition-all ${
                lastTransmission
                  ? 'border-radio-red text-radio-red hover:bg-radio-red hover:bg-opacity-10 text-shadow-glow'
                  : 'border-gray-700 text-gray-700 cursor-not-allowed'
              }`}
            >
              <span className="text-2xl font-bold">📡</span>
              <br />
              REPLY
              <br />
              <span className="text-xs text-gray-500">Answer the call</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              onClick={investigate}
              className="w-full border-2 border-blue-400 text-blue-400 py-6 px-4 bg-black hover:bg-blue-400 hover:bg-opacity-10 transition-all text-shadow-glow"
            >
              <span className="text-2xl font-bold">🔍</span>
              <br />
              INVESTIGATE
              <br />
              <span className="text-xs text-gray-500">Check the outpost</span>
            </motion.button>

            {/* Warning Box */}
            <motion.div
              animate={{
                opacity: sanity < 30 ? [0.5, 1, 0.5] : 1,
              }}
              transition={{ duration: 1, repeat: sanity < 30 ? Infinity : 0 }}
              className={`border-2 p-4 bg-black ${
                sanity < 30 ? 'border-radio-red' : 'border-gray-700'
              }`}
            >
              <p className="text-xs text-gray-500 mb-2">SYSTEM STATUS:</p>
              {sanity > 60 && (
                <p className="text-sm text-radio-green">All systems nominal.</p>
              )}
              {sanity <= 60 && sanity > 30 && (
                <p className="text-sm text-radio-amber">Minor interference detected.</p>
              )}
              {sanity <= 30 && (
                <p className="text-sm text-radio-red animate-pulse">
                  WARNING: REALITY COHERENCE FAILING
                </p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="mt-6 text-center text-xs text-gray-600"
        >
          <p>The storm shows no sign of stopping...</p>
          <p className="mt-2">
            {sanity < 40 && "You can't remember when your shift started."}
            {sanity >= 40 && sanity < 70 && "How long have you been here?"}
            {sanity >= 70 && "Dawn is still hours away."}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
