import React from 'react'
import { AiFillGithub, AiOutlineArrowUp } from 'react-icons/ai';

const Footer = () => {
  return (
		<footer>
			<div>
				<img
					src={
						"https://i.pinimg.com/236x/64/f5/01/64f501db467c44445285591ab8ca8512.jpg"
					}
					alt="Founder"
				/>
				<h2>Arun</h2>
				<p>The change you are looking for is in the work you are avoiding</p>
			</div>

			<aside>
				<h2>Social Media</h2>

				<article>
					<a href="https://github.com/ArunDoesCode" target={"blank"}>
						<AiFillGithub />
					</a>
				</article>
			</aside>
			<a href="#home">
				<AiOutlineArrowUp />
			</a>
		</footer>
	);
}

export default Footer