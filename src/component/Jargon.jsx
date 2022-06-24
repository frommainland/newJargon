import './Jargon.scss'
import { useState, useRef, useEffect } from 'react'
import {
	motion,
	AnimatePresence,
	LayoutGroup,
	useTransform,
	useViewportScroll,
	useMotionTemplate,
	useElementScroll,
} from 'framer-motion'

import useScrollPosition from '../hook/useScrollPosition'
import { smooth } from '../helper/easing'

import data from '../data/data'

const Example = (props) => {
	return (
		<motion.div variants={props.variants} className="example">
			<h3 className="content-subheader">例句</h3>
			<hr />
			<p className="content-text">{props.text}</p>
		</motion.div>
	)
}

const Explaination = (props) => {
	return (
		<motion.div variants={props.variants}>
			<h3 className="content-subheader">解释</h3>
			<hr />
			<p className="content-text">{props.text}</p>
		</motion.div>
	)
}

const Origin = (props) => {
	return (
		<motion.div variants={props.variants} className="origin">
			<h3 className="content-subheader">来源</h3>
			<hr />
			<p className="content-text">{props.text}</p>
		</motion.div>
	)
}

const Ranking = (props) => {
	const circleNum = [0, 1, 2, 3, 4]
	return (
		<motion.div className="ranking-wrap" variants={props.variants}>
			<div className="ranking-item">
				<h3 className="content-subheader">沟通意义</h3>
				{circleNum.map((item, index) => {
					return (
						<div
							className={`circle ${
								props.comm > index ? `solid` : ``
							}`}
							key={index}></div>
					)
				})}
			</div>
			<div className="ranking-item">
				<h3 className="content-subheader">易于理解</h3>
				{circleNum.map((item, index) => {
					return (
						<div
							className={`circle ${
								props.understand > index ? `solid` : ``
							}`}
							key={index}></div>
					)
				})}
			</div>
			<div className="ranking-item">
				<h3 className="content-subheader">喜爱度</h3>
				{circleNum.map((item, index) => {
					return (
						<div
							className={`circle ${
								props.likeable > index ? `solid` : ``
							}`}
							key={index}></div>
					)
				})}
			</div>
		</motion.div>
	)
}

const Source = (props) => {
	return (
		<motion.div variants={props.variants} className="source-wrap">
			<img src={require(`../image/${props.profile}.jpg`)} alt="profile" />
			<span>{props.text}</span>
		</motion.div>
	)
}

////////////////////////////////////////////////////////////////////////////////////////////
// const listAnimation = {
// 	duration: isOpen ? 1 : 0.35,
// 	ease: smooth,
// }

// get data length from data to generate ul list
const items = [...Array(data.length).keys()]

const Item = (props) => {
	const { scrollYProgress } = useViewportScroll()
	const [isOpen, setIsOpen] = useState(false)

	const listAnimation = {
		duration: 1,
		ease: smooth,
	}

	//get h1 height
	const [height, setHeight] = useState(0)
	const ref = useRef(null)

	useEffect(() => {
		const updateHeight = () => {
			setHeight(ref.current.clientHeight)
		}
		window.addEventListener('resize', updateHeight)
		updateHeight()
		return () => window.removeEventListener('resize', updateHeight)
	}, [])

	return (
		<motion.li
			layout
			transition={{
				layout: listAnimation,
			}}
			style={{
				rotateX: isOpen ? 0 : -12,
				zIndex: isOpen ? 100 : props.index,
				width: isOpen ? '100%' : '90%',
				borderRadius: isOpen ? '0px' : '10px',
				backgroundImage: !isOpen
					? `linear-gradient(
					to bottom,
					#f8f7f5,
					#f3f3f1,
					#efefed,
					#eaeae9,
					#e6e6e5
				)`
					: `linear-gradient(to bottom, #f8f7f5, #f8f7f5, #f8f7f5, #f8f7f5, #f8f7f5)`,
			}}>
			<div className="top-nav">
				<motion.h1
					ref={ref}
					transition={{
						layout: listAnimation,
					}}
					layout
					onClick={() => {
						setIsOpen(true)
						props.h1Clicked(true)
						props.getIndex(props.index)
						props.seth1Height(height)
					}}>
					{props.data.name}
				</motion.h1>
				<motion.div
					transition={{
						layout: listAnimation,
						delay: isOpen ? 0.2 : 0,
					}}
					initial={{ opacity: 0 }}
					animate={{ opacity: isOpen ? 1 : 0 }}
					layout
					className="close-button"
					whileHover={{
						backgroundColor: '#EDEDEB',
						width: 90,
						height: 90,
					}}
					onClick={() => {
						setIsOpen(false)
						props.h1Clicked(false)
					}}>
					<motion.svg
						layout
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={24}>
						<motion.path
							d="M18 6 6 18M6 6l12 12"
							stroke="#86868B"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
							whileHover={{
								stroke: '#86868B',
							}}
						/>
					</motion.svg>
				</motion.div>
			</div>
			<AnimatePresence>
				{isOpen && (
					<Content
						textData={props.data}
						key={props.index}
						h1Height={height}
					/>
				)}
			</AnimatePresence>
		</motion.li>
	)
}

