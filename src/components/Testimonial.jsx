import React from 'react'

const Testimonial = () => {
  return (
		<div id="testtimonial">
			<h2>Testimonials</h2>
			<section>
				<TestimonialCard name={"Jeff Bezos"} feedback={"Amazing communication skills"} />
				<TestimonialCard name={"Bill Gates"} feedback={"Great problem solver"} />
				<TestimonialCard name={"Elon Musk"} feedback={"Best Webdeveloper ever"} />
			</section>
		</div>
	);
}

const TestimonialCard =({name, feedback})=>(
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User"/>
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)
export default Testimonial;