/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ReactPaginate from 'react-paginate';
import {useContext, useState, useEffect} from "react";
import { navigate } from "@reach/router";

const Andenside = () => {

const[posts, setPosts] = useState(null);
const [currentPage, setCurrentPage]= useState(0);
const postPerPage = 5;
const startPost = currentPage * postPerPage;
const pageCount = Math.ceil(posts?.length / postPerPage); 
const changePage = ({ selected }) => setCurrentPage (selected);


const displayPosts = posts?.slice (startPost, startPost + postPerPage).map ((post) => (    
    <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </article>
) )

//Data hentet fra context


/*const { userlog } = useContext(dataContext);

  
userlog && console.log (userlog); 

omosdata && console.log("from context:", omosdata);*/

  const sectionstyle=css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding:0.5rem;
  margin: 2rem 10%;
  font-weight:400;

  
 @media (max-width: 420px) {
    flex-direction:column;
    max-width:100%;
    padding:0.1rem;
  margin: 2rem 0;
      }

`;
  const articlestyle=css`
  
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: flex-start;
    margin: 0.1rem;

    
 @media (max-width: 420px) {


    h2{
      font-size:0.6rem;
    }
   p{
     font-size:  0.4rem;
   }
      }
    
  
  `;
  
  


  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts/")   

.then(response => response.json())
.then ((json ) => setPosts(json)); }, [setPosts]);

posts && console.log (posts)
    


  
    return ( posts && (
<>

<h2>Overskrift her   dette er  side {currentPage +1 }</h2>
{displayPosts}

<ReactPaginate   

previousLabel={"Forrige"}
nextLabel={"Næste"}
pageCount={pageCount}
onPageChange={changePage}

containerClassName={"paginateBttns"}
previousLinkClassName={"prevBttns"}
nextClassName={"nextBttn"}
nextLinkClassName={"nextLink"}
disabledClassName={"paginationDisabled"}
activeLinkClassName={"paginationActive"}
pageLinkClassName={"paginationPages"}
pageClassName={"allPages"}
pageRangeDisplayed={5}
marginPagesDisplayed={1}


/>

</>

    )

    )

}
 
export default Andenside;