
import { useState, useEffect } from "react";
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { getUrl } from 'aws-amplify/storage';

import {listSSImageMetadata} from './graphql/queries.js';
import config from './amplifyconfiguration.json';

//save for later, dev
import { Button, Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import {fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
import { StorageImage } from '@aws-amplify/ui-react-storage';
//import "./Search.css";

//viewers
import { DefaultStorageImageExample } from './DefaultStorageExample.jsx';
import AnnotoriousViewer from "./AnnotoriusViewer.jsx";
//import Viewer from './Viewer'; // Photo previewer component


Amplify.configure(config)

function Search() {

   // Client to connect with GraphQL
    const client = generateClient({authMode: 'apiKey'});

    
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);  
    //dev
    const [identityId, setIdentityId] = useState(null);  
    const [userId, setUserId] = useState(null);  
    const [downloadLink, setDownloadLink] = useState(null);

    async function currentSession() {
        try {
            const session = (await fetchAuthSession()).tokens ?? {};
                setUserId(session.accessToken);
                console.log(session);
                
        } catch (err) {
                console.log(err);
            }
        }

    async function fetchMetadata(category) {

        if (!category) return; // Do not make API call if category is empty

        setLoading(true);
        setError(null);
        try {
            const variables = {
                filter: {
                restricted: { eq: false },
                category: { contains: category }
                }
            };

      const metaData = await client.graphql({ query: listSSImageMetadata, authMode: 'apiKey', variables: variables });
      const images = metaData.data.listSSImageMetadata.items;
      setSearchResults(images); 
    // Create list of URLs for all images for thumbnail preview
      
        } catch (err) {
      console.error('Error fetching metadata:', err);
      setError(err);
    }
        setLoading(false);
    }

  const handleSearch = (category) => {
    if (category.trim() === "") {
      setSearchResults([]); // Clear search results if input is empty
    } else {
      fetchMetadata(category); // Fetch data based on category
    }
  };

  const handleImageClick = async (id) => {
    
    const pathId = `${id}.png`;
    console.log(pathId);
    try {
        const getUrlResult = await getUrl({
            //needs identity pool id
           //  path: ({identityId}) => `protected/${identityId}/${id}.png`
            path: `${id}.png`,
            options: {
                validateObjectExistence: false,  // Check if object exists before creating a URL
                expiresIn: 20 ,
                useAccelerateEndpoint: false
            },
        
        });
      console.log('signed URL: ', getUrlResult.url);
      const link = getUrlResult.url.toString();
      setDownloadLink(link);
      //can use to make download link or link to file 
      setSelectedImage(getUrlResult.url.href);
      console.log(selectedImage);
      console.log(getUrlResult.url.href);

    } catch (err) {
      console.error('Error fetching image from S3:', err);
    }
  };

  return (
    <div className='search-box'>
      <div className="page-container">
        <div>
          <div className='separator'></div>
          <div className='input-container'>
            <input
              type="text"
              placeholder="Category"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          {loading && <p>Loading...</p>}
          {error && <p>Error fetching data: {error.message}</p>}
          <ul>
            {searchResults.map(item => (
              <li key={item.id} onClick={() => handleImageClick(item.id)}>
                <p>Category: {item.category}</p>
                <p>ID: {item.id}</p>
              </li>
            ))}
          </ul>
            <Button onClick={currentSession}>currentSession</Button>
            {selectedImage &&<ImageViewer imageUrl={selectedImage} />}
            
        </div>
        <a href={downloadLink} target="_blank" rel="noreferrer">Download</a>
        <div className='separator'></div>
        <a href={selectedImage} target="_blank" rel="noreferrer">View</a>
        <div className='separator'></div>
        <img src={selectedImage}/>
      </div>
    </div>
  );
}
function ImageViewer({ imageUrl}) {
    return (
      <div className='image-viewer'>
        <img src={imageUrl} alt="Large" style={{ width: '50%', height: 'auto' }} />
      </div>
    );
  }
export default Search;
