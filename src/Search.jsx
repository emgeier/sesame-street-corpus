import {listSSImageMetadata} from './graphql/queries.js';
import { useState, useEffect } from "react";
import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';

import './App.css'
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { signOut, signIn, signUp, getCurrentUser } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';

//save for later
//import { getUrl } from 'aws-amplify/storage';
//import Viewer from './Viewer'; // PNG viewer component
//import "./Search.css";

import {
    Button
    } from "@aws-amplify/ui-react";

Amplify.configure(config)

function Search() {
    // Client to connect with GraphQL
    const client = generateClient();
    async function currentAuthenticatedUser() {
        try{
            const {username, userId} = await getCurrentUser();
            console.log('The username: ${username}');
            console.log(`The userId: ${userId}`);
        } catch(err) {
            console.log(err);
        }
    }

    const [imageMetadataList, setImageMetadataList] = useState([]);
    const [imageMetadataListAlt, setImageMetadataListAlt] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [searchResults, setSearchResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    //for dev only
    useEffect(() => {
        console.log("fetching data");
        fetchMetadata();
        }, []);
        // const fetchMetadata = async () => {
        //     setLoading(true);
        //     try {
        //       const user = await getCurrentUser();
        //       console.log(user);
        //       const result = await client.graphql({
        //         query: listSSImageMetadata
        //       });
        //       setSearchResults(result.data.listSSImageMetadata.items);
        //     } catch (err) {
        //       setError(err);
        //     }
        //     setLoading(false);
        //   };
        
          useEffect(() => {
            fetchMetadata();
          }, []);
        
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error fetching data: {error.message}</div>;    
    
    // useEffect(() => {
    //     async function findImageMetadata() {
    //         console.log("getting metadata");
    //         const imageMetadataList = await listSSImageMetadata();
    //         //Filter out those restricted == true
    //         //const unrestrictedImageMetadata = imageMetadata.filter(image => image.restricted !== true);
    //         const imageMetadataCategory = imageMetadataList.filter(image => image.category.toLowerCase().includes(categoryRequest.toLowerCase()));
    //         console.log(imageMetadataList + "Image Metadata List");
    //         console.log(imageMetadataCategory + "Image Metadata List Category filter");

    //         setImageMetadataList(imageMetadataCategory);
    //     }

    //     findImageMetadata();
    // }, [])
    async function fetchMetadata() {
        try {
        const metaData = await client.graphql({ query: listSSImageMetadata, variables: variables });
        const images = metaData.data.listSSImageMetadata.items;
        setImageMetadataListAlt(images);
        } catch (err) {
        console.log('Error fetching metadata:', err);
        }
        }
        const variables = {
        filter: {
        restricted: {
        eq: false
        }
        }
        };
        const handleSearch = (category) => {
            const results = imageMetadataListAlt.filter(item =>
            item.category.toLowerCase().includes(category.toLowerCase()) 
            );
            setSearchResults(results);
            };        

    return (
        <div className="page-container">
            <div >
                <div className='input-container'>
                    <input type="text" placeholder="Category" onChange={(e) => handleSearch(e.target.value)}/>
                </div>
                <Button onClick={currentAuthenticatedUser}>currentAuthenticatedUser</Button>
                <ul>
 
                </ul> 
                
            </div>
        </div>
    )
}

export default Search;









// const handleSearch = (socialJusticeTerm, mathTerm, titleTerm) => {
// const results = lessonPlans.filter(item =>
// item.socialJusticeTopic.toLowerCase().includes(socialJusticeTerm.toLowerCase()) &&
// item.mathTopic.toLowerCase().includes(mathTerm.toLowerCase()) &&
// item.title.toLowerCase().includes(titleTerm.toLowerCase()) 
// );
// setSearchResults(results);
// };

// const handlePDFClick = async (fileKey) => {
// try {
// const viewableLink = await generateViewableLink(fileKey);
// setSelectedPDF(viewableLink);
// } catch (error) {
// console.log('Error generating viewable link:', error);
// }
// };

// async function generateViewableLink(fileKey) {
// try {
// console.log(fileKey);
// const getUrlResult = await getUrl({ key: fileKey });
// console.log('viewablelink',getUrlResult.url.href);
// return getUrlResult.url.href;
// } catch (error) {
// console.log('Error generating viewable link:', error);
// throw error;
// }
// }
//{selectedImage && <Viewer pdfUrl={selectedImage} />}


// {searchResults.map(item => (
//     <ul key={item.id} style={{ marginBottom: '10px' }}>
//         <Button onClick={() => handleSearchClick(item.id)}>
//             {item.category} : {item.attribute} 
//         </Button>
//     </ul>
//     ))}
