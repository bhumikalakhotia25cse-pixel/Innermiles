# Google Maps API Setup Instructions

## Getting Started

To enable the interactive Google Maps functionality in your travel app, you need to set up a Google Maps API key.

### Step 1: Get a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API (optional, for enhanced features)
4. Go to "Credentials" and create a new API key
5. Restrict the API key to your domain for security

### Step 2: Configure Environment Variables

1. Create a `.env.local` file in your project root
2. Add your API key:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### Step 3: No Additional Dependencies Required

The Google Maps integration uses the direct API approach, so no additional npm packages are needed!

### Step 4: Features Included

The Google Maps integration includes:

- **Interactive Map**: Real Google Maps with zoom, pan, and satellite view
- **Location Markers**: Color-coded markers for different location types
- **Click Interactions**: Click markers to see detailed information
- **Location Details**: Complete information including:
  - Vegetarian food indicators
  - Transport options and pricing
  - Local tips and recommendations
  - Nearby restaurants
  - Instagram-worthy spots
- **Responsive Design**: Works on all screen sizes
- **Loading States**: Smooth loading experience

### Step 5: Location Data

The map includes 6 key locations across Mumbai, Goa, and Udaipur:

- **Mumbai**: Gateway of India, Crawford Market
- **Goa**: Baga Beach, Anjuna Flea Market  
- **Udaipur**: City Palace, Saheliyon Ki Bari

### Step 6: Customization

You can easily add more locations by updating the `locations` array in `components/google-maps.tsx`.

### Security Notes

- Never commit your API key to version control
- Use environment variables for API keys
- Restrict your API key to specific domains
- Monitor your API usage in the Google Cloud Console

### Troubleshooting

If the map doesn't load:
1. Check that your API key is correct
2. Ensure the Maps JavaScript API is enabled
3. Verify your domain restrictions
4. Check the browser console for errors

The map will show a loading state while initializing and fallback gracefully if there are any issues.
