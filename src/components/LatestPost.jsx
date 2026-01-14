import React  from 'react'
import { useEffect, useState } from "react"

function LatestPost({post }) {
  let [post, setPost] = useState()

  useEffect(() => {
    async function getPosts(){
        try {
            let res = await fetch(
              "https://jsonplaceholder.typicode.com/todos/1",
            );

            if(!res.ok){
                throw new Error ('hatolik')
            }

            let data = res.json()
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    getPosts()
  }, [])
}


export default LatestPost
