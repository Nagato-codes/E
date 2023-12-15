document.getElementById('revealButton').addEventListener('click', async () => {
    try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        const ipAddress = data.ip;
        document.getElementById('ipDisplay').innerText = `YOUR IP ADDRESS IS: ${ipAddress} HAHA\nAND NOW IT HAS SENT ME AN EMAIL CONTAINING YOUR IP ADRESS HAHA`;
    } catch (error) {
        document.getElementById('ipDisplay').innerText = error;
    }
});