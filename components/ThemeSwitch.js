import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeSwitch = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-6 h-6 text-yellow-400 "
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-6 h-6 text-gray-800 "
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return <>{renderThemeSwitch()}</>;
};

export default ThemeSwitch;
