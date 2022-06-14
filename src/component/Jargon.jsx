import './Jargon.scss'
import { useEffect, useState } from 'react'
import {
	motion,
	AnimatePresence,
	LayoutGroup,
	useTransform,
	useViewportScroll,
	useMotionTemplate,
} from 'framer-motion'

import useScrollPosition from '../hook/useScrollPosition'
import { smooth } from '../helper/easing'

import data from '../data/data'

const Example = (props) => {
	return (
		<motion.div variants={props.variants}>
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
		<motion.div variants={props.variants}>
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
		// duration: isOpen ? 1 : 0.35,
		duration: 1,
		ease: smooth,
	}

	// const rotateX = useTransform(scrollYProgress, [0, -0.5], [-12, 12])
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
					transition={{
						layout: listAnimation,
					}}
					layout
					onClick={() => {
						setIsOpen(true)
						props.h1Clicked(true)
						props.getIndex(props.index)
					}}>
					{props.data.name}
				</motion.h1>
				<motion.div
					transition={{
						layout: listAnimation,
					}}
					layout
					className="close-button"
					whileHover={{ backgroundColor: '#EDEDEB' }}
					onClick={() => {
						setIsOpen(false)
						props.h1Clicked(false)
					}}></motion.div>
			</div>
			<AnimatePresence>
				{isOpen && <Content textData={props.data} />}
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
				duration: 0.5,
				ease: smooth,
			},
		},
	}

	return (
		<motion.div
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

	//h1“沟对”文字的高度
	const h1Height = 144
	//一共多少个h1
	const num_lists = items.length

	const [clicked, setClicked] = useState(false)
	const [index, setIndex] = useState(0)

	const { scrollY, scrollYProgress } = useViewportScroll()
	const bgColor = useTransform(
		scrollYProgress,
		[0, -0.25, -0.5],
		[bgOrange, bgYellow, bgBlue]
	)

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
							/>
						)
					})}
				</motion.ul>
			</LayoutGroup>
		</motion.div>
	)
}

export default Jargon
