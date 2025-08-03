interface TabManager {
  openTab: (name: string) => void;
  closeTab: (name: string) => void;
  switchTab: (name: string) => void;
  getActiveTab: () => string | null;
  getTabs: () => string[];
}

export function createTabManager(): TabManager {
  let tabs: string[] = [];
  let activeTab: string | null = null;

  const openTab = (name: string): void => {
    if (!tabs.includes(name)) {
      tabs.push(name);
    }
    activeTab = name;
  };

  const closeTab = (name: string): void => {
    const index: number = tabs.indexOf(name);
    if (index === -1) return;

    tabs.splice(index, 1);

    if (activeTab === name) {
      if (tabs.length === 0) {
        activeTab = null;
      } else if (index - 1 >= 0) {
        activeTab = tabs[index - 1];
      } else {
        activeTab = tabs[0];
      }
    }
  };

  const switchTab = (name: string): void => {
    if (tabs.includes(name)) {
      activeTab = name;
    }
  };

  const getActiveTab = (): string | null => {
    return activeTab;
  };

  const getTabs = (): string[] => {
    return [...tabs];
  };

  return {
    openTab,
    closeTab,
    switchTab,
    getActiveTab,
    getTabs,
  };
}
