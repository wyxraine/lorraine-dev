import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { NavigationSection } from '../types';

export interface TabContextType {
  openTabs: NavigationSection[];
  activeTab: NavigationSection;
  tabHistory: NavigationSection[];
  openAndActivateTab: (section: NavigationSection) => void;
  closeTab: (section: NavigationSection, e?: React.MouseEvent) => void;
  setActiveTab: (section: NavigationSection) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

const VALID_SECTIONS: NavigationSection[] = [
  'home',
  'about',
  'education',
  'projects',
  'skills',
  'experience',
  'contact',
];

const getInitialTabState = () => {
  let initialTab: NavigationSection = 'home';
  if (typeof window !== 'undefined' && window.location.hash) {
    const hash = window.location.hash.replace('#', '') as NavigationSection;
    if (VALID_SECTIONS.includes(hash)) {
      initialTab = hash;
    }
  }

  const openTabs: NavigationSection[] = initialTab === 'home' ? ['home'] : ['home', initialTab];
  const tabHistory: NavigationSection[] = initialTab === 'home' ? ['home'] : ['home', initialTab];

  return { openTabs, activeTab: initialTab, tabHistory };
};

export const TabProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [initial] = useState(getInitialTabState);
  const [openTabs, setOpenTabs] = useState<NavigationSection[]>(initial.openTabs);
  const [activeTab, setActiveTabState] = useState<NavigationSection>(initial.activeTab);
  const [tabHistory, setTabHistory] = useState<NavigationSection[]>(initial.tabHistory);

  const openAndActivateTab = useCallback((section: NavigationSection) => {
    if (!VALID_SECTIONS.includes(section)) return;

    setOpenTabs((prev) => {
      if (prev.includes(section)) return prev;
      return [...prev, section];
    });

    setActiveTabState(section);

    setTabHistory((prev) => {
      const filtered = prev.filter((id) => id !== section);
      return [...filtered, section];
    });

    if (typeof window !== 'undefined') {
      window.location.hash = section;
    }
  }, []);

  const closeTab = useCallback(
    (section: NavigationSection, e?: React.MouseEvent) => {
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }

      // Home tab is permanent and can never be closed
      if (section === 'home') return;

      setOpenTabs((prevOpen) => {
        const newOpen = prevOpen.filter((id) => id !== section);
        const validOpen = newOpen.length > 0 ? newOpen : (['home'] as NavigationSection[]);

        setTabHistory((prevHistory) => {
          const newHistory = prevHistory.filter((id) => id !== section);

          setActiveTabState((currentActive) => {
            if (currentActive === section) {
              // Find the most recent tab in history that is still in openTabs
              const fallback =
                [...newHistory].reverse().find((id) => validOpen.includes(id)) || 'home';
              if (typeof window !== 'undefined') {
                window.location.hash = fallback;
              }
              return fallback;
            }
            return currentActive;
          });

          return newHistory;
        });

        return validOpen;
      });
    },
    []
  );

  const setActiveTab = useCallback((section: NavigationSection) => {
    if (!VALID_SECTIONS.includes(section)) return;
    setActiveTabState(section);
    setTabHistory((prev) => {
      const filtered = prev.filter((id) => id !== section);
      return [...filtered, section];
    });
    if (typeof window !== 'undefined') {
      window.location.hash = section;
    }
  }, []);

  // Listen to external hashchange events (e.g. browser back/forward or direct hash updates)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavigationSection;
      if (VALID_SECTIONS.includes(hash)) {
        openAndActivateTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [openAndActivateTab]);

  return (
    <TabContext.Provider
      value={{
        openTabs,
        activeTab,
        tabHistory,
        openAndActivateTab,
        closeTab,
        setActiveTab,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabProvider');
  }
  return context;
};
