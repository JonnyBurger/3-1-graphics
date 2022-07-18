import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import React from 'react';
import {AbsoluteFill} from 'remotion';

export const SpringsWithDuration: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const springs = new Array(7)
		.fill(true)
		.map((x, _) => {
			return _;
		})
		.map((a) => {
			const durationInFrames = (a + 1) * 15 + 1 * 30;
			return {
				durationInFrames,
				anim: spring({
					fps,
					frame,
					config: {
						damping: 30,
					},
					durationInFrames,
				}),
			};
		});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#18191a',
				justifyContent: 'center',
				padding: 100,
			}}
		>
			{springs.map((s) => {
				return (
					<div
						style={{
							height: 80,
							backgroundColor: '#0B84F3',
							borderRadius: 80 / 2,
							minWidth: 80,
							width: s.anim * 100 + '%',
							marginTop: 10,
							marginBottom: 10,
							display: 'inline-flex',
							alignItems: 'center',
							paddingLeft: 20,
							fontWeight: 'bold',
							fontSize: 24,
						}}
					>
						<div
							style={{
								color: 'white',
								opacity: interpolate(
									frame,
									[s.durationInFrames * 0.65, s.durationInFrames * 0.65 + 10],
									[0, 1],
									{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
								),
							}}
						>
							{(s.durationInFrames / fps).toFixed(1)}sec
						</div>
					</div>
				);
			})}
		</AbsoluteFill>
	);
};
