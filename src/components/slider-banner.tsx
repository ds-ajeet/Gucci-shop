import * as React from "react";
import HeroSlider, {Slide} from "hero-slider";
const image1 = "https://www.shutterstock.com/image-photo/ancient-temple-ruins-gadi-sagar-260nw-786126286.jpg";
const image2 ="https://www.shutterstock.com/image-photo/ancient-temple-ruins-gadi-sagar-260nw-786126286.jpg";
const image3 = "https://www.shutterstock.com/image-photo/ancient-temple-ruins-gadi-sagar-260nw-786126286.jpg";
const image4 = "https://www.shutterstock.com/image-photo/ancient-temple-ruins-gadi-sagar-260nw-786126286.jpg";

const App = () => {
	return (
		<HeroSlider
		slidingAnimetion="left_to_right"
		originates="horizontal"
		initialSlide={1}
		onBeforeChange={(previousSlide, nextSlide)=> console.log("onBeforeChange",previousSlide,nextSlide)}
		onChange = {nextChange => console.log("onChnage", nextSlide)}
		onAfterChange  = {nextChange => console.log("onAfterChange",nextSlide)}
		style = {{
			backgroundColor: "rgba(0,0,0,0.33)"
		}}
		setting = {{
			SlidingDuration:250,
			SlidingDelay: 100,
			shouldAutoplay: true,
			shouldDisplayButton: true,
			autoplayDuration:3000,
			height:"10px"
		}}
		>
			<Slide
			background = {{
				backgroundImage:"image1",
				backgroundAttecment:"fixed"
			}} />
			<Slide
			background = {{
				backgroundImage:"image2",
				backgroundAttecment:"fixed"
			}} />
			<Slide
			background = {{
				backgroundImage:"image3",
				backgroundAttecment:"fixed"
			}} />
			<Slide
			background = {{
				backgroundImage:"image4",
				backgroundAttecment:"fixed"
			}} />

			
		</HeroSlider>
	)

		
};
export default App;