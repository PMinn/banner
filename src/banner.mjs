export default (() => {
    const banner = `
     ____    __                           
    /\\  _\`\\ /\\ \\   /'\\_/\`\\  __            
    \\ \\ \\L\\ \\ \\/  /\\      \\/\\_\\    ___    
     \\ \\ ,__/\\/   \\ \\ \\__\\ \\/\\ \\ /' _ \`\\  
      \\ \\ \\/       \\ \\ \\_/\\ \\ \\ \\/\\ \\/\\ \\ 
       \\ \\_\\        \\ \\_\\\\ \\_\\ \\_\\ \\_\\ \\_\\
        \\/_/         \\/_/ \\/_/\\/_/\\/_/\\/_/
                                          
                                          `;
    if (typeof global !== 'undefined') { // nodejs
        console.log(banner);
    } else if (typeof window !== 'undefined') { // js
        console.log(`%c ${banner}`, 'color: #164ba1');
    }
})();