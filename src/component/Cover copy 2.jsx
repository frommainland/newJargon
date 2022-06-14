import React, { useEffect } from 'react'

import './Cover.scss'

const Bird = ({ index }) => {
	//set a random number between 1 and 6 with useEffect
	// const [random, setRandom] = React.useState(
	// 	Math.floor(Math.random() * 6) + 1
	// )

	const [random, setRandom] = React.useState('')

	useEffect(() => {
		setRandom(Math.floor(Math.random() * 6) + 1)
	}, [])

	const style =
		random == 1
			? 'circle'
			: random == 2
			? 'square'
			: random == 3
			? 'top-half'
			: random == 4
			? 'bottom-half'
			: random == 5
			? 'left-half'
			: 'right-half'
	return (
		<div
			className={`bird ${style}`}
			style={{
				backgroundImage: `url(require('/image/bird-left1.jpg'))`,
			}}></div>
	)
}

const Cover = () => {
	// create array start with 1 and end with 6
	const bird = Array.from(Array(6).keys()).map((i) => i + 1)
	const scrollNum = [0, 1]

	return (
		<div className="cover-wrap">
			<div className="bird-wrap">
				<div className="container">
					{scrollNum.map((item, index) => {
						return (
							<div className="scrolling" key={`scroll ${index}`}>
								{bird.map((item, index) => {
									return <Bird key={index} />
								})}
							</div>
						)
					})}
					{/* <div className="scrolling">
						{bird.map((item, index) => {
							return <Bird key={index} />
						})}
					</div>
					<div className="scrolling">
						{bird.map((item, index) => {
							return <Bird key={index} />
						})}
					</div> */}
				</div>
			</div>
			<div className="text">
				<div className="text-position">
					<h3>2022</h3>
					<h1>互联网词语再学习</h1>
					<p>互联网‌‌‌‌‌‌‌‌打工人必学语言职场写作的保护色。</p>
					<p>
						简单来说，就是把
						¹简单的概念复杂化，²多个短语缩写化，以及
						³英文本地化，让打工生活充满阳光。
					</p>
				</div>
			</div>
		</div>
	)
}

export default Cover
