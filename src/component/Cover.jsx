import React, { useEffect, useState, useRef } from 'react'

import './Cover.scss'

const Bird = ({ pick, index, birdFaceDirection }) => {
	const style =
		pick == 1
			? 'circle'
			: pick == 2
			? 'square'
			: pick == 3
			? 'top-half'
			: pick == 4
			? 'bottom-half'
			: pick == 5
			? 'left-half'
			: 'right-half'
	const direction = birdFaceDirection == 'left' ? 'left' : 'right'

	return (
		<div
			className={`bird ${style}`}
			style={{
				backgroundImage: `url(/image/bird-${direction}${index}.jpg)`,
			}}></div>
	)
}

const BirdProfile1 = ({ birdFaceDirection }) => {
	return (
		<div className="scrolling">
			<Bird
				key={1}
				pick={1}
				index={1}
				birdFaceDirection={birdFaceDirection}
			/>
			<Bird
				key={2}
				pick={4}
				index={2}
				birdFaceDirection={birdFaceDirection}
			/>
			<Bird
				key={3}
				pick={3}
				index={3}
				birdFaceDirection={birdFaceDirection}
			/>
			<Bird
				key={4}
				pick={2}
				index={4}
				birdFaceDirection={birdFaceDirection}
			/>
			<Bird
				key={5}
				pick={5}
				index={5}
				birdFaceDirection={birdFaceDirection}
			/>
			<Bird
				key={6}
				pick={6}
				index={6}
				birdFaceDirection={birdFaceDirection}
			/>
		</div>
	)
}

const BirdProfile2 = ({ birdFaceDirection }) => {
	return (
		<div className="scrolling2">
			<Bird key={1} pick={2} index={1} />
			<Bird key={2} pick={3} index={2} />
			<Bird key={3} pick={5} index={3} />
			<Bird key={4} pick={6} index={4} />
			<Bird key={5} pick={2} index={5} />
			<Bird key={6} pick={4} index={6} />
		</div>
	)
}

const Cover = () => {
	// create array start with 1 and end with 6
	const bird = Array.from(Array(6).keys()).map((i) => i + 1)
	const scrollNum = [0, 1]

	//get 'bird-wrap' height
	const [height, setHeight] = useState(0)
	const ref = useRef(null)

	useEffect(() => {
		setHeight(ref.current.clientHeight)
	})

	useEffect(() => {
		const updateHeight = () => {
			setHeight(ref.current.clientHeight)
		}
		window.addEventListener('resize', updateHeight)
		updateHeight()
		return () => window.removeEventListener('resize', updateHeight)
	}, [])

	return (
		<div className="cover-wrap">
			<div className="bird-wrap" ref={ref}>
				<div className="container">
					<BirdProfile1 birdFaceDirection="left" />
					<BirdProfile1 birdFaceDirection="left" />
				</div>
				<div className="container">
					<BirdProfile2 birdFaceDirection="right" />
					<BirdProfile2 birdFaceDirection="right" />
				</div>
			</div>
			<div
				className="text"
				style={{
					height: `calc(100% - ${height}px - 32px)`,
				}}>
				<div className="text-position">
					<h3>2022</h3>
					<h1>????????????????????????</h1>
					<p>?????????????????????????????????????????????????????????????????????????????????</p>
					<p>
						??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
					</p>
				</div>
			</div>
		</div>
	)
}

export default Cover
