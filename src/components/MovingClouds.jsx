import React, { useEffect } from "react";

const MovingClouds = () => {
	useEffect(() => {
		// Here lies the poping clouds
		let clouds = [];
		// Setup canvas
		const canvas = document.querySelector(".moving-clouds");
		const canvasWidth = canvas.width;
		const canvasHeight = canvas.height;
		// Get context
		const context = canvas.getContext("2d");
		// Setup cloud image
		const imageWidth = 100;
		const imageHeight = 61;
		const image = new Image();
		image.src = "/assets/cloud.png";

		// Generates integer random numbers
		const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
		// Draws an image
		const draw = (x, y) => context.drawImage(image, x, y);
		// Moves a cloud to its speed
		const moveCloud = (n) => {
			clouds[n].x += clouds[n].speed;
		};
		// Draws and moves a cloud
		const updateCloud = (n) => {
			if(n >= 0 && n < clouds.length && clouds[n]) {
				draw(clouds[n].x, clouds[n].y);
				moveCloud(n);
			}
		};
		// Creates a new cloud
		const createCloud = (altitude) => ({
			x: (-1) * imageWidth,
			y: altitude,
			speed: random(10, 30) / 10
		});
		// Generates new clouds
		const generateClouds = () => {
			const altitude = random(0, 3) * imageHeight;
			for(let i = 0; i < clouds.length; i++) {
				// Do not generate clouds at same altitude
				if(altitude === clouds[i].y)
					return;
			}
			clouds.push(createCloud(altitude));
		};
		// Draws and runs all clouds
		const runClouds = () => {
			for(let i = 0; i < clouds.length; i++)
				if(clouds[i])
					updateCloud(i);
		};
		// When clouds runs out of the screen, remove them
		const removeFinishedClouds = () => {
			let updatedClouds = [];
			for(let i = 0; i < clouds.length; i++)
				if(clouds[i].x < canvasWidth)
					updatedClouds.push(clouds[i]);
			clouds = [...updatedClouds];
		};
		// Loops constantly to run the animation
		const loop = () => {
			context.clearRect(0, 0, canvasWidth, canvasHeight);
			generateClouds(true);
			runClouds();
			removeFinishedClouds();
			window.requestAnimationFrame(loop);
		};
		// When cloud image is loaded, run the loop
		image.onload = () => window.requestAnimationFrame(loop);
	}, []);
	return (
		<canvas className="moving-clouds" width="318" height="267"></canvas>
	);
};

export default MovingClouds;
