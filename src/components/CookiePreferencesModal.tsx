import React, { useState } from 'react'
import { Text } from "./ui/Typography"
import { Button } from "./ui/Button"
import { useCookies } from "../lib/cookies"
import type { GranularConsent } from "../lib/cookies"
import { X, ShieldCheck, BarChart3, ChevronRight, Settings } from "lucide-react"
import { cn } from "../lib/utils"

export const CookiePreferencesModal: React.FC = () => {
  const { isModalOpen, setIsModalOpen, granularConsent, saveCustomConsent } = useCookies()
  const [localPrefs, setLocalPrefs] = useState<GranularConsent>(granularConsent)

  if (!isModalOpen) return null

  const handleToggle = (key: keyof GranularConsent) => {
    if (key === 'essential') return // Cannot toggle essential
    setLocalPrefs(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSave = () => {
    saveCustomConsent(localPrefs)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={() => setIsModalOpen(false)}
      />

      {/* Modal */}
      <div className="bg-surface/95 backdrop-blur-md border border-border shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[2.5rem] w-full max-w-150 overflow-hidden relative z-10 animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="p-8 border-b border-border/40 flex items-center justify-between bg-bg/50">
          <div className="flex items-center gap-3">
            <div className="bg-accent/10 p-2 rounded-xl text-accent"><Settings size={22} /></div>
            <Text weight="bold" size="xl" className="text-luxury">Preferências de Cookies</Text>
          </div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="p-2 hover:bg-accent/10 rounded-full transition-colors text-primary/40 hover:text-accent"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <Text size="sm" color="muted" className="leading-relaxed">
            Personalize a sua experiência selecionando quais os cookies que deseja permitir. Os cookies essenciais são necessários para o funcionamento básico do website.
          </Text>

          <div className="space-y-4">
            {/* Essential */}
            <div className="p-6 rounded-2xl border border-border/60 bg-white/40 group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-accent" size={20} />
                  <Text weight="bold" size="sm">Cookies Necessários</Text>
                </div>
                <div className="h-6 w-12 rounded-full bg-accent/20 flex items-center justify-end px-1 opacity-50 cursor-not-allowed">
                  <div className="h-4 w-4 rounded-full bg-accent" />
                </div>
              </div>
              <Text size="xs" color="muted" className="leading-relaxed ml-8">
                Estes cookies são fundamentais para navegar no site e utilizar as suas funcionalidades, como o acesso a áreas seguras. Sem eles, o site não funciona corretamente.
              </Text>
              <div className="mt-3 ml-8 flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-accent">
                Sempre Ativo <ChevronRight size={10} />
              </div>
            </div>

            {/* Analytical */}
            <div
              className={cn(
                "p-6 rounded-2xl border transition-all cursor-pointer group",
                localPrefs.analytical ? "border-accent/30 bg-accent/5 shadow-sm" : "border-border/60 bg-white/40 hover:border-accent/20"
              )}
              onClick={() => handleToggle('analytical')}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <BarChart3 className={cn("transition-colors", localPrefs.analytical ? "text-accent" : "text-primary/40")} size={20} />
                  <Text weight="bold" size="sm">Cookies Analíticos</Text>
                </div>
                <div className={cn(
                  "h-6 w-12 rounded-full transition-all flex items-center px-1",
                  localPrefs.analytical ? "bg-accent" : "bg-primary/10"
                )}>
                  <div className={cn(
                    "h-4 w-4 rounded-full bg-white shadow-sm transition-transform",
                    localPrefs.analytical ? "translate-x-6" : "translate-x-0"
                  )} />
                </div>
              </div>
              <Text size="xs" color="muted" className="leading-relaxed ml-8">
                Utilizamos estes cookies para compreender como as visitantes interagem com o nosso site (ex: quais as páginas mais visitadas), ajudando-nos a melhorar a sua experiência.
              </Text>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-border/40 bg-bg/50">
          <Button
            variant="primary"
            className="w-full h-14 text-sm font-bold bg-primary text-secondary hover:bg-accent hover:text-primary transition-all shadow-lg"
            radius="full"
            onClick={handleSave}
          >
            Guardar Preferências
          </Button>
        </div>
      </div>
    </div>
  )
}
