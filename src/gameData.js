// Game data for Echoes in the Static

export const frequencies = [
  { id: 1, number: '94.3', type: 'static' },
  { id: 2, number: '101.7', type: 'whisper' },
  { id: 3, number: '88.9', type: 'emergency' },
  { id: 4, number: '107.5', type: 'music' },
  { id: 5, number: '95.1', type: 'voice' },
  { id: 6, number: '103.2', type: 'numbers' },
  { id: 7, number: '91.4', type: 'distress' },
  { id: 8, number: '99.9', type: 'children' },
  { id: 9, number: '105.8', type: 'your_voice' },
  { id: 10, number: '97.2', type: 'morse' },
];

export const transmissions = {
  static: [
    "You hear nothing but white noise. Wait—was that a voice?",
    "Static. Pure static. But you could swear it's forming words...",
    "The static sounds almost... rhythmic. Like breathing.",
    "A wall of noise. In the chaos, you hear what might be your name.",
    "Just static. Or is someone whispering beneath it?",
  ],
  whisper: [
    "A voice, barely audible: '...still out there... watching...'",
    "'...shouldn't have come here...' The voice fades into static.",
    "'...they don't sleep... never sleep...' Click.",
    "Multiple whispers overlap: '...leave... get out... too late...'",
    "'...operator twelve... we know you're listening...'",
  ],
  emergency: [
    "EMERGENCY BROADCAST: 'Remain indoors. Do not trust—' The signal cuts.",
    "'All personnel evacuate immediately. This is not a drill. I repeat—' Static.",
    "'If you're hearing this, you're already too late.' The voice laughs.",
    "A distorted voice: 'Emergency services are... discontinued.'",
    "'The storm isn't natural. Get out while you—' Silence.",
  ],
  music: [
    "A music box plays. Children's laughter echoes in the background.",
    "An old song plays backwards. You recognize it, but can't place it.",
    "Beautiful classical music. Someone is screaming very, very quietly underneath.",
    "A lullaby plays. The melody is wrong somehow. All wrong.",
    "Jazz music from the 1940s. A voice says, 'This one's for you,' and you never mentioned your name.",
  ],
  voice: [
    "'Hello? Can anyone hear me? I've been trapped here for—' Static drowns out the rest.",
    "A calm voice: 'Operator, you need to leave the building. Now.'",
    "'I see you there, at your station. You should check behind you.'",
    "Your own voice: 'Why are you still here? I left hours ago.'",
    "'The storm will pass. You won't.' Click.",
  ],
  numbers: [
    "A monotone voice: '7... 19... 3... 12...' The numbers continue endlessly.",
    "'Coordinates: Your current location.' How do they know where you are?",
    "'Days remaining: 0. Hours remaining: 0. Minutes remaining—' The count continues into negatives.",
    "A child's voice counts: '...8, 9, 10! Ready or not, here I come!'",
    "'Casualty count: 1.' You're alone here. Aren't you?",
  ],
  distress: [
    "'MAYDAY MAYDAY—something's in the water—it's not—' Screaming.",
    "'This is Outpost Seven. We're under attack. They came from the—' Static.",
    "'Help us! The doors won't hold! THEY'RE INSIDE—' Gunfire, then silence.",
    "'We were wrong. So wrong. Don't let them—' A wet, tearing sound.",
    "'Is anyone there? Please! I can hear them in the walls!'",
  ],
  children: [
    "Children singing: 'Ring around the outpost, pocket full of bones...'",
    "A child's voice: 'Are you my friend? My last friend went away.'",
    "Laughter. Just children's laughter. It goes on too long.",
    "'Let's play hide and seek! You're already hiding, so I'll seek!' Footsteps.",
    "A child whispers: 'I found you...' You're alone in the room.",
  ],
  your_voice: [
    "You hear your own voice: 'If you're hearing this, I'm already dead.'",
    "Your voice: 'Check the basement. You need to check the basement.'",
    "It's definitely your voice: 'This is a recording from tomorrow.'",
    "You speaking: 'Stop listening to the radio. Stop. Stop. STOP.'",
    "Your voice, crying: 'I'm so sorry for what I'm about to do.'",
  ],
  morse: [
    "Morse code: '... --- ...' It repeats. SOS. Over and over.",
    "Rapid morse code. When translated: 'GET OUT GET OUT GET OUT'",
    "Slow, deliberate morse: 'BEHIND YOU. TURN AROUND.'",
    "Morse code spelling: 'THEY ARE LISTENING'",
    "The pattern spells your name. Perfectly. Who's sending this?",
  ],
};

