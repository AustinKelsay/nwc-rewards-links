import { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';     

export default function Home() {
  const [name, setName] = useState('');
  const [numberOfLinks, setNumberOfLinks] = useState(null);
  const [satsPerLink, setSatsPerLink] = useState(null);

  const handleGenerate = () => {
    console.log(`Generating ${numberOfLinks} links for ${name} with ${satsPerLink} sats each.`);
  };

  return (
    <main
      className={"flex min-h-screen flex-col items-center justify-evenly p-24"}
    >
      <h1 className="text-4xl">NWC Reward Links</h1>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center my-8'>
          <label htmlFor='name'>Name for your NWC</label>
          <InputText id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='flex flex-col items-center my-8'>
          <label htmlFor='number'>Number of links</label>
          <InputNumber id='number' value={numberOfLinks} onValueChange={(e) => setNumberOfLinks(e.value)} />
        </div>
        <div className='flex flex-col items-center my-8'>
          <label htmlFor='sats'>Sats per link</label>
          <InputNumber id='sats' value={satsPerLink} onValueChange={(e) => setSatsPerLink(e.value)} />
        </div>
        <Button label="Generate" severity="success" outlined onClick={handleGenerate} />
      </div>
    </main>
  );
}
