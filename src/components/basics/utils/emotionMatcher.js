import React from 'react'

export const emotionsList = ['love', 'hate', 'confusion', 'sadness', 'surprise', 'joy']

export default function (emotion) {
  return <div className="emojiEmotion" style={{ backgroundImage: `url('img/emojis/${emotion}.svg')` }} title={emotion} />
}

