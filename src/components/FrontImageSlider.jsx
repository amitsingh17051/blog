
import { createEffect, createSignal } from "solid-js";
import '../styles.css';


export default function FrontImageslider(props) {
    const [currentSlide, setCurrentSlider] = createSignal(0);
    const [currentSlideMove, setCurrentSlideMove] = createSignal('right');

    const postsLength = props.posts.length - 1;



    setInterval(() => {
        currentSlide() == postsLength ? setCurrentSlider(0) : setCurrentSlider(currentSlide() + 1)
    }, 10000);
   
    return (
        <>
            <div class="front-post-slider">
                {props.posts.map((post, index) => {
                    return (
                    <div class={`slider  ${currentSlide() == index ? `active ${currentSlideMove()}` : ''} `}>
                        <div class="row">
                            <div class="col-md-6">
                                <h1>{post.frontmatter.title}</h1>
                                <p>I've spoken about modern CSS. I write regularly about Front-End And Back-End on my own blog....<a href={`posts/${post.frontmatter.slug}`}>read now</a></p> 
                                
                            </div>
                            <div class="col-md-6">
                                <img width="100%" src="https://cdn.pixabay.com/photo/2014/12/30/13/44/programming-583923_960_720.jpg" alt="" />
                            </div>
                        </div>	
                    </div>
                    );
                })}

            
            </div>
            <div class="front-slider-controller mt5">
                <a href="#" onClick={() => {
                    currentSlide() == 0 ?  setCurrentSlider(2) : setCurrentSlider(currentSlide() - 1);
                    setCurrentSlideMove('left');
                    }
                }><i class="fa-solid fa-angle-left"></i></a>
                <a href="#" onClick={() => {
                    currentSlide() == postsLength ? setCurrentSlider(0) : setCurrentSlider(currentSlide() + 1);
                    setCurrentSlideMove('right')
                    } }><i class="fa-solid fa-angle-right"></i></a>
            </div>    
          
        </>
    );
}
