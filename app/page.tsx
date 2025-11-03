'use client'

import { useState } from 'react'

const scenes = [
  {
    title: "Scene 1: The Trap is Sprung",
    dialogues: [
      { character: "Naruto", text: "(panicking internally) \"Oh no. Oh no. That's a binding contract in girl language.\"", emotion: "panic" },
      { character: "Hinata", text: "(sweet smile that hides danger) \"So… you'll do anything, right?\"", emotion: "sweet" },
      { character: "Naruto", text: "\"Uh— I mean— anything anything? Or like— anything as in… homework-related anything?\"", emotion: "nervous" },
      { character: "Hinata", text: "\"You didn't specify.\" *smiles like Neji just got replaced by a demon lawyer*", emotion: "devious" },
    ]
  },
  {
    title: "Scene 2: The \"Favor\"",
    dialogues: [
      { character: "Stage", text: "*Kiba, Shino, and half of Team 10 peeking around a corner*", emotion: "narration" },
      { character: "Kiba", text: "\"Yo, she's finally cashing in that debt. Man's doomed.\"", emotion: "amused" },
      { character: "Shino", text: "\"Observation: Naruto's social naivety is about to cost him his dignity.\"", emotion: "analytical" },
      { character: "Kiba", text: "\"You mean his freedom.\"", emotion: "laughing" },
      { character: "Stage", text: "*Meanwhile...*", emotion: "narration" },
      { character: "Hinata", text: "\"Okay Naruto, here's what I want.\"", emotion: "determined" },
      { character: "Naruto", text: "\"Oh boy.\"", emotion: "dread" },
      { character: "Hinata", text: "\"Pretend to be my boyfriend for a week.\"", emotion: "sweet" },
      { character: "Naruto", text: "\"Wha—WHAT?! WHY?!\"", emotion: "shocked" },
      { character: "Hinata", text: "\"Ino won't stop teasing me about not having a boyfriend.\"", emotion: "pout" },
      { character: "Naruto", text: "\"So I'm just— what— your decoy?\"", emotion: "confused" },
      { character: "Hinata", text: "\"No. My promise-fulfillment partner.\"", emotion: "matter-of-fact" },
      { character: "Naruto", text: "\"...That sounds legally terrifying.\"", emotion: "defeated" },
    ]
  },
  {
    title: "Scene 3: The Chaos Begins",
    dialogues: [
      { character: "Stage", text: "*Day 1 of Operation: Fake Dating*", emotion: "narration" },
      { character: "Naruto", text: "\"So... what do fake boyfriends do exactly?\"", emotion: "clueless" },
      { character: "Hinata", text: "\"Hold my hand. Call me cute. Don't make it weird.\"", emotion: "instructive" },
      { character: "Naruto", text: "\"THAT'S ALL WEIRD!\"", emotion: "panic" },
      { character: "Stage", text: "*Ino appears like she spawned from thin air*", emotion: "narration" },
      { character: "Ino", text: "\"Oh my GOD! Hinata?! Is that... NARUTO?!\"", emotion: "shocked" },
      { character: "Hinata", text: "*squeezes Naruto's hand with the force of a thousand suns* \"Yes. We're dating now.\"", emotion: "threatening-sweet" },
      { character: "Naruto", text: "*sweating* \"Y-yeah! We're totally... boyfriend... girlfriend... people!\"", emotion: "dying-inside" },
      { character: "Ino", text: "\"This is the weirdest timeline.\"", emotion: "suspicious" },
    ]
  }
]

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0)
  const [currentDialogue, setCurrentDialogue] = useState(0)
  const [autoPlay, setAutoPlay] = useState(false)

  const handleNext = () => {
    if (currentDialogue < scenes[currentScene].dialogues.length - 1) {
      setCurrentDialogue(currentDialogue + 1)
    } else if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1)
      setCurrentDialogue(0)
    }
  }

  const handlePrev = () => {
    if (currentDialogue > 0) {
      setCurrentDialogue(currentDialogue - 1)
    } else if (currentScene > 0) {
      setCurrentScene(currentScene - 1)
      setCurrentDialogue(scenes[currentScene - 1].dialogues.length - 1)
    }
  }

  const currentDialogueObj = scenes[currentScene].dialogues[currentDialogue]

  const getCharacterColor = (character: string) => {
    switch(character) {
      case 'Naruto': return 'text-orange-600'
      case 'Hinata': return 'text-purple-600'
      case 'Kiba': return 'text-red-600'
      case 'Shino': return 'text-gray-600'
      case 'Ino': return 'text-pink-600'
      case 'Stage': return 'text-gray-500 italic'
      default: return 'text-gray-700'
    }
  }

  const getEmotionBg = (emotion: string) => {
    switch(emotion) {
      case 'panic': case 'shocked': case 'nervous': return 'bg-red-100 border-red-300'
      case 'sweet': case 'pout': return 'bg-pink-100 border-pink-300'
      case 'devious': case 'threatening-sweet': return 'bg-purple-100 border-purple-300'
      case 'amused': case 'laughing': return 'bg-yellow-100 border-yellow-300'
      case 'analytical': return 'bg-blue-100 border-blue-300'
      case 'defeated': case 'dread': case 'dying-inside': return 'bg-gray-100 border-gray-300'
      case 'narration': return 'bg-amber-50 border-amber-200'
      default: return 'bg-white border-gray-300'
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-orange-600 mb-2">The Promise</h1>
          <p className="text-xl text-gray-600">A Naruto & Hinata Comedy</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6 border-4 border-orange-300">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
              {scenes[currentScene].title}
            </h2>
            <div className="flex justify-center gap-2">
              {scenes.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 w-12 rounded-full ${
                    idx === currentScene ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className={`min-h-[200px] p-6 rounded-xl border-2 ${getEmotionBg(currentDialogueObj.emotion)} transition-all duration-300`}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className={`w-3 h-3 rounded-full ${
                  currentDialogueObj.character === 'Naruto' ? 'bg-orange-500' :
                  currentDialogueObj.character === 'Hinata' ? 'bg-purple-500' :
                  currentDialogueObj.character === 'Kiba' ? 'bg-red-500' :
                  currentDialogueObj.character === 'Shino' ? 'bg-gray-500' :
                  currentDialogueObj.character === 'Ino' ? 'bg-pink-500' :
                  'bg-gray-400'
                } mt-1`}></div>
              </div>
              <div className="flex-1">
                <p className={`font-bold text-lg mb-2 ${getCharacterColor(currentDialogueObj.character)}`}>
                  {currentDialogueObj.character}
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  {currentDialogueObj.text}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentScene === 0 && currentDialogue === 0}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
            >
              ← Previous
            </button>

            <div className="text-sm text-gray-600">
              {currentDialogue + 1} / {scenes[currentScene].dialogues.length}
            </div>

            <button
              onClick={handleNext}
              disabled={currentScene === scenes.length - 1 && currentDialogue === scenes[currentScene].dialogues.length - 1}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors"
            >
              Next →
            </button>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              setCurrentScene(0)
              setCurrentDialogue(0)
            }}
            className="px-6 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors"
          >
            ↺ Restart
          </button>
        </div>
      </div>
    </main>
  )
}