const Content = (props) => {
	const container = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.2,
				delay: 0.2,
			},
		},
		exit: {
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
	}

	const item = {
		hidden: {
			opacity: 0,
			y: 300,
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				ease: smooth,
				duration: 1,
			},
		},
		exit: {
			opacity: 0,
			y: 300,
			transition: {
				duration: 0.35,
				ease: smooth,
			},
		},
	}

	return (
		<motion.div
			style={{
				height: 'calc(100vh - ' + props.h1Height + 'px)',
			}}
			layout
			className="content-wrap"
			variants={container}
			initial="hidden"
			animate="show"
			exit="exit">
			<Example
				variants={item}
				key="Example"
				text={props.textData.scenario}
			/>
			<Explaination
				variants={item}
				key="Explaination"
				text={props.textData.meaning}
			/>
			<Origin variants={item} key="Origin" text={props.textData.origin} />

			{props.textData.hasSource && (
				<Source
					variants={item}
					key="Source"
					text={props.textData.source}
					profile={props.textData.sourceProfile}
				/>
			)}

			<Ranking
				comm={props.textData.rankingCommunication}
				understand={props.textData.rankingUnderstanding}
				likeable={props.textData.rankingLikeable}
				variants={item}
				key="Ranking"
			/>
		</motion.div>
	)
}

const Jargon = () => {
	const scrollPosition = useScrollPosition()

	const bgOrange = `hsla(16,61%,56%,1)`
	const bgYellow = `hsla(34,60%,39%,1)`
	const bgBlue = `hsla(207,40%,30%,1)`
	const bgGreen = `hsla(140,60%,40%,1)`

	//一共多少个h1
	const num_lists = items.length
	//h1“沟对”文字的高度
	const [h1Height, seth1Height] = useState(0)

	const [clicked, setClicked] = useState(false)
	const [index, setIndex] = useState(0)

	const { scrollY, scrollYProgress } = useViewportScroll()
	const bgColor = useTransform(
		scrollYProgress,
		[0, -0.5, -0.9, -1.5],
		[bgOrange, bgYellow, bgBlue, bgGreen],
		{ clamp: false }
	)

	console.log(scrollYProgress.current)

	// const perspective = useTransform(scrollYProgress, [0, -0.4], [800, 2000])
	const origin = useTransform(scrollYProgress, [0, -0.9], [50, 100])
	const originTemp = useMotionTemplate`50% ${origin}%`

	return (
		<motion.div
			className="jargon-wrap"
			style={{ backgroundColor: bgColor }}>
			<div className="border" />
			<LayoutGroup>
				<motion.ul
					style={{
						perspective: 1000,
						perspectiveOrigin: originTemp,
					}}
					animate={{
						y: clicked ? index * h1Height * -1 + scrollPosition : 0,
					}}
					transition={
						clicked
							? { duration: 1, ease: smooth }
							: { duration: 0.35, ease: smooth }
					}>
					{items.map((item, index) => {
						return (
							<Item
								key={item}
								index={index}
								// h1Clicked={(clicked) => setClicked(clicked)}
								h1Clicked={setClicked}
								getIndex={setIndex}
								data={data[index]}
								seth1Height={seth1Height}
							/>
						)
					})}
				</motion.ul>
			</LayoutGroup>
		</motion.div>
	)
}

export default Jargon
