import { tts } from 'edge-tts';
import express from 'express';
const app = express();

app.get('/generate', (req, res) => {
	const { text } = req.query;
	tts(text as string, {
		voice: 'en-US-Wavenet-D',
	}).then((audio) => {
		res.send(audio);
	});
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});