export const replyResponses = {
  static: [
    "No response. Just static that grows louder. Angrier.",
    "The static forms a word: 'NO.'",
    "Your microphone feeds back. The static laughs.",
  ],
  whisper: [
    "The whispers stop. Silence. Then: 'We heard you.'",
    "All the voices speak at once: 'THANK YOU FOR RESPONDING.'",
    "A clear voice: 'Wrong answer.' The radio goes dead.",
  ],
  emergency: [
    "'Operator identified. Sending coordinates.' Whose coordinates?",
    "'You shouldn't have done that.' The line cuts.",
    "'Response logged. They're on their way.'",
  ],
  music: [
    "The music stops. Someone claps. Once.",
    "A voice over the music: 'We're glad you like it.'",
    "The song changes to your favorite. How could they know?",
  ],
  voice: [
    "'Oh thank God! Please, send help to—' The voice becomes yours, mid-sentence.",
    "'You shouldn't have answered me.' The voice giggles.",
    "'Finally. Now we can begin.'",
  ],
  numbers: [
    "The numbers stop. Then: 'Calculation complete. You have: No time.'",
    "'Numbers received. Your number is next.'",
    "The counting reverses. When it reaches zero, your lights flicker.",
  ],
  distress: [
    "'You... you answered? RUN. RUN NOW—' Silence.",
    "'Help isn't coming. It never was.' Laughter.",
    "'Thank you for confirming your position.'",
  ],
  children: [
    "Delighted squealing: 'You want to play! Your turn to seek!'",
    "'We knew you'd answer! We're coming over now.'",
    "The children go silent. Then: 'Found you.'",
  ],
  your_voice: [
    "'Stop copying me.' But you didn't say that out loud.",
    "'See? I told you you'd respond.' You never said that.",
    "Your voice and the radio voice speak together: 'We are one now.'",
  ],
  morse: [
    "Morse reply: 'TOO LATE. THEY KNOW YOU ARE HERE.'",
    "The morse becomes frantic, then stops completely.",
    "A morse response: 'SHOULD NOT HAVE ANSWERED. SORRY.'",
  ],
};

