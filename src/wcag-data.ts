export type FilterTag = 'forms' | 'navigation' | 'images' | 'text' | 'color' | 'layout' | 'interactive' | 'media' | 'keyboard' | 'mobile';

export interface SuccessCriterion {
  id: string;
  title: string;
  level: 'A' | 'AA' | 'AAA';
  description: string;
  designGuidance: string;
  tags: FilterTag[];
  expanded?: boolean;
}

export interface Guideline {
  id: string;
  title: string;
  description: string;
  successCriteria: SuccessCriterion[];
  expanded?: boolean;
}

export interface Principle {
  id: string;
  title: string;
  description: string;
  guidelines: Guideline[];
  expanded?: boolean;
}

export const wcagData: Principle[] = [
  {
    id: 'perceivable',
    title: '1. Perceivable',
    description: 'Information and user interface components must be presentable to users in ways they can perceive.',
    expanded: false,
    guidelines: [
      {
        id: '1.1',
        title: '1.1 Text Alternatives',
        description: 'Provide text alternatives for any non-text content.',
        expanded: false,
        successCriteria: [
          {
            id: '1.1.1',
            title: 'Non-text Content',
            level: 'A',
            description: 'All non-text content has a text alternative that serves the equivalent purpose.',
            designGuidance: 'Include alt text for images, icons, and graphics. Decorative images should have empty alt attributes.',
            tags: ['images', 'text']
          }
        ]
      },
      {
        id: '1.3',
        title: '1.3 Adaptable',
        description: 'Create content that can be presented in different ways without losing information or structure.',
        expanded: false,
        successCriteria: [
          {
            id: '1.3.1',
            title: 'Info and Relationships',
            level: 'A',
            description: 'Information, structure, and relationships conveyed through presentation can be programmatically determined.',
            designGuidance: 'Use proper heading hierarchy, labels for form controls, and semantic structure.',
            tags: ['text', 'forms', 'layout']
          },
          {
            id: '1.3.2',
            title: 'Meaningful Sequence',
            level: 'A',
            description: 'Content is presented in a meaningful sequence when read by assistive technologies.',
            designGuidance: 'Ensure visual layout matches logical reading order. Design layouts that work in single-column format.',
            tags: ['layout', 'text']
          },
          {
            id: '1.3.3',
            title: 'Sensory Characteristics',
            level: 'A',
            description: 'Instructions do not rely solely on sensory characteristics.',
            designGuidance: 'Don\'t rely only on color, shape, size, or position to convey information.',
            tags: ['color', 'layout', 'text']
          },
          {
            id: '1.3.4',
            title: 'Orientation',
            level: 'AA',
            description: 'Content does not restrict its view to a single display orientation.',
            designGuidance: 'Design interfaces that work in both portrait and landscape orientations.',
            tags: ['mobile', 'layout']
          },
          {
            id: '1.3.5',
            title: 'Identify Input Purpose',
            level: 'AA',
            description: 'The purpose of each input field can be programmatically determined.',
            designGuidance: 'Use clear labels and consistent input field designs that indicate their purpose.',
            tags: ['forms', 'text']
          }
        ]
      },
      {
        id: '1.4',
        title: '1.4 Distinguishable',
        description: 'Make it easier for users to see and hear content.',
        expanded: false,
        successCriteria: [
          {
            id: '1.4.1',
            title: 'Use of Color',
            level: 'A',
            description: 'Color is not used as the only visual means of conveying information.',
            designGuidance: 'Use additional visual cues like icons, patterns, or text alongside color coding.',
            tags: ['color', 'text']
          },
          {
            id: '1.4.3',
            title: 'Contrast (Minimum)',
            level: 'AA',
            description: 'Text has a contrast ratio of at least 4.5:1 (3:1 for large text).',
            designGuidance: 'Ensure sufficient color contrast between text and background colors.',
            tags: ['color', 'text']
          },
          {
            id: '1.4.4',
            title: 'Resize Text',
            level: 'AA',
            description: 'Text can be resized up to 200% without loss of content or functionality.',
            designGuidance: 'Design flexible layouts that accommodate larger text sizes.',
            tags: ['text', 'layout']
          },
          {
            id: '1.4.5',
            title: 'Images of Text',
            level: 'AA',
            description: 'Use actual text rather than images of text.',
            designGuidance: 'Avoid using images for text content. Use CSS styling for visual text effects.',
            tags: ['images', 'text']
          },
          {
            id: '1.4.6',
            title: 'Contrast (Enhanced)',
            level: 'AAA',
            description: 'Text has a contrast ratio of at least 7:1 (4.5:1 for large text).',
            designGuidance: 'Aim for higher contrast ratios for better accessibility.',
            tags: ['color', 'text']
          },
          {
            id: '1.4.10',
            title: 'Reflow',
            level: 'AA',
            description: 'Content can be presented without horizontal scrolling at 320px width.',
            designGuidance: 'Design responsive layouts that work on narrow screens without horizontal scrolling.',
            tags: ['mobile', 'layout']
          },
          {
            id: '1.4.11',
            title: 'Non-text Contrast',
            level: 'AA',
            description: 'UI components and graphics have a contrast ratio of at least 3:1.',
            designGuidance: 'Ensure sufficient contrast for buttons, form controls, and important graphics.',
            tags: ['color', 'interactive', 'forms']
          },
          {
            id: '1.4.12',
            title: 'Text Spacing',
            level: 'AA',
            description: 'Content adapts when text spacing is increased.',
            designGuidance: 'Design layouts that accommodate increased line height, letter spacing, and word spacing.',
            tags: ['text', 'layout']
          },
          {
            id: '1.4.13',
            title: 'Content on Hover or Focus',
            level: 'AA',
            description: 'Additional content that appears on hover or focus is dismissible, hoverable, and persistent.',
            designGuidance: 'Design tooltips and popover content that can be easily dismissed and accessed.',
            tags: ['interactive', 'keyboard']
          }
        ]
      }
    ]
  },
  {
    id: 'operable',
    title: '2. Operable',
    description: 'User interface components and navigation must be operable.',
    expanded: false,
    guidelines: [
      {
        id: '2.1',
        title: '2.1 Keyboard Accessible',
        description: 'Make all functionality available from a keyboard.',
        expanded: false,
        successCriteria: [
          {
            id: '2.1.1',
            title: 'Keyboard',
            level: 'A',
            description: 'All functionality is available from a keyboard.',
            designGuidance: 'Design interactive elements that can be operated with keyboard navigation.',
            tags: ['keyboard', 'interactive']
          },
          {
            id: '2.1.2',
            title: 'No Keyboard Trap',
            level: 'A',
            description: 'Keyboard focus is not trapped in any part of the content.',
            designGuidance: 'Ensure users can navigate away from any interactive element using only the keyboard.',
            tags: ['keyboard', 'interactive']
          },
          {
            id: '2.1.4',
            title: 'Character Key Shortcuts',
            level: 'A',
            description: 'Single character key shortcuts can be turned off or remapped.',
            designGuidance: 'Provide options to disable or customize single-key shortcuts.',
            tags: ['keyboard', 'interactive']
          }
        ]
      },
      {
        id: '2.4',
        title: '2.4 Navigable',
        description: 'Provide ways to help users navigate, find content, and determine where they are.',
        expanded: false,
        successCriteria: [
          {
            id: '2.4.1',
            title: 'Bypass Blocks',
            level: 'A',
            description: 'A mechanism is available to bypass blocks of content.',
            designGuidance: 'Include skip links or navigation shortcuts to main content areas.',
            tags: ['navigation', 'keyboard']
          },
          {
            id: '2.4.2',
            title: 'Page Titled',
            level: 'A',
            description: 'Web pages have titles that describe topic or purpose.',
            designGuidance: 'Design clear page headers and titles that describe the content.',
            tags: ['text', 'navigation']
          },
          {
            id: '2.4.3',
            title: 'Focus Order',
            level: 'A',
            description: 'Focusable components receive focus in an order that preserves meaning.',
            designGuidance: 'Design logical tab order that follows visual layout and content flow.',
            tags: ['keyboard', 'interactive', 'layout']
          },
          {
            id: '2.4.4',
            title: 'Link Purpose (In Context)',
            level: 'A',
            description: 'The purpose of each link can be determined from its text or context.',
            designGuidance: 'Use descriptive link text that explains the link\'s destination or purpose.',
            tags: ['text', 'navigation']
          },
          {
            id: '2.4.6',
            title: 'Headings and Labels',
            level: 'AA',
            description: 'Headings and labels describe topic or purpose.',
            designGuidance: 'Create clear, descriptive headings and form labels.',
            tags: ['text', 'forms', 'navigation']
          },
          {
            id: '2.4.7',
            title: 'Focus Visible',
            level: 'AA',
            description: 'Keyboard focus indicator is visible.',
            designGuidance: 'Design clear visual focus indicators for all interactive elements.',
            tags: ['keyboard', 'interactive', 'color']
          },
          {
            id: '2.4.11',
            title: 'Focus Not Obscured (Minimum)',
            level: 'AA',
            description: 'When a component receives keyboard focus, it is not entirely hidden.',
            designGuidance: 'Ensure focused elements remain visible and not covered by sticky headers or overlays.',
            tags: ['keyboard', 'interactive', 'layout']
          }
        ]
      },
      {
        id: '2.5',
        title: '2.5 Input Modalities',
        description: 'Make it easier for users to operate functionality through various inputs.',
        expanded: false,
        successCriteria: [
          {
            id: '2.5.1',
            title: 'Pointer Gestures',
            level: 'A',
            description: 'Functionality that uses multipoint or path-based gestures has single-pointer alternatives.',
            designGuidance: 'Provide simple tap/click alternatives to complex gestures.',
            tags: ['mobile', 'interactive']
          },
          {
            id: '2.5.2',
            title: 'Pointer Cancellation',
            level: 'A',
            description: 'Functions triggered by single-point activation can be cancelled.',
            designGuidance: 'Allow users to abort actions by moving away from the control before releasing.',
            tags: ['interactive', 'mobile']
          },
          {
            id: '2.5.3',
            title: 'Label in Name',
            level: 'A',
            description: 'Accessible name contains the visible label text.',
            designGuidance: 'Ensure button and control labels match their accessible names.',
            tags: ['text', 'interactive', 'forms']
          },
          {
            id: '2.5.4',
            title: 'Motion Actuation',
            level: 'A',
            description: 'Functionality triggered by device motion has alternative input methods.',
            designGuidance: 'Provide button alternatives to shake, tilt, or motion-based controls.',
            tags: ['mobile', 'interactive']
          },
          {
            id: '2.5.8',
            title: 'Target Size (Minimum)',
            level: 'AA',
            description: 'Touch targets are at least 24×24 CSS pixels.',
            designGuidance: 'Design touch targets with adequate size and spacing for easy interaction.',
            tags: ['mobile', 'interactive', 'layout']
          }
        ]
      }
    ]
  },
  {
    id: 'understandable',
    title: '3. Understandable',
    description: 'Information and the operation of user interface must be understandable.',
    expanded: false,
    guidelines: [
      {
        id: '3.1',
        title: '3.1 Readable',
        description: 'Make text content readable and understandable.',
        expanded: false,
        successCriteria: [
          {
            id: '3.1.1',
            title: 'Language of Page',
            level: 'A',
            description: 'The default language of the page is programmatically determined.',
            designGuidance: 'Specify the page language in design specifications.',
            tags: ['text']
          }
        ]
      },
      {
        id: '3.2',
        title: '3.2 Predictable',
        description: 'Make web pages appear and operate in predictable ways.',
        expanded: false,
        successCriteria: [
          {
            id: '3.2.1',
            title: 'On Focus',
            level: 'A',
            description: 'Receiving focus does not initiate a change of context.',
            designGuidance: 'Design focus states that don\'t trigger unexpected navigation or content changes.',
            tags: ['interactive', 'keyboard']
          },
          {
            id: '3.2.2',
            title: 'On Input',
            level: 'A',
            description: 'Changing the setting of a UI component does not automatically cause a change of context.',
            designGuidance: 'Require explicit user action (like clicking a submit button) for important changes.',
            tags: ['forms', 'interactive']
          },
          {
            id: '3.2.3',
            title: 'Consistent Navigation',
            level: 'AA',
            description: 'Navigation mechanisms appear in the same relative order across pages.',
            designGuidance: 'Maintain consistent placement and order of navigation elements.',
            tags: ['navigation', 'layout']
          },
          {
            id: '3.2.4',
            title: 'Consistent Identification',
            level: 'AA',
            description: 'Components with the same functionality are identified consistently.',
            designGuidance: 'Use consistent visual design and labeling for similar interactive elements.',
            tags: ['interactive', 'text', 'layout']
          }
        ]
      },
      {
        id: '3.3',
        title: '3.3 Input Assistance',
        description: 'Help users avoid and correct mistakes.',
        expanded: false,
        successCriteria: [
          {
            id: '3.3.1',
            title: 'Error Identification',
            level: 'A',
            description: 'Input errors are identified and described to the user in text.',
            designGuidance: 'Design clear error states with descriptive error messages.',
            tags: ['forms', 'text']
          },
          {
            id: '3.3.2',
            title: 'Labels or Instructions',
            level: 'A',
            description: 'Labels or instructions are provided when content requires user input.',
            designGuidance: 'Include clear labels and helpful instructions for all form fields.',
            tags: ['forms', 'text']
          },
          {
            id: '3.3.3',
            title: 'Error Suggestion',
            level: 'AA',
            description: 'Error messages suggest corrections when possible.',
            designGuidance: 'Design error messages that provide specific guidance for fixing errors.',
            tags: ['forms', 'text']
          },
          {
            id: '3.3.4',
            title: 'Error Prevention (Legal, Financial, Data)',
            level: 'AA',
            description: 'Submissions are reversible, checked, or confirmed for important data.',
            designGuidance: 'Include confirmation steps and review screens for critical actions.',
            tags: ['forms', 'interactive']
          }
        ]
      }
    ]
  },
  {
    id: 'robust',
    title: '4. Robust',
    description: 'Content must be robust enough that it can be interpreted reliably by a wide variety of user agents.',
    expanded: false,
    guidelines: [
      {
        id: '4.1',
        title: '4.1 Compatible',
        description: 'Maximize compatibility with current and future assistive technologies.',
        expanded: false,
        successCriteria: [
          {
            id: '4.1.2',
            title: 'Name, Role, Value',
            level: 'A',
            description: 'UI components have accessible names, roles, and values that can be programmatically determined.',
            designGuidance: 'Ensure interactive elements have clear purposes and states that can be communicated to assistive technologies.',
            tags: ['interactive', 'text', 'forms']
          },
          {
            id: '4.1.3',
            title: 'Status Messages',
            level: 'AA',
            description: 'Status messages can be programmatically determined without receiving focus.',
            designGuidance: 'Design status messages and notifications that are announced to screen readers.',
            tags: ['text', 'interactive']
          }
        ]
      }
    ]
  }
];

export function getFilteredCriteria(tags: FilterTag[]): SuccessCriterion[] {
  const allCriteria: SuccessCriterion[] = [];
  
  wcagData.forEach(principle => {
    principle.guidelines.forEach(guideline => {
      guideline.successCriteria.forEach(criterion => {
        if (tags.length === 0 || criterion.tags.some(tag => tags.includes(tag))) {
          allCriteria.push(criterion);
        }
      });
    });
  });
  
  return allCriteria;
}

export function toggleExpanded(data: Principle[], targetId: string): void {
  data.forEach(principle => {
    if (principle.id === targetId) {
      principle.expanded = !principle.expanded;
    } else {
      principle.guidelines.forEach(guideline => {
        if (guideline.id === targetId) {
          guideline.expanded = !guideline.expanded;
        } else {
          guideline.successCriteria.forEach(criterion => {
            if (criterion.id === targetId) {
              criterion.expanded = !criterion.expanded;
            }
          });
        }
      });
    }
  });
}
