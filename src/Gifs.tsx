import {Gif} from '@remotion/gif';
import React from 'react';
import {AbsoluteFill} from 'remotion';

export const Gifs: React.FC = () => {
	return (
		<AbsoluteFill
			className="bg-gray-50"
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1
				className="text-6xl font-bold"
				style={{
					textAlign: 'center',
				}}
			>
				{"3 <Gif>'s rendered into a GIF!"}
			</h1>
			<div
				style={{
					height: 20,
				}}
			/>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<Gif
					fit="contain"
					style={{
						height: 250,
						width: 300,
					}}
					src="https://c.tenor.com/pCcL8OOdEBUAAAAC/gifs-away-gif.gif"
				/>
				<Gif
					fit="contain"
					style={{
						height: 250,
					}}
					src="https://c.tenor.com/oylHwLtwhbsAAAAC/gif-jif.gif"
				/>
				<Gif
					fit="contain"
					style={{
						height: 250,
					}}
					src="https://c.tenor.com/cG-lSIulFEUAAAAC/amy-poehler-high-five.gif"
				/>
			</div>
		</AbsoluteFill>
	);
};
