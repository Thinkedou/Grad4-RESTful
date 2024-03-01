import express from 'express';
const router = express.Router();

router.get('/publish',(req,res)=>{
    console.log('Client connected')
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Access-Control-Allow-Origin', '*')
  
    const intervalId = setInterval(() => {
      const date = new Date().toLocaleString()
      res.write(`data: ${date}\n\n`)
    }, 3000)
  
    res.on('close', () => {
      console.log('Client closed connection')
      clearInterval(intervalId)
      res.end()
    })
});


export default router;