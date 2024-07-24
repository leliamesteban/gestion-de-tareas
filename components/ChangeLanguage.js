import React from 'react'
import setLanguage from 'next-translate/setLanguage'
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import '../app/globals.css';

export default function ChangeLanguage() {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <div className="flow-root">
      <button onClick={() => router.push('/tasks')} className="float-left px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">{t('home')}</button>
      <button onClick={async () => await setLanguage('en')} className="float-right ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">EN</button>
      <button onClick={async () => await setLanguage('es')} className="float-right ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">ES</button>
    </div>
  )
}
