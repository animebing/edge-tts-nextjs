'use client';

import { toast } from 'sonner';

import Audio from '@/components/audio'
import Button from '@/components/button'
import Hero from '@/components/hero'
import Input from '@/components/input'
import Language from '@/components/language'
import Options from '@/components/options'
import { useEffect, useState } from 'react';
import { language2voices } from '@/lib/constants';

export default function Home() {
  const [language, setLanguage] = useState('Chinese');
  const [voice, setVoice] = useState(language2voices[language]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');

  useEffect(() => {
    setVoice(language2voices[language][0]);
    setAudioUrl('');
  }, [language]);

  const selectChangeHandler = (newVoice) => {
    setVoice(newVoice);
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
      <Language language={language} setLanguage={setLanguage} />
      <Options voice={voice} voices={language2voices[language]} onChange={selectChangeHandler} />
      <Input text={text} onChange={inputChangeHandler} />
      <Button loading={loading} onClick={clickHandler} />
      {audioUrl && <Audio audioUrl={audioUrl} />}
    </main>
  );
}
