import { useState, useEffect } from 'react';
import { WorkspaceLayout } from './components/layout/WorkspaceLayout';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Education } from './sections/Education';
import { Work } from './sections/Work';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { ProfileWindowProvider } from './context/ProfileWindowContext';
import { ThemeProvider } from './context/ThemeContext';
import { TabProvider, useTabs } from './context/TabContext';
import { LoadingScreen } from './components/layout/LoadingScreen';

function AppContent() {
  const { activeTab, openAndActivateTab } = useTabs();

  const renderSection = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={openAndActivateTab} />;
      case 'about':
        return <About onNavigate={openAndActivateTab} />;
      case 'education':
        return <Education />;
      case 'projects':
        return <Work />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={openAndActivateTab} />;
    }
  };

  return (
    <WorkspaceLayout>
      {renderSection()}
    </WorkspaceLayout>
  );
}

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Dismiss the loading screen after ~2.5 seconds (or 1.0s for reduced motion)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 1000 : 2500;

    const timer = setTimeout(() => setIsLoading(false), duration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <ThemeProvider>
        <ProfileWindowProvider>
          <TabProvider>
            <AppContent />
          </TabProvider>
        </ProfileWindowProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
