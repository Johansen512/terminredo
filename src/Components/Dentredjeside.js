/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const Dentredjeside = () => {

const style= css`
display: grid;
grid-template-columns:repeat( auto-fit, minmax(400px, 1fr) );
width: 100%;
height: 100%;

`;

const singleBoxStyle=css`

padding: 0.5rem;
overflow:hidden;
margin: 0.5rem;
`;
const imgStyle=css`


object-fit:cover;
overflow:hidden;

width: 100%;
height: 100%;
    

`;

    return ( 
    
    <>
    
    <h2>Den Tredje Side</h2> 
        <section css={style}>
        
        <div css={singleBoxStyle}>

            <h3>Testbox 0</h3>
            <p>Her er alt text</p>
            <img css={imgStyle} src="../img/Kirsten_hest3.jpg" alt="hest" />
 </div>

 <div css={singleBoxStyle}>

<h3>Testbox 1</h3>
<p>Her er alt text</p>
<img css={imgStyle} src="../img/122.jpg" alt="hest" />
</div>
<div css={singleBoxStyle}>

<h3>Testbox 2</h3>
<p>Her er alt text</p>
<img css={imgStyle} src="../img/408.jpg" alt="hest" />
</div>
<div css={singleBoxStyle}>

<h3>Testbox 3</h3>
<p>Her er alt text</p>
<img css={imgStyle} src="../img/Kirsten_kat1.jpg" alt="hest" />
</div>
<div css={singleBoxStyle}>

<h3>Testbox 4</h3>
<p>Her er alt text</p>
<img src="../img/123.jpg" alt="hest" />
</div>
<div css={singleBoxStyle}>

<h3>Testbox 5</h3>
<p>Her er alt text</p>
<img css={imgStyle} src="../img/409.jpg" alt="hest" />
</div>
<div css={singleBoxStyle}>

<h3>Testbox 6</h3>
<p>Her er alt text</p>
<img css={imgStyle} src="../img/Stina_Monty1.jpg" alt="hest" />
</div>
<div css={singleBoxStyle}>

<h3>Testbox 7</h3>
<p>Her er alt text</p>
<img css={imgStyle} src="../img/122.jpg" alt="hest" />
</div>
<div css={singleBoxStyle}>

<h3>Testbox 8</h3>
<p>Her er alt text</p>
<img css={imgStyle} src="../img/306.jpg" alt="hest" />
</div>

<div css={singleBoxStyle}>

<h3>Testbox 9</h3>
<p>Her er alt text</p>
<img css={imgStyle} src="../img/409.jpg" alt="hest" />
</div>

<div css={singleBoxStyle}>

<h3>Testbox 10</h3>
<p>Her er alt text</p>
<img css={imgStyle} src="../img/Torben_Q1.jpg" alt="hest" />
</div>
</section>
        </>
        );
}
 
export default Dentredjeside;