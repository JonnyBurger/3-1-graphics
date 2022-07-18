import {Composition} from 'remotion';
import {ThreeOne} from './3-1';
import {Gifs} from './Gifs';
import {SpringsWithDuration} from './SpringsWithDuration';
import './style.css';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Gifs"
				component={Gifs}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
			/>
			<Composition
				id="Springs"
				component={SpringsWithDuration}
				durationInFrames={170}
				fps={30}
				width={720}
				height={720}
			/>
			<Composition
				id="ThreeOne"
				component={ThreeOne}
				durationInFrames={170}
				fps={30}
				width={1080}
				height={1080}
			/>
		</>
	);
};
