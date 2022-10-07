#Meme Generator App

This fetches data of Meme Images from an API and renders them on the page when a button is clicked. 

The useEffect hook is employed to ensure that fetching the data from the API is done once as opposed to doing it each time the app rerenders.

Also event listeners are employed to gather data from the input fields on the page, this data is then saved in a state which allows us to render the data gathered from the different input fields on different sections of the meme (Top and bottom section)