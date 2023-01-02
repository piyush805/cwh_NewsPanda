// News Item component to render each news card using props from News component, shows default image with none available, shortens title and description of news to ensure card sizes; badge source news source
import React from 'react'

const About = (props) => {
    props.setProgress(10);
    props.setProgress(100);
    return (
        <>
            <div className='container' style={{ 'margin': '100px' }}>
                <h2 >
                    About us
                </h2>
                <p className='mt-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi, commodi placeat aspernatur fugiat nesciunt fuga asperiores, laboriosam perspiciatis dignissimos quibusdam, repudiandae minus earum deleniti quia et libero! Cumque itaque amet deleniti ipsa pariatur architecto, quos non commodi obcaecati ipsam facere dolores illo vero totam fugiat enim ab porro libero?
                </p>
                <p className='mt-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quisquam repellendus pariatur quae soluta eligendi perferendis corporis debitis. Libero laudantium ex voluptatibus necessitatibus repellat hic harum deleniti consectetur voluptatum aperiam ab sequi at quam maxime, eos aliquam magni distinctio! A facere reprehenderit mollitia, quidem aliquam fugit vitae accusantium, placeat soluta ducimus vero cumque eius reiciendis fugiat. Fugit nemo error vitae minima debitis explicabo a laborum quas quasi dolores quaerat commodi quo impedit est officia facere maxime laudantium repudiandae, voluptas eveniet! Ipsa, aspernatur. Commodi quidem voluptate ipsum accusamus officiis, animi odio, perspiciatis accusantium ab deserunt, repellat eius nesciunt id facilis magnam!
                </p>
            </div>

        </>
    )
    // }
}

export default About
