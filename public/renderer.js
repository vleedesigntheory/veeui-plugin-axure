window.electronAPI.onUpdateIsAxure(value => {
    window.isAxure = value;
    console.log('window.isAxure', window.isAxure);
    window.electronAPI.isAxureValue(window.isAxure)
})
