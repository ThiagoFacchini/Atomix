// @flow

// --------------------------------------------------------
// ATOM - Atoms are the smallest application build block,
// they are like HTML tags, such as a form label, an input
// or a button.
// --------------------------------------------------------


// Animator
//
//

// --------------------------------------------------------
// REACT / REDUX IMPORTS
// --------------------------------------------------------
import React from 'react'
// --------------------------------------------------------

// --------------------------------------------------------
// STYLING IMPORTS
// --------------------------------------------------------
import classNames from 'classnames'
import styles from './styles.css'
// --------------------------------------------------------

// --------------------------------------------------------
// ATOM PROPERTIES DEFINITION
// --------------------------------------------------------
export type AnimationType = 'attention_seekers' | 'bouncing_entrances' | 'bouncing_exits' |
	'fading_entrances' | 'fading_exits' | 'flippers' | 'lightspeed' | 'rotating_entrances' |
	'rotating_exits' | 'sliding_entrances' | 'sliding_exits' | 'specials' | 'zooming_entrances' |
	'zooming_exits'

export type AnimationBehaviour = 'animateOnce' | 'animateLoop'

type PropTypes = {
	children: any,
	type: AnimationType,
	name: string,
	behaviour: AnimationBehaviour
}
// --------------------------------------------------------

// --------------------------------------------------------
// DEFINES ATOM DEFAULT PROPERTIES
// --------------------------------------------------------
const _defaultProps = {}
// --------------------------------------------------------

function Animator (props: PropTypes) {
	// --------------------------------------------------------
	// ATOM PRIVATE FUNCTION & VARIABLE DECLARATIONS
	// --------------------------------------------------------
	/**
	 * Build the component that is going to be rendered
	 * @param       {Object} props Animator component properties
	 * @return      {ReactComponent} Containing the Animator child(ren)
	 */
	function _getRenderElement (props: Object): Object {
		return (
			<div className={classNames(
				styles[props.type],
				styles[props.name],
				styles['animated'],
				styles[_getAnimationBehaviour(props.behaviour)]
			)}>
				{ props.children }
			</div>
		)
	}

	/**
	 * Define what class should return for animation behaviour
	 * @param       {AnimationBehaviour} behaviour Animation Behaviour
	 * @return      {String | null} String containing animation css class or null
	 */
	function _getAnimationBehaviour (behaviour: AnimationBehaviour): string | null {
		if (behaviour === 'animateOnce') {
			return null
		} else {
			return 'infinite'
		}
	}

	const renderElement: Object = _getRenderElement(props)
	// --------------------------------------------------------

	// --------------------------------------------------------
	// REACT RETURN FUNCTION
	// --------------------------------------------------------
	return (
		<div className={classNames(styles.animator)}>
			{ renderElement }
		</div>
	)
	// --------------------------------------------------------
}

Animator.defaultProps = _defaultProps
export default Animator
