import React, { createContext, useContext, useState, useEffect } from 'react';

export type CookieConsent = 'accepted' | 'rejected' | 'pending' | 'custom';

export interface GranularConsent {
  essential: boolean;
  analytical: boolean;
}

interface CookieContextType {
  consent: CookieConsent;
  granularConsent: GranularConsent;
  acceptCookies: () => void;
  rejectCookies: () => void;
  saveCustomConsent: (prefs: GranularConsent) => void;
  resetConsent: () => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<CookieConsent>('pending');
  const [granularConsent, setGranularConsent] = useState<GranularConsent>({
    essential: true,
    analytical: false,
  });
  const [showBanner, setShowBanner] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent') as CookieConsent;
    const savedGranular = localStorage.getItem('cookie-preferences');
    
    if (savedConsent) {
      setConsent(savedConsent);
      setShowBanner(false);
      if (savedGranular) {
        setGranularConsent(JSON.parse(savedGranular));
      } else if (savedConsent === 'accepted') {
        setGranularConsent({ essential: true, analytical: true });
      } else if (savedConsent === 'rejected') {
        setGranularConsent({ essential: true, analytical: false });
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    const prefs = { essential: true, analytical: true };
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
    setConsent('accepted');
    setGranularConsent(prefs);
    setShowBanner(false);
    setIsModalOpen(false);
  };

  const rejectCookies = () => {
    const prefs = { essential: true, analytical: false };
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
    setConsent('rejected');
    setGranularConsent(prefs);
    setShowBanner(false);
    setIsModalOpen(false);
  };

  const saveCustomConsent = (prefs: GranularConsent) => {
    localStorage.setItem('cookie-consent', 'custom');
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
    setConsent('custom');
    setGranularConsent(prefs);
    setShowBanner(false);
    setIsModalOpen(false);
  };

  const resetConsent = () => {
    setShowBanner(true);
  };

  return (
    <CookieContext.Provider value={{ 
      consent, 
      granularConsent,
      acceptCookies, 
      rejectCookies, 
      saveCustomConsent,
      resetConsent, 
      showBanner,
      setShowBanner,
      isModalOpen,
      setIsModalOpen
    }}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookies = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
};
