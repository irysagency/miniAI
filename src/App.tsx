import { useState } from 'react';
import { Layout } from './components/Layout';
import { StyleSelectionScreen } from './components/StyleSelectionScreen';
import { PersonasScreen } from './components/PersonasScreen';

function App() {
  const [activeTab, setActiveTab] = useState<'studio' | 'personas' | 'history'>('personas');

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'studio' && <StyleSelectionScreen />}
      {activeTab === 'personas' && <PersonasScreen />}
      {activeTab === 'history' && <div>History Phase 2 Placeholder</div>}
    </Layout>
  );
}

export default App;
