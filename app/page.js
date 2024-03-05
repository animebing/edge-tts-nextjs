'use client';

import Audio from '@/components/audio'
import Button from '@/components/button'
import Hero from '@/components/hero'
import Input from '@/components/input'
import Options from '@/components/options'
import { useState } from 'react';

export default function Home() {
  const [voice, setVoice] = useState(null);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [modelUrl, setModelUrl] = useState('');
  
  const clickHandler = async () => {
    setLoading(true);

    

    setLoading(false);
  };

  return (
    <main className="flex-col w-full px-8 py-8 md:max-w-3xl md:mx-auto">
      <Hero />
      <Options voice={voice} setVoice={setVoice} />
      <Input text={text} setText={setText} />
      <Button loading={loading}/>
      {modelUlr && <Audio modelUrl={modelUrl} />}
    </main>
  );
}
