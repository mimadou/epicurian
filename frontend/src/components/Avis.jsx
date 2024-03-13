import React, { useEffect, useState } from 'react';
import axios from "axios";
import Article from './Article';


const Avis = () => {

    const [content , setContent] = useState("")
    const [author , setAuthor] = useState ("")
    const [notice , setNotice] = useState([])
    
    


        const getData =() =>{
            axios
            .get("http://localhost:3009/api/notice")
            .then((res) => setNotice(res.data))
            .catch(error => console.error('error fetching :', error))
           
            
        }

    

        useEffect(() => getData(), []);

    const handleSubmit =(e)=>{
    e.preventDefault();
    
        axios.post("http://localhost:3009/api/notice", {
            author,
            content,
            date : Date.now(),

            
        })
        .then((res)=> {
            setNotice([...notice, res.data]);
            setAuthor("");
            setContent("");
            getData();
        })
        .catch(error => console.error('error adding tast:', error));
       
    }


    return (
        <div className='noticeContainer'>
            <h2>Donnez votre avis </h2>
            <form action="" onSubmit={handleSubmit} className='formAvis'>
                <input 
                type="text"
                placeholder='Nom Prénom'
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                required
                
                />

                <textarea name=""
                id="" 
                cols="30" 
                rows="4"
                maxlength="120"
                placeholder='votre avis '
                onChange={(e) => setContent(e.target.value)}
                value={content}
                required
                
                >
                    
                </textarea>

                <input type="submit" value="soumettre" className='inputAvis'/>
            </form>
            <ul className='commentaire'>
               {notice
        
               .slice(0,4)
               .map(article =>(
                <Article key={article._id} article={article}/>
               ))
               }
               
                
              
            </ul>
        </div>
    );
};

export default Avis;