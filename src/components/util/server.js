const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

// Serve static files from the 'client/build' directory
app.use(express.static(path.join(__dirname, 'client/build')));

// API endpoint
app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5', {
      params: {
        lat: 12.9715987,
        lng: 77.5945627,
        'is-seo-homepage-enabled': true,
        page_type: 'DESKTOP_WEB_LISTING'
      }
    });

    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve the React app for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
