import React, { useState } from 'react'
import { type Principle, type Guideline, type SuccessCriterion, type FilterTag } from '../wcag-data'
import './WcagTree.css'

interface WcagTreeProps {
	data: Principle[]
	selectedTags: FilterTag[]
	searchTerm: string
}

interface TreeItemProps {
	item: Principle | Guideline | SuccessCriterion
	level: number
	onToggle: (id: string) => void
	isVisible: boolean
}

const TreeItem: React.FC<TreeItemProps> = ({ item, level, onToggle, isVisible }) => {
	if (!isVisible) return null

	const isPrinciple = 'guidelines' in item
	const isGuideline = 'successCriteria' in item && !('guidelines' in item)
	const isCriterion = 'level' in item

	const hasChildren = isPrinciple || isGuideline
	const isExpanded = item.expanded || false

	const handleToggle = () => {
		if (hasChildren) {
			onToggle(item.id)
		}
	}

	return (
		<div className={`tree-item level-${level}`}>
			<div 
				className={`tree-item-header ${hasChildren ? 'expandable' : ''} ${isExpanded ? 'expanded' : ''}`}
				onClick={handleToggle}
			>
				{hasChildren && (
					<span className="expand-icon">
						{isExpanded ? '▼' : '▶'}
					</span>
				)}
				<div className="tree-item-content">
					<div className="tree-item-title">
						{item.title}
						{isCriterion && (
							<span className={`level-badge level-${(item as SuccessCriterion).level.toLowerCase()}`}>
								{(item as SuccessCriterion).level}
							</span>
						)}
					</div>
					<div className="tree-item-description">
						{item.description}
					</div>
					{isCriterion && (
						<div className="design-guidance">
							<strong>Design Guidance:</strong> {(item as SuccessCriterion).designGuidance}
						</div>
					)}
					{isCriterion && (
						<div className="tags">
							{(item as SuccessCriterion).tags.map(tag => (
								<span key={tag} className="tag">{tag}</span>
							))}
						</div>
					)}
				</div>
			</div>
			
			{hasChildren && isExpanded && (
				<div className="tree-item-children">
					{isPrinciple && (item as Principle).guidelines.map(guideline => (
						<TreeItem
							key={guideline.id}
							item={guideline}
							level={level + 1}
							onToggle={onToggle}
							isVisible={true}
						/>
					))}
					{isGuideline && (item as Guideline).successCriteria.map(criterion => (
						<TreeItem
							key={criterion.id}
							item={criterion}
							level={level + 1}
							onToggle={onToggle}
							isVisible={true}
						/>
					))}
				</div>
			)}
		</div>
	)
}

const WcagTree: React.FC<WcagTreeProps> = ({ data, selectedTags, searchTerm }) => {
	const [treeData, setTreeData] = useState(data)

	const toggleItem = (id: string) => {
		const newData = [...treeData]
		toggleExpanded(newData, id)
		setTreeData(newData)
	}

	const toggleExpanded = (data: Principle[], targetId: string): void => {
		data.forEach(principle => {
			if (principle.id === targetId) {
				principle.expanded = !principle.expanded
			} else {
				principle.guidelines.forEach(guideline => {
					if (guideline.id === targetId) {
						guideline.expanded = !guideline.expanded
					} else {
						guideline.successCriteria.forEach(criterion => {
							if (criterion.id === targetId) {
								criterion.expanded = !criterion.expanded
							}
						})
					}
				})
			}
		})
	}

	const isItemVisible = (item: Principle | Guideline | SuccessCriterion): boolean => {
		// Search filter
		if (searchTerm && !item.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
			!item.description.toLowerCase().includes(searchTerm.toLowerCase())) {
			return false
		}

		// Tag filter - only apply to success criteria
		if ('level' in item && selectedTags.length > 0) {
			const criterion = item as SuccessCriterion
			return criterion.tags.some(tag => selectedTags.includes(tag))
		}

		return true
	}

	return (
		<div className="wcag-tree">
			{treeData.map(principle => (
				<TreeItem
					key={principle.id}
					item={principle}
					level={0}
					onToggle={toggleItem}
					isVisible={isItemVisible(principle)}
				/>
			))}
		</div>
	)
}

export default WcagTree
