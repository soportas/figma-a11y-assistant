// Read the docs https://plugma.dev/docs

export default function () {
	figma.showUI(__html__, { width: 320, height: 600, themeColors: true })

	figma.ui.onmessage = (message) => {
		if (message.type === 'CHECK_ACCESSIBILITY') {
			checkSelectedNodes(message.tags || [])
		}
	}

	function checkSelectedNodes(filterTags: string[]) {
		const selection = figma.currentPage.selection
		
		if (selection.length === 0) {
			figma.notify('Please select some elements to check accessibility')
			return
		}

		// Basic accessibility checks
		const issues: string[] = []
		
		selection.forEach(node => {
			// Check for alt text on images
			if (node.type === 'RECTANGLE' || node.type === 'ELLIPSE') {
				if (!node.name || node.name.startsWith('Rectangle') || node.name.startsWith('Ellipse')) {
					issues.push(`${node.name}: Consider adding descriptive name for screen readers`)
				}
			}
			
			// Check text contrast (basic)
			if (node.type === 'TEXT') {
				if (node.fontSize && node.fontSize < 12) {
					issues.push(`${node.name}: Text size may be too small (${node.fontSize}px)`)
				}
			}
		})

		if (issues.length > 0) {
			figma.notify(`Found ${issues.length} accessibility issues`)
			console.log('Accessibility issues:', issues)
		} else {
			figma.notify('No obvious accessibility issues found')
		}
	}

	function postNodeCount() {
		const nodeCount = figma.currentPage.selection.length

		figma.ui.postMessage({
			type: 'POST_NODE_COUNT',
			count: nodeCount,
		})
	}

	figma.on('selectionchange', postNodeCount)
	postNodeCount() // Initial count
}
