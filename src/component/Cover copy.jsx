import React from 'react'
import './Cover.scss'

const Cover = () => {
	return (
		<div className="cover-wrap">
			<img
				src={require('../image/Male-brook-trout.jpg')}
				alt="Male brook trout"
			/>
			<div className="text">
				<div className="text-position">
					<h1>互联网词语再学习</h1>
					<p>
						互联网‌‌‌‌‌‌‌‌打工人必学语言职场写作的保护色。简单来说，就是把简单的概念复杂化，多个短语缩写化，以及英文本地化，让打工生活充满阳光。
					</p>
					<figcaption>
						Male brook trout (Salvelinus Fontinalis)
					</figcaption>
					<figcaption className="light">
						by Sherman F. Denton (1856-1937)
					</figcaption>
				</div>
			</div>
		</div>
	)
}

export default Cover
