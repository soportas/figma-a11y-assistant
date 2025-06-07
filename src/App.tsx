import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Icon from './components/Icon'
import Input from './components/Input'
import Button from './components/Button'
import WcagTree from './components/WcagTree'
import FilterTags from './components/FilterTags'
import { wcagData, type FilterTag } from './wcag-data'
import './App.css'

const App: React.FC = () => {
	const [nodeCount, setNodeCount] = useState<number>(0)
	const [selectedTags, setSelectedTags] = useState<FilterTag[]>([])
	const [searchTerm, setSearchTerm] = useState<string>('')

	const checkAccessibility = () => {
		window.parent.postMessage(
			{
				pluginMessage: {
					type: 'CHECK_ACCESSIBILITY',
					tags: selectedTags,
				},
			},
			'*',
		)
	}

	useEffect(() => {
		const handleMessage = (event: MessageEvent) => {
			const message = event.data.pluginMessage
			if (message?.type === 'POST_NODE_COUNT') {
				setNodeCount(message.count)
			}
		}

		window.addEventListener('message', handleMessage)
		return () => {
			window.removeEventListener('message', handleMessage)
		}
	}, [])

	return (
		<div className="container">
			<div className="banner">
				<Icon svg="plugma" size={38} />
				<Icon svg="plus" size={24} />
				<img src={reactLogo} width="44" height="44" alt="A11y Assistant" />
			</div>

			<div className="field search">
				<Input
					type="text"
					placeholder="Search guidelines..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e)}
				/>
			</div>

			<FilterTags
				selectedTags={selectedTags}
				onTagsChange={setSelectedTags}
			/>

			<div className="field node-count">
				<span>{nodeCount} nodes selected</span>
				<Button onClick={checkAccessibility}>Check Accessibility</Button>
			</div>

			<WcagTree
				data={wcagData}
				selectedTags={selectedTags}
				searchTerm={searchTerm}
			/>
		</div>
	)
}

export default App
