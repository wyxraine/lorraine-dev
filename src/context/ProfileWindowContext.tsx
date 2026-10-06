import React, { createContext, useContext, useState } from 'react';

interface ProfileWindowContextType {
  isMinimized: boolean;
  isClosed: boolean;
  minimize: () => void;
  restore: () => void;
  close: () => void;
  open: () => void;
  toggleMinimize: () => void;
}

const ProfileWindowContext = createContext<ProfileWindowContextType | undefined>(undefined);

export const ProfileWindowProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMinimized, setIsMinimized] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 760;
    }
    return false;
  });
  const [isClosed, setIsClosed] = useState(false);

  const minimize = () => {
    setIsMinimized(true);
    setIsClosed(false);
  };

  const restore = () => {
    setIsMinimized(false);
    setIsClosed(false);
  };

  const close = () => {
    setIsClosed(true);
    setIsMinimized(false);
  };

  const open = () => {
    setIsClosed(false);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    if (isMinimized) {
      restore();
    } else {
      minimize();
    }
  };

  return (
    <ProfileWindowContext.Provider
      value={{
        isMinimized,
        isClosed,
        minimize,
        restore,
        close,
        open,
        toggleMinimize,
      }}
    >
      {children}
    </ProfileWindowContext.Provider>
  );
};

export const useProfileWindow = () => {
  const context = useContext(ProfileWindowContext);
  if (!context) {
    throw new Error('useProfileWindow must be used within a ProfileWindowProvider');
  }
  return context;
};
