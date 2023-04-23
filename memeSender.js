const {Client,LocalAuth,MessageMedia} = require('whatsapp-web.js')
const qrCode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer:  {executablePath:"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"}
    
})
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f910172880mshc445b1e925d5466p197cc4jsncc99e08c252a',
		'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
	}
};

client.on('qr', qr =>{
    qrCode.generate(qr);
})

client.on('ready', ()=>{
    console.log('ready hu mai')
})

client.on('message', (msg)=>{
    
})

    client.on('message', async (msg)=>{
        if(msg.body = '!send meme')
        {
            fetch('https://programming-memes-images.p.rapidapi.com/v1/memes', options)
            .then(response => response.json())
            .then(async data => {
                const media = await MessageMedia.fromUrl(data[1].image);
                client.sendMessage(msg.from, media);
            })
            .catch(err=>console.error(err))

        }
    })
    
client.initialize();