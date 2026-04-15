"use client";

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import SignupModal, { SignupVariant } from "./SignupModal";
import LoginModal from "./LoginModal";

interface ModalContextValue {
  openSignupModal: (variant?: SignupVariant, tier?: string) => void;
  openLoginModal: () => void;
  closeModals: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModals(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModals must be used within ModalProvider");
  return ctx;
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [signupOpen, setSignupOpen] = useState(false);
  const [signupVariant, setSignupVariant] = useState<SignupVariant>("trial");
  const [signupTier, setSignupTier] = useState<string | undefined>(undefined);
  const [loginOpen, setLoginOpen] = useState(false);

  const openSignupModal = useCallback((variant: SignupVariant = "trial", tier?: string) => {
    setSignupVariant(variant);
    setSignupTier(tier);
    setSignupOpen(true);
  }, []);

  const openLoginModal = useCallback(() => setLoginOpen(true), []);
  const closeModals = useCallback(() => {
    setSignupOpen(false);
    setLoginOpen(false);
  }, []);

  const value = useMemo<ModalContextValue>(
    () => ({ openSignupModal, openLoginModal, closeModals }),
    [openSignupModal, openLoginModal, closeModals]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      <SignupModal
        open={signupOpen}
        variant={signupVariant}
        tier={signupTier}
        onClose={() => setSignupOpen(false)}
      />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </ModalContext.Provider>
  );
}
