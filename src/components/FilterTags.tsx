import React from 'react'
import { type FilterTag } from '../wcag-data'
import './FilterTags.css'

interface FilterTagsProps {
	selectedTags: FilterTag[]
	onTagsChange: (tags: FilterTag[]) => void
}

const availableTags: FilterTag[] = [
	'forms', 'navigation', 'images', 'text', 'color', 
	'layout', 'interactive', 'media', 'keyboard', 'mobile'
]

const FilterTags: React.FC<FilterTagsProps> = ({ selectedTags, onTagsChange }) => {
	const toggleTag = (tag: FilterTag) => {
		const newTags = selectedTags.includes(tag)
			? selectedTags.filter(t => t !== tag)
			: [...selectedTags, tag]
		onTagsChange(newTags)
	}

	const clearAll = () => {
		onTagsChange([])
	}

	return (
		<div className="filter-tags">
			<div className="filter-header">
				<span>Filter by:</span>
				{selectedTags.length > 0 && (
					<button className="clear-all" onClick={clearAll}>Clear All</button>
				)}
			</div>
			<div className="tags-container">
				{availableTags.map(tag => (
					<button
						key={tag}
						className={`tag-button ${selectedTags.includes(tag) ? 'selected' : ''}`}
						onClick={() => toggleTag(tag)}
					>
						{tag}
					</button>
				))}
			</div>
		</div>
	)
}

export default FilterTags
