const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const serviceAccount = require('./login-4dec7-firebase-adminsdk-7pi5n-df56c523c4.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://login-4dec7-default-rtdb.firebaseio.com"
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/sendPasswordResetEmail', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send({ message: 'Email is required.' });
  }
  try {
    const link = await admin.auth().generatePasswordResetLink(email);
    res.status(200).send({ message: 'A password reset link has been sent to your email.' });
  } catch (error) {
    console.error('Error generating password reset link:', error);
    res.status(500).send({ message: 'An error occurred while sending the reset link.', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