export const investigationEvents = [
  {
    location: 'Window',
    descriptions: [
      "The storm rages outside. Lightning reveals... nothing. Just darkness.",
      "You see your reflection. It doesn't move when you do. Then it smiles.",
      "The storm seems to have stopped. But you can still hear it.",
      "Something tall stands in the distance. It wasn't there before.",
      "Your reflection mouths words: 'Come outside.'",
      "The window is fogged. Someone wrote 'SOON' from the outside.",
    ],
  },
  {
    location: 'Door',
    descriptions: [
      "The door is secure. The doorknob is warm, like someone's been holding it.",
      "You hear footsteps outside. They stop right at your door.",
      "The door is locked. You don't remember locking it.",
      "Something scratches at the door. Softly. Patiently.",
      "You check the door. It's open. You definitely locked it.",
      "The hallway beyond is dark. Darker than it should be.",
    ],
  },
  {
    location: 'Basement',
    descriptions: [
      "The basement door is locked. You hear something moving down there.",
      "You shine your light down the stairs. Too many shadows.",
      "There's a smell coming from the basement. Metallic. Wrong.",
      "The basement light is on. You didn't turn it on.",
      "You hear your name called from below. In your own voice.",
      "The basement door opens on its own. The stairs descend into black.",
    ],
  },
  {
    location: 'Equipment Room',
    descriptions: [
      "The backup radio turns on by itself. It's playing your current transmission.",
      "All the equipment is working perfectly. Too perfectly.",
      "You find a log book. The last entry is today's date, in your handwriting. But you didn't write it.",
      "The radio equipment shows incoming signals from inside the building.",
      "A previous operator left a note: 'They mimic voices. Don't believe anything.'",
      "The equipment displays a message: 'WE SEE YOU.'",
    ],
  },
  {
    location: 'Ceiling',
    descriptions: [
      "The ceiling creaks. Something's moving in the crawlspace above.",
      "You see a wet stain spreading across the ceiling. It's shaped like a hand.",
      "Dust falls from above. Something's walking up there.",
      "There's a hatch in the ceiling you never noticed before.",
      "The lights flicker. In the darkness, you see shapes moving above.",
      "Something drips from the ceiling. It's not water.",
    ],
  },
  {
    location: 'Logbook',
    descriptions: [
      "You flip through the logbook. The last operator wrote: 'It's not a storm. RUN.'",
      "Your own handwriting appears in the logbook. But you didn't write this. It's dated tomorrow.",
      "The logbook shows all previous operators ended their shift with 'Final entry.'",
      "Someone tore out pages. The remnants show sketches of something... tall.",
      "The logbook entry from this morning shows you arrived yesterday. But you didn't.",
      "A note tucked inside: 'If you're reading this, you're me. I'm sorry.'",
    ],
  },
];

export const randomEvents = [
  { type: 'lights', text: "The lights flicker. For a moment, you see someone standing in the corner. The lights stabilize. You're alone." },
  { type: 'sound', text: "You hear footsteps upstairs. You're on the top floor." },
  { type: 'radio', text: "All the radios suddenly tune to the same frequency. Static. Then laughter." },
  { type: 'clock', text: "You check the time. The clock reads 3:33 AM. It was 11:47 PM a moment ago." },
  { type: 'cold', text: "The room temperature drops. Your breath mists. You see frost forming on the windows... from the inside." },
  { type: 'power', text: "The power cuts out. In the darkness, something breathes nearby. The power returns. Nothing there." },
  { type: 'phone', text: "An old rotary phone rings. You don't have a rotary phone. You answer. Heavy breathing." },
  { type: 'door', text: "Every door in the building slams shut simultaneously." },
  { type: 'mirror', text: "You catch your reflection in a dark monitor. It waves at you." },
  { type: 'smell', text: "You smell something burning. Nothing's on fire. The smell is coming from the walls." },
  { type: 'time', text: "You've been here for what feels like hours. Your watch shows only 3 minutes have passed." },
  { type: 'voice', text: "You hear your own voice from another room, having a conversation with someone." },
  { type: 'weather', text: "The storm stops abruptly. Total silence. No wind. No rain. Nothing. It's worse than the storm." },
  { type: 'shadow', text: "Your shadow moves independently for just a second." },
  { type: 'message', text: "Your radio crackles: 'Operator 12, please confirm you're alone.' You're Operator 12. You confirm. 'Good. So are we.'" },
];

export const gameIntro = `
╔═══════════════════════════════════════════════╗
║     ECHOES IN THE STATIC                      ║
║     Remote Outpost #12                        ║
║     October 31st, 2025 - 11:47 PM            ║
╚═══════════════════════════════════════════════╝

The storm hit harder than forecast. You're alone at the
outpost, maintaining the radio equipment. Standard
night shift.

At least, it should be standard.

The equipment has been acting strange. Picking up
signals that shouldn't exist. Voices that sound...
wrong.

Your relief isn't due until dawn. That's hours away.

The radio crackles to life...
`;

export const gameOverMessages = [
  "The radio goes silent. So do you.",
  "Your last transmission is never received. The outpost remains staffed.",
  "They found you. Or did you find them?",
  "The storm finally breaks. You don't.",
  "Your replacement arrives at dawn. You're still at your station. You've been there for years.",
  "The logbook shows your final entry: 'I understand now.'",
];
