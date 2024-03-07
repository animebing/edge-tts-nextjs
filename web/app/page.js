'use client';

import { toast } from 'sonner';

import Audio from '@/components/audio'
import Button from '@/components/button'
import Hero from '@/components/hero'
import Input from '@/components/input'
import Options from '@/components/options'
import { useState } from 'react';
import { voices } from '@/lib/constants';

export default function Home() {
  const [voice, setVoice] = useState(voices[0]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  
  const selectChangeHandler = (newValue) => {
    setVoice(newValue);
    setAudioUrl('');
  };

  const inputChangeHandler = (event) => {
    setText(event.target.value);
    setAudioUrl('');
  };

  const clickHandler = async () => {
    setLoading(true);
    setAudioUrl('')

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          voice: voice.value,
        }),
      });

      if (!response.ok) {
        throw new Error("failed to generate audio");
      }

      const data = await response.arrayBuffer();
      const blob = new Blob([data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(blob);
      setAudioUrl(audioUrl)
    } catch (error) {
      console.log("error in tts:", error);
      toast.error('error in /api/generate');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen w-full px-8 py-8 md:max-w-3xl md:mx-auto">
      <Hero />
      <Options onChange={selectChangeHandler} />
      <Input text={text} onChange={inputChangeHandler} />
      <Button loading={loading} onClick={clickHandler} />
      {audioUrl && <Audio audioUrl={audioUrl} />}
    </main>
  );
}
