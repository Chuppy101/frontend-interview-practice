import { createTabManager } from '../../algorithms/03-08-2025/tab-manager';

describe('Tab Manager', () => {
  it('should open tabs and return correct list', () => {
    const manager = createTabManager();
    manager.openTab('Home');
    manager.openTab('Profile');
    expect(manager.getTabs()).toEqual(['Home', 'Profile']);
  });

  it('should not duplicate tabs', () => {
    const manager = createTabManager();
    manager.openTab('Home');
    manager.openTab('Home');
    expect(manager.getTabs()).toEqual(['Home']);
  });

  it('should switch active tab', () => {
    const manager = createTabManager();
    manager.openTab('Home');
    manager.openTab('Profile');
    manager.switchTab('Profile');
    expect(manager.getActiveTab()).toBe('Profile');
  });

  it('should return null if no tabs are open', () => {
    const manager = createTabManager();
    expect(manager.getActiveTab()).toBe(null);
  });

  it('should handle closing the last tab', () => {
    const manager = createTabManager();
    manager.openTab('Home');
    manager.closeTab('Home');
    expect(manager.getTabs()).toEqual([]);
    expect(manager.getActiveTab()).toBe(null);
  });

  it('should ignore switching to a non-existent tab', () => {
    const manager = createTabManager();
    manager.openTab('Home');
    manager.switchTab('Settings'); // does not exist
    expect(manager.getActiveTab()).toBe('Home');
  });
});